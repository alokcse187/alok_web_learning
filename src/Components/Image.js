import React from 'react';

const image = (props) => {
    return (
        <img src={props.src} alt={props.src} width={props.width} height={props.height} />    
    );
};

export default image;