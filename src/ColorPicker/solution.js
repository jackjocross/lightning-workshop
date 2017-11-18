import React from 'react';
import { colors } from '../utils/palettes';

export class Picker extends React.Component {
    state = {
        open: false
    };

    render() {
        const { label, palettes, onSelect, Swatch } = this.props;
        return (
            <div style={{ textAlign: 'center' }}>
                <button
                    style={{ marginBottom: '1rem', mixBlendMode: 'color-burn' }}
                    onClick={() =>
                        this.setState(({ open }) => ({ open: !open }))}
                >
                    {label}
                </button>
                {this.state.open && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        {palettes.map(palette => (
                            <div
                                style={{
                                    padding: '1rem',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Swatch
                                    key={palette}
                                    onClick={onSelect}
                                    palette={palette}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

const ColorSwatch = ({ onClick, palette }) => (
    <button
        className="shadow"
        onClick={() => onClick(palette)}
        style={{ background: palette }}
    />
);

const ColorPicker = props => (
    <Picker palettes={colors} Swatch={ColorSwatch} {...props} />
);

export default ColorPicker;
