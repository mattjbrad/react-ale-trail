import React from 'react'
import classes from './Train.css';

const train = (props) => {

    let delay;

    if (props.delay !== props.time) {
        delay = <p>The train is delayed and is now scheduled at {props.delay};</p>
    } else {
        delay = <p>Runinng on time</p>
    }

  return (
    <div className={classes.Train}>
        <p>Train is scheduled to depart at {props.time}, on platform {props.platform}.</p>
        {delay}
    </div>
  )
}

export default train
