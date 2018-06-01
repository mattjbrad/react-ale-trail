import React from 'react';

const pub = (props) => {
    return(
        <div>
            <input type="checkbox" id={props.pub} name="route" value={props.pub}/>
            <label for={props.pub}> {props.pubName} </label>
        </div>
    );
}

export default pub;