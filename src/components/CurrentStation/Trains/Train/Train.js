import React from 'react'
import classes from './Train.css';

const train = (props) => {

    let delay;

    if (props.delay !== props.time) {
        delay = <p style={{color:'#b75451', fontSize:'1.2em'}}>Delayed to {props.delay}</p>
    } else {
        delay = <p>Runinng on time</p>
    }

  return (
    <div className={'col-md-4'}>
        <div className={classes.Train}>
            <p>Due to leave at {props.time}, on platform {props.platform}.</p>
            {delay}
            <p>Countdown!!!!</p>
        </div>
    </div>
  )
}

export default train
