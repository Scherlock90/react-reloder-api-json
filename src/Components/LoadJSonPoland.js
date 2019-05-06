import React from 'react';
import axios from 'axios';
import './main.css';

const DataGoThumb = (props) => (
    <div>
        <div className="grey-text text-darken-4">
            <div className="card-title card-title-title center heading headingText2">                
            </div>
        </div>
        <div className='headingText'>
            Country Code: {props.title}
        </div> 
        <div className="row center">
            <div className="col s12 m6">
                <span className="d-md-block1 bolderInfo"> Country Name: </span>
                <span className="d-md-block"> {props.CountryName}</span>
            </div>
            <div className="col s12 m5 offset-m1">
                <span className="d-md-block1 bolderInfo"> Year </span>
                <span className="d-md-block"> {props.Year} </span>
                <span className="d-md-block"> Value </span>
                <span className="d-md-block">
                    {props.Value}
                </span>
            </div>
        </div>
    </div>
  );

  const schema = {
        "fields": [
          {
            "name": "Country Name",
            "type": "string"
          },
          {
            "name": "Country Code",
            "type": "string"
          },
          {
            "name": "Year",
            "type": "year"
          },
          {
            "name": "Value",
            "type": "number"
          }
        ]
  }

  let conutrCode = "Country Code";
  let countryName = "Country Name";

export default class LoadJSonPoland extends React.Component {
    state = {
        dataGov: [],
        subDataGov: [],
        linksDataGov: [],
    }
    componentDidMount () {
        axios.get('https://pkgstore.datahub.io/core/population/population_json/data/43d34c2353cbd16a0aa8cadfb193af05/population_json.json')
        .then(res => {
            console.log(res.data[11505]);
            this.setState({
                dataGov: res.data
            })
        })
    }
   render () {
    const { dataGov } = this.state;
    const dataList = dataGov.length ? (
        dataGov.map((listInfo, i) => {
            return (
                <div className="post card backgroundCard"key={i} > 
                    <div className="card-content" >
                        <DataGoThumb 
                            title={listInfo[conutrCode]}  
                            CountryName={listInfo[countryName]} 
                            Year={listInfo.Year}
                            Value={listInfo.Value}                         
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
                <div className="card z-depth-0 project-summary thumb">
                    <div className="card-content grey-text text-darken-3 containerPost">
                        {dataList[11505]}
                    </div>
                </div>
            </div>
        )
    }
}
