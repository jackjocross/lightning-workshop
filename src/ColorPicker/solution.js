import React from 'react';
import { colors } from '../utils/palettes';

export class Picker extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { label, palettes, onSelect, Swatch } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <button onClick={() => this.setState(({ open }) => ({ open: !open }))}>{label}</button>
        {this.state.open && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {palettes.map(palette => <Swatch key={palette} onClick={onSelect} palette={palette} />)}
          </div>
        )}
      </div>
    );
  }
}

const ColorSwatch = ({ onClick, palette }) => (
  <button onClick={() => onClick(palette)} style={{ background: palette }} />
);

const ColorPicker = props => <Picker palettes={colors} Swatch={ColorSwatch} {...props} />;

export default ColorPicker;
