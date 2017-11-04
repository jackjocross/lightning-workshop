import React, { Component } from 'react';

import Countdown from './Countdown';
import ColorPicker from './ColorPicker';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Countdown />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
