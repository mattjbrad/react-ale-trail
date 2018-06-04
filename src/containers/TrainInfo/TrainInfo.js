import React, {Component} from 'react';

class TrainInfo extends Component {

    state = {
        currentStop: 'SYB',
        nextTrain: {
            time: '12:00',
            platform: '1'
        },
        secondTrain: {
            time: '13:00',
            platform: '2'
        }
    };

    render () {
        return(
            <p>This is the train bit</p>
        )
    }
}

export default TrainInfo;