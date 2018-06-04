import React from 'react';
import Pub from './Pub/Pub';
import classes from './Pubs.css';

const pubs = (props) => {
    return (
        <div className={classes.Pubs}>
            <h4>Choose the stops</h4>
            <div>
                {props.stops.map((pub) => {
                    return <Pub pub={pub.code} pubName={pub.name} checked={pub.visit} changed={props.changed} key={pub.code}/>
                })}
            </div>
        </div>
    );
};

export default pubs;