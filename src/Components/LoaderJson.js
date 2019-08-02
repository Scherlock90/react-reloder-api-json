import React from 'react';
import axios from 'axios';
import ViewLoaderJson from './ViewLoaderJson';
import '../Styles/main.css';
import $ from 'jquery';
import Button from '@material-ui/core/Button';

export default class LoaderJSon extends React.Component {
    state = {
        dataGov: [],
        subDataGov: [],
        linksDataGov: [],
    }
    componentDidMount() {
        axios.get('https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created')
            .then(res => {
                console.log(res);
                this.setState({
                    dataGov: res.data.data,
                    subDataGov: res.data.meta,
                    linksDataGov: res.data.links,
                })
            })
    }
    handleMove = (e) => {
        let pointer = document.querySelector('.pointer');
        $(pointer).css({ left: e.pageX, top: e.pageY, color: "#fff" });
    }
    showLoupe = (e) => {
        e.preventDefault();
        let pointer = document.querySelector('.pointer');
        $(pointer).css({ opacity: 1, left: e.pageX, top: e.pageY });
    }
    
    render() {
        const { dataGov } = this.state;
        const dataList = dataGov.length ? (
            dataGov.map((listInfo) => {
                return (
                    <div className="post card backgroundCard" key={listInfo.id}>
                        <div className="card-content">
                            <ViewLoaderJson
                                tags={listInfo.attributes.tags}
                                title={listInfo.attributes.title
                                    .replace(/( \S) /g, "$1\xa0")}
                                notes={listInfo.attributes.notes
                                    .replace(/<\/?[^>]+(>|$)/g, "")
                                    .slice(0, 220)
                                    .replace(/( \S) /g, "$1\xa0") + '...'}

                                modified={
                                    listInfo.attributes.modified
                                        .slice(0, 10)
                                        .replace(/-/g, ".")
                                    + ', '
                                    + listInfo.attributes.modified
                                        .slice(11, 16)
                                }
                                created={
                                    listInfo.attributes.created
                                        .slice(0, 10)
                                        .replace(/-/g, ".")
                                    + ', '
                                    + listInfo.attributes.created
                                        .slice(11, 16)
                                }
                                views_count={listInfo.attributes.views_count}
                                author={listInfo.attributes.author}
                            />
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No data yet! </div>
            )
        return (
            <div className="containerLoader">
                <Button 
                    variant="contained"
                    color="primary" 
                    onClick={this.showLoupe} 
                >
                     Show Loupe
                </Button>
                <div className="pointer" onMouseMove={this.handleMove} onMouseOut={this.handleMove}></div>
                <div className="card z-depth-0 project-summary thumb">
                    <div className="card-content grey-text text-darken-3 containerPost">
                        {dataList}
                    </div>
                    <div>
                        <strong>
                            Elementy meta i links:
                        </strong>
                        <div className="countStyle">
                            Count: {this.state.subDataGov.count}
                        </div>
                        <div>
                            Path: {this.state.subDataGov.path}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}