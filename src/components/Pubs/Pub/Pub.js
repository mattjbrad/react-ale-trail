import React from 'react';

const pub = (props) => {
    return(
        <div >
            <label htmlFor={props.pub}>{props.pubName}</label>
            <input type="checkbox" id={props.pub} name="route" checked={props.checked} onChange={props.changed}/>
        </div>
    );
}

export default pub;