import React, { Component } from 'react';

import Clock from './Clock/solution';
import CountDownClock from './CountDownClock/solution';
import CountDownWordClock from './CountDownWordClock/solution';
import ColorPicker from './ColorPicker/solution';
import GradientPicker from './GradientPicker/solution';
import CustomGradientPicker from './CustomGradientPicker/solution';

let date = new Date(Date.now());
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let from = (hours * 3600) + (minutes * 60) + seconds

class App extends Component {

  state = {
    background: 'steelblue',
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    from: from
  };

  render() {
    return (
      <div
        style={{
          background: this.state.background,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Clock
          hours={ this.state.hours }
          minutes={ this.state.minutes }
          seconds={ this.state.seconds }
        />
        <CountDownClock
          from = { this.state.from }
        />
        <CountDownWordClock
          from = { this.state.from }
        />
        <ColorPicker
          label='Pick Solid Background'
          onSelect = { background => {
            this.setState({ background });
          }}
        />
        <GradientPicker
          label='Pick Gradient Background'
          onSelect = { background => {
            this.setState({ background });
          }}
        />
        <CustomGradientPicker
          label='Custom Gradient Background'
          onChange = { background => {
            this.setState({ background });
          }}
        />
      </div>
    );
  }
}

export default App;

// Adding it all together...
// import React, { Component } from 'react';
//
// import Clock from './Clock/solution';
// import CountDownClock from './CountDownClock/solution';
// import CountDownWordClock from './CountDownWordClock/solution';
// import ColorPicker from './ColorPicker/solution';
// import GradientPicker from './GradientPicker/solution';
// import CustomGradientPicker from './CustomGradientPicker/solution';
//
// class App extends Component {
//   state = {
//     background: 'peachpuff',
//   };
//
//   render() {
//     return (
//       <div
//         style={{
//           background: this.state.background,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}
//       >
//         <Clock hours={1} minutes={1} seconds={1} />
//         <CountDownClock from={10} />
//         <CountDownWordClock from={10} />
//         <ColorPicker label="Pick Color" onSelect={background => this.setState({ background })} />
//         <GradientPicker
//           label="Pick Gradient"
//           onSelect={background => this.setState({ background })}
//         />
//         <CustomGradientPicker onChange={background => this.setState({ background })} />
//       </div>
//     );
//   }
// }
//
// export default App;
