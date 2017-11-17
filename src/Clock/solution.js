import React from 'react';

const leftPadTime = time => (time < 10 ? `0${time}` : time);

const Clock = ({ hours, minutes, seconds }) => (
  <h1>{`${leftPadTime(hours)}:${leftPadTime(minutes)}:${leftPadTime(seconds)}`}</h1>
);

export default Clock;
