import React from 'react';

const radio = (props) => {
    return (
        <div>
            <label htmlFor={props.direction}>  {props.direction} </label>
            <input type="radio" id={props.direction} name="direction" value={props.direction} onChange={props.changed} />
        </div>
    );
}

export default radio;