import React from 'react';

export const Container = ({ className, name, data }) =>
    <div {...{ className }}>
        <span className="d-md-block1 bolder-info">
            { name }
        </span>
        <span className="d-md-block">
            { data }
        </span>
    </div>
