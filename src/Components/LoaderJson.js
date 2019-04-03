import React from 'react';
import axios from 'axios';

 const styleBlue = {
 color: 'blue'
 }
const DataGoThumb = (props) => (
    <div className="thumb">
        <div to={'/'}  className="grey-text text-darken-4 ">
            <span className="card-title card-title-title center heading">
                <span className='headingText'>
                    {props.title}
                </span> 
            </span>
        </div>
        <div className="grey-text text-darken-3 strechLine" style={styleBlue}>
            <div dangerouslySetInnerHTML={ {__html: props.notes} } />
        </div> 
        <div className="row center">
            <div className="col s12 m6">
                <span className="d-md-block1"> Data modyfikacji: </span>
                <span className="d-md-block"> {props.modified} </span>
            </div>
            <div className="col s12 m5 offset-m1">
                <span className="d-md-block1"> Data utworzenia: </span>
                <span className="d-md-block"> {props.created} </span>
            </div>
        </div>
        <div className="center" >
            <span className="d-md-block1">
                Odwiedzających: 
            </span>
            <span className="d-md-block">
                {props.views_count} 
            </span>
        </div>
        <div className="center">
            {props.author}
        </div>
        <div className="grey-text text-darken-3 strechLine">
            Słowa kluczowe: {' ' + props.tags}
        </div>
    </div>
  );

export default class LoaderJSon extends React.Component {
    state = {
        dataGov: [],
        subDataGov: [],
        linksDataGov: [],
    }
    componentDidMount () {
        axios.get('https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created')
        .then(res => {
            console.log(res);
            this.setState({
                dataGov: res.data.data,
                subDataGov: res.data.meta,
                linksDataGov: res.data.links
            })
        })
    }
   render () {
    const { dataGov } = this.state;
    const { subDataGov, linksDataGov } = this.state;
    const dataList = dataGov.length ? (
        dataGov.map((listInfo, i) => {
            return (
                <div className="post card" key={listInfo.id}> 
                    <div className="card-content">
                        <DataGoThumb 
                            tags={listInfo.attributes.tags} 
                            title={listInfo.attributes.title.replace(/( \S) /g, "$1\xa0")} 
                            notes={listInfo.attributes.notes.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 220).replace(/( \S) /g, "$1\xa0") + '...'}
                            
                            modified={
                                listInfo.attributes.modified.slice(0,10).replace(/-/g, ".") 
                                + ', '
                                + listInfo.attributes.modified.slice(11,16)
                            }
                            created={
                                listInfo.attributes.created.slice(0,10).replace(/-/g, ".") 
                                + ', '
                                + listInfo.attributes.created.slice(11,16)
                            }
                            views_count={listInfo.attributes.views_count}
                            author={listInfo.attributes.author}
                        />
                        <div>
                            {listInfo.relationships.datasets.links.related.href}
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No data yet! </div>
    )
    console.log(dataList);
    console.log(subDataGov);
    console.log(linksDataGov);
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    {dataList}
                </div>
                <div>
                    <strong>Elementy meta i links:</strong>
                    <div>
                        Count: {this.state.subDataGov.count}
                    </div>
                    <div>
                        Path: {this.state.subDataGov.path}
                    </div>
                </div>
            </div>
        )
    }
}
