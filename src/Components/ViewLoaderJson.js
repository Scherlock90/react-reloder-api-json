import React from 'react';

const styleButton = {
    color: 'blue'
}

const ViewLoaderJson = (props) => (
    <div>
        <div className="grey-text text-darken-4">
            <div className="card-title card-title-title center heading headingText2">
                <span className='headingText'>
                    {props.title}
                </span>
            </div>
        </div>
        <div 
            className="grey-text text-darken-3 strechLine notesMain" 
            style={styleButton}
        >
            <div dangerouslySetInnerHTML={{ __html: props.notes }} />
        </div>
        <div className="row center">
            <div className="col s12 m6">
                <span className="d-md-block1 bolderInfo"> 
                    Data modyfikacji: 
                </span>
                <span className="d-md-block"> 
                    {props.modified} 
                </span>
            </div>
            <div className="col s12 m5 offset-m1">
                <span className="d-md-block1 bolderInfo">
                    Data utworzenia: 
                </span>
                <span className="d-md-block"> 
                    {props.created} 
                </span>
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
            <span className="bolderInfo">
                Słowa kluczowe:
            </span>
            <span>
                {' ' + props.tags}
            </span>
        </div>
    </div>
);

export default ViewLoaderJson;