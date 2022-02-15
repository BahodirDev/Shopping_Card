import React from 'react';
import '../Style/Loader.css';

function Loader(props) {
    return (
        <div className="loader Loader">
            <div className="big-circle">
                <div className="small-circle Loading"></div>
            </div>
        </div>
    );
}

export default Loader;