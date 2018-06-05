import React from 'react'

import Train from './Train/Train';

const trains = (props) => {

    let trains = props.trains.map((train, index) => {
        return <Train time={train.time} platform={train.platform} delay={train.delay} key={index}/>
    });
  return (
    <div className='container'>
        <div className='row'>
            {trains}
        </div>
    </div>
  )
}

export default trains
