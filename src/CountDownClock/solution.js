import React from 'react';
import Clock from '../Clock/solution';

export class CountDown extends React.Component {
    state = {
        seconds: this.props.from
    };

    componentDidMount() {
        this.timeoutID = setInterval(() => {
            if (this.state.seconds === 0) {
                this.props.onComplete && this.props.onComplete();
                if (this.props.repeat) {
                    this.setState({ seconds: this.props.from });
                } else {
                    clearInterval(this.timeoutID);
                }
            } else {
                this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeoutID);
    }

    render() {
        const { seconds } = this.state;
        return this.props.render({
            hours: Math.floor(seconds / 3600),
            minutes: Math.floor((seconds % 3600) / 60),
            seconds: Math.floor((seconds % 3600) % 60)
        });
    }
}

const CountDownClock = props => (
    <CountDown
        {...props}
        render={({ hours, minutes, seconds }) => (
            <Clock hours={hours} minutes={minutes} seconds={seconds} />
        )}
    />
);

export default CountDownClock;
