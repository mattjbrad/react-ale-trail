import React from 'react';
import Pub from './Pub/Pub';

const pubs = () => {
    return (
        <div>
            <p>Please choose the pubs you want to visit</p>
            <Pub pub='SYB' pubName='Station Buffet Bar'/>
            <Pub pub='GNF' pubName='The Railway Inn'/>
            <Pub pub='MSN' pubName='The Riverhead Brewery Tap'/>
            <Pub pub='SWT' pubName='The Commercial'/>
            <Pub pub='HUD' pubName='Kings Head'/>
            <Pub pub='MIR' pubName='Navigation'/>
            <Pub pub='DEW' pubName='West Riding'/>
            <Pub pub='BTL' pubName='Cellar Bar'/>
        </div>
    );
};

export default pubs;