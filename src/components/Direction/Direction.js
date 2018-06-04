import React from 'react';
import Radio from '../Radio/Radio';
import classes from './Direction.css';

const direction = (props) => {
    return (
        <div className={classes.Direction}>
            <h4>Choose the direction</h4>
            <Radio direction="west" changed={props.changed} />
            <Radio direction="east" changed={props.changed} />
        </div>
    );
}

export default direction;