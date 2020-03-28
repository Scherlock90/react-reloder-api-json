import React, { Component } from 'react';
import ViewLoaderJson from './ViewLoaderJson';

import { Services } from '../../services/Services';

export class LoaderJSon extends Component {
    state = {
        dataGov: [],
        subDataGov: [],
        linksDataGov: [],
    }

    async componentDidMount() {
        const response = await Services.getApiPostDate()
        .catch(error => {
            if (error) return console.log(error)
        });

        if(response) {
            const { data, meta, links } = response.data

            this.setState({
                dataGov: data,
                subDataGov: meta,
                linksDataGov: links,
            });
        }
    }

    render() {
        const { dataGov, subDataGov: { path, count } } = this.state;

        return (
            <div className="container-loader">
                <div className="card z-depth-0 project-summary thumb">
                    <div className="card-content grey-text text-darken-3 container-post">
                        {dataGov.length
                            ?   (dataGov.map(({ id, attributes: { title, tags, notes, modified, created, views_count, author }}) => (
                                    <div className="post card background-card" key={id}>
                                        <div className="card-content">
                                            <ViewLoaderJson
                                                {...{ tags, author, views_count }}
                                                title={title.replace(/( \S) /g, "$1\xa0")}
                                                notes={notes
                                                    .replace(/<\/?[^>]+(>|$)/g, "")
                                                    .slice(0, 220)
                                                    .replace(/( \S) /g, "$1\xa0") + '...'}

                                                modified={
                                                    modified
                                                        .slice(0, 10)
                                                        .replace(/-/g, ".")
                                                    + ', '
                                                    + modified.slice(11, 16)
                                                }
                                                created={
                                                    created
                                                        .slice(0, 10)
                                                        .replace(/-/g, ".")
                                                    + ', '
                                                    + created.slice(11, 16)
                                                }
                                            />
                                        </div>
                                    </div>
                                )))
                            : <div className="center">No data yet! </div>
                        }
                    </div>
                    <div>
                        <strong>Elementy meta i links:</strong>
                        <div className="count-style">Count: { count }</div>
                        <div>Path: { path }</div>
                    </div>
                </div>
            </div>
        )
    }
}