import React from 'react';
import { gradients } from '../utils/palettes';
import { Picker } from '../ColorPicker/solution';

const GradientSwatch = ({ onClick, palette: [left, right] }) => {
  const background = `linear-gradient(to right, ${left}, ${right})`;
  return <button onClick={() => onClick(background)} style={{ background }} />;
};

const GradientPicker = props => <Picker palettes={gradients} Swatch={GradientSwatch} {...props} />;

export default GradientPicker;
