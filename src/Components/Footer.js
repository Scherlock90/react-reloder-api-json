import React from 'react';

const footerStyle = {
    textAlign: 'center',
    color: '#1a237e !important',
    padding: '2em 0 2em 0',
    width: 'auto'
}
const titleStyle = {
    width: 'auto',
    borderRadius: '5%',
    fontWeight: '600',
    fontSize: '20px',
    zIndex: '100',
    position: 'relative',
}

export default function Footer () {
    return (
        <div style={footerStyle}>
            <a style={titleStyle} href="http://senjs.eu/"> Designed SeN</a> 
        </div>
    )
}