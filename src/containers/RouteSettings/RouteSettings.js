import React, {Component} from 'react';
import Direction from '../../components/Direction/Direction';
import Pubs from '../../components/Pubs/Pubs';

class RouteSettings extends Component {

    state = {
        direction: 'west',
        stops: [
            { code : 'syb', visit : true, name: 'Station Buffet Bar'},
            { code : 'gnf', visit : false, name: 'The Railway Inn'},
            { code : 'msn', visit : false, name: 'The Riverhead Brewery Tap'},
            { code : 'swt', visit : false, name: 'The Commercial'},
            { code : 'hud', visit : false, name: 'Kings Head'},
            { code : 'mir', visit : false, name: 'Navigation'},
            { code : 'dew', visit : false, name: 'West Riding'},
            { code : 'btl', visit : false, name: 'Cellar Bar'}
        ]
    };

    changeDirectionHandler = (event) => {
        this.setState({direction:event.target.value});
    };

    togglePubHandler = (event) => {
        let stops = [...this.state.stops];
        const pub = event.target.id;
        const newStop = stops.find((stop)=>{
            return stop.code === pub;
        });
        const stopIndex = stops.findIndex(i => i.code === newStop.code);
        newStop.visit = !newStop.visit;
        stops[stopIndex] = newStop;
        this.setState({stops : stops});
    };

    render () {
        return (
            <div>
                <Direction changed={this.changeDirectionHandler} direction={this.state.direction}/>
                <Pubs changed={this.togglePubHandler} stops={this.state.stops}/>
                <button type="submit">Submit</button>
            </div>
        )
    }
}

export default RouteSettings;