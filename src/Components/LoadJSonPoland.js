import React from 'react';
import axios from 'axios';
import './main.css';
import {HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis,
    LineMarkSeries} from 'react-vis';

// const DataGoThumb = (props) => (
//     <div>
//         <div className="grey-text text-darken-4">
//             <div className="card-title card-title-title center heading headingText2">                
//             </div>
//         </div>
//         <div className='headingText'>
//             Country Code: {props.title}
//         </div> 
//         <div className="row center">
//             <div className="col s12 m6">
//                 <span className="d-md-block1 bolderInfo"> Country Name: </span>
//                 <span className="d-md-block"> {props.CountryName}</span>
//             </div>
//             <div className="col s12 m5 offset-m1">
//                 <span className="d-md-block1 bolderInfo"> Year </span>
//                 <span className="d-md-block"> {props.Year} </span>
//                 <span className="d-md-block"> Value </span>
//                 <span className="d-md-block">
//                     {props.Value}
//                 </span>
//             </div>
//         </div>
//     </div>
//   );

  let conutrCode = "Country Code";
  let countryName = "Country Name";
  let year = "Year";

export default class LoadJSonPoland extends React.Component {
    state = {
        dataGov: [],
        subDataGov: [],
        linksDataGov: [],
    }
    componentDidMount () {
        axios.get('https://pkgstore.datahub.io/core/population/population_json/data/43d34c2353cbd16a0aa8cadfb193af05/population_json.json')
        .then(res => {
            console.log(res.data[11449]);
            this.setState({
                dataGov: res.data
            })
        })
    }
   render () {
    const { dataGov } = this.state;
    // const dataList = dataGov.length ? (
      const dataList = dataGov.map((listInfo) => listInfo.Year)
      const dataList2 = dataGov.map((listInfo2) => listInfo2.Value)
    // ) : (
    //     <div className="center">No data yet! </div>
    // )
        return (
            <div  className="containerLoader" style={containerLoader}>
                <div className="card z-depth-0 project-summary thumb">
                    <div className="card-content grey-text text-darken-3 containerPost">
                        {/* {dataList[11505]} */}
                    </div>
                    
                    <XYPlot  width={800} height={600} size={10}  yDomain={[1960, 2016]}  xDomain={[dataList2[11449], dataList2[11460] + 1000000]} >
                        <XAxis tickFormat={v => `${v}`}  tickLabelAngle={-20} />
                        <YAxis tickFormat={v => `${v}`} />
                    <HorizontalGridLines  />
                    <VerticalGridLines />
                    <LineMarkSeries 
                        lineStyle={{stroke:"red"}}
                        data={[
                            {
                                y: dataList[11449], x: dataList2[11449]
                            },
                            {
                                y: dataList[11460], x: dataList2[11460]
                            }
                        ]}
                        
                         />
                    </XYPlot>
                    {/* <XYPlot
                        width={300}
                        height={300}>
                        <HorizontalGridLines />
                        <LineSeries
                            data={[
                                {x: 1, y: dataList[11405] },
                                {x: 2, y: 1690 },
                                {x: 3, y: 1660}
                            
                            ]}/>
                        <XAxis />
                        <YAxis />
                    </XYPlot> */}
                </div>
            </div>
        )
    }
}


const containerLoader = {
    display: 'flex',
    justifyContent: 'center',
}