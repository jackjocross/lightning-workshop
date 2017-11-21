import React from 'react';
import OtherClock from './solution'

const Clock = () => {

  <otherClock />

  let date = new Date(Date.now());

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) { hours = '0' + `${hours}` }
  if (minutes < 10) { minutes = '0' + `${minutes}` }
  if (seconds < 10) { seconds = '0' + `${seconds}` }

  return (`${hours}:${minutes}:${seconds}`);

}

export default Clock;
