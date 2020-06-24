import React from 'react';

const navigation = (props) => {
    return (
        <div id="sideNav" className="sideNav" onClick={props.onclick}>
            <a href="#Home" data-content="home" className="active">Home</a>
            <a href="#About" data-content="about">About</a>
            <a href="#CV" data-content="cv">Curriculum Vitae</a>
            <a href="#Publications" data-content="publications">Publications</a>
            <a href="#Research" data-content="research">Research</a>
            <a href="#Teaching" data-content="teaching">Teaching</a>
            <a href="#Links" data-content="links">Links or News</a>
        </div>
    );
};

export default navigation;