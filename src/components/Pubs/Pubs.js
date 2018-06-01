import React from 'react';
import Pub from './Pub/Pub';

const pubs = (props) => {
    return (
        <div>
            <p>Please choose the pubs you want to visit</p>
            {props.stops.map((pub) => {
                return <Pub pub={pub.code} pubName={pub.name} checked={pub.visit} changed={props.changed} key={pub.code}/>
            })}
        </div>
    );
};

export default pubs;