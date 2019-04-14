import React from 'react';
import axios from 'axios';
import "./LoaderJson.css";
import $ from 'jquery'; 
import Button from '@material-ui/core/Button';

 const styleBlue = {
 color: 'blue'
 }
const DataGoThumb = (props) => (
    <div>
        <div className="grey-text text-darken-4">
            <div className="card-title card-title-title center heading headingText2">
                <span className='headingText'>
                    {props.title}
                </span> 
            </div>
        </div>
        <div className="grey-text text-darken-3 strechLine notesMain" style={styleBlue}>
            <div dangerouslySetInnerHTML={ {__html: props.notes} } />
        </div> 
        <div className="row center">
            <div className="col s12 m6">
                <span className="d-md-block1 bolderInfo"> Data modyfikacji: </span>
                <span className="d-md-block"> {props.modified} </span>
            </div>
            <div className="col s12 m5 offset-m1">
                <span className="d-md-block1 bolderInfo"> Data utworzenia: </span>
                <span className="d-md-block"> {props.created} </span>
            </div>
        </div>
        <div className="center" >
            <span className="d-md-block1 bolderInfo">
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
            <span className="bolderInfo">Słowa kluczowe:</span> 
            <span>{' ' + props.tags}</span>
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
                linksDataGov: res.data.links,
                x: 0,
                y: 0
            })
        })
    }
    handleMove = (e) => {        
        let pointer = document.querySelector('.pointer');        
        $(pointer).css({left: e.pageX, top: e.pageY});
    }
    showHidden = (e) => {
        e.preventDefault();
        console.log('show');
        let pointer = document.querySelector('.pointer');        
        $(pointer).css({opacity: 1});
    }
   render () {
    const { dataGov } = this.state;
    const { subDataGov, linksDataGov } = this.state;
    const dataList = dataGov.length ? (
        dataGov.map((listInfo, i) => {
            return (
                <div className="post card backgroundCard" key={listInfo.id}> 
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
            <div className="containerLoader">
            <Button variant="contained" color="primary" onClick={this.showHidden}>Show hidden</Button>
                <div className="pointer" onMouseMove={this.handleMove} onMouseOut={this.handleMove}></div>            
                <div className="card z-depth-0 project-summary thumb">
                    <div className="card-content grey-text text-darken-3 containerPost">
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
            </div>
        )
    }
}
