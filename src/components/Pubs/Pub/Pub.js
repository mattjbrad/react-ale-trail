import React from 'react';

const pub = (props) => {
    return(
        <div>
            <input type="checkbox" id={props.pub} name="route" checked={props.checked} onChange={props.changed}/>
            <label htmlFor={props.pub}> {props.pubName} </label>
        </div>
    );
}

export default pub;