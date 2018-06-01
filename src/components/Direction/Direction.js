import React from 'react';
import Radio from '../Radio/Radio';


const direction = (props) => {
    return (
        <div>
            <p>Please choose a direction: </p>
            <Radio direction="west" changed={props.changed} />
            <Radio direction="east" changed={props.changed} />
        </div>
    );
}

export default direction;