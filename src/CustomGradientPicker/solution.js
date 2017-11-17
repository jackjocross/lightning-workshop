import React from 'react';
import ColorPicker from '../ColorPicker/solution';

class CustomGradientPicker extends React.Component {
  state = {
    left: 'steelblue',
    right: 'peachpuff',
  };

  setLeft = left => this.setState({ left }, this.updateBackground);
  setRight = right => this.setState({ right }, this.updateBackground);

  updateBackground = () => {
    this.props.onChange(`linear-gradient(to right, ${this.state.left}, ${this.state.right})`);
  };

  render() {
    return [
      <ColorPicker label="Pick Left" onSelect={this.setLeft} />,
      <ColorPicker label="Pick Right" onSelect={this.setRight} />,
    ];
  }
}

export default CustomGradientPicker;
