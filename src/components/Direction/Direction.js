import React from 'react';
import Radio from '../Radio/Radio';


const direction = () => {
    return (
        <div>
            <p>Please choose a direction: </p>
            <Radio direction="west" />
            <Radio direction="east" />
        </div>
    );
}

export default direction;