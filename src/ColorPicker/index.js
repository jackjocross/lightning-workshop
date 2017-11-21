import React from 'react';
import { colors } from '../utils/palettes';

const ColorPicker = () => {

  return colors.map( color => {
    return <div style = {{ display: 'inline' }}>
              <button
                style = {{ backgroundColor: color, display: 'inline' }}
              />
            </div>
  })

}

export default ColorPicker;
