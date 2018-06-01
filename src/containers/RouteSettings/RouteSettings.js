import React, {Component} from 'react';
import Direction from '../../components/Direction/Direction';
import Pubs from '../../components/Pubs/Pubs';

class RouteSettings extends Component {

    state = {
        direction: 'west',
        stops: []
    };

    render () {
        return (
            <div>
                <Direction />
                <Pubs />
            </div>
        )
    }
}

export default RouteSettings;