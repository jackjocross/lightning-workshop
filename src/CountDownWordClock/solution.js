import React from 'react';
import { CountDown } from '../CountDownClock/solution';

const WordClock = ({ hours, minutes, seconds }) => (
    <h1
        style={{
            mixBlendMode: 'color-burn'
        }}
    >{`${hours} hours ${minutes} minutes ${seconds} seconds`}</h1>
);

const CountDownWordClock = props => (
    <CountDown
        {...props}
        render={({ hours, minutes, seconds }) => (
            <WordClock hours={hours} minutes={minutes} seconds={seconds} />
        )}
    />
);

export default CountDownWordClock;
