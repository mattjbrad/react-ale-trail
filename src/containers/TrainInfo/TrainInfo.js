import React, {Component} from 'react';

import Trains from '../../components/CurrentStation/Trains/Trains';
import CurrentStation from '../../components/CurrentStation/CurrentStaion';
import classes from './TrainInfo.css';

class TrainInfo extends Component {

    state = {
        currentStop: 'SYB',
        trains:[{
            time: '12:00',
            platform: '1',
            delay: '12:00'
        },
        {
            time: '13:00',
            platform: '2',
            delay: '13:05'
        },
        {
            time: '14:00',
            plarform: '3',
            delay: '14:00'
        }]
    };

    render () {
        return(
            <div className={classes.TrainInfo}>
                <CurrentStation current={this.state.currentStop}/>
                <h4>Train choices</h4>
                <Trains trains={this.state.trains} />
            </div>
        )
    }
}

export default TrainInfo;