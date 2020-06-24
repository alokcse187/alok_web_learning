import React from 'react';

const header = (props) => {
    return(
        <header className="heading">
            <div className="p25">{props.profName}</div>
        </header>
    );
};

export default header; 