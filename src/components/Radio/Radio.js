import React from 'react';

const radio = (props) => {
    return (
        <div>
            <input type="radio" id={props.direction} name="direction" value={props.direction} onChange={props.changed} />
            <label htmlFor={props.direction}> {props.direction} </label>
        </div>
    );
}

export default radio;