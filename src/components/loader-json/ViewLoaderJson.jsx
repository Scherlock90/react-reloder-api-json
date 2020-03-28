import React from 'react';

import { Container } from './container/Container';

export const ViewLoaderJson = ({
    title,
    notes,
    modified,
    created,
    views_count,
    author,
    tags,
}) => (
    <div>
        <div className="grey-text text-darken-4">
            <div className="card-title card-title-title center heading heading-text-next">
                <span className='heading-text'>{ title }</span>
            </div>
        </div>
        <div className="grey-text text-darken-3 strech-line notes-main">
            <div dangerouslySetInnerHTML={{ __html: notes }} />
        </div>
        <div className="row center">
            <Container className={"col s12 m6"} name={"Data modyfikacji:"} data={modified} />
            <Container className={"col s12 m5 offset-m1"} name={"Data utworzenia:"} data={created} />
        </div>
        <div className="center">{ author }</div>
        <Container className={"center"} name={"Odwiedzających:"} data={views_count} />
        <Container className={"grey-text text-darken-3 strech-line"} name={"Słowa kluczowe:"} data={`${tags}`} />
    </div>
);

export default ViewLoaderJson;