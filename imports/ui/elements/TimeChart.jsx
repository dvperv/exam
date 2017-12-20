import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

class TimeChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {timeLeft: this.props.total};
    }

    tick() {
        if(this.state.timeLeft > 0)
            this.setState((prevState, props) => ({
                timeLeft: prevState.timeLeft - 1000,
            }));
        else clearInterval(this.timerID);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    format(str){
        return str.length === 1 ? "0" + str : str;
    }

    render(){//TODO перенести контроль времени в экзамент
        let hours = Math.floor(this.state.timeLeft / 1000 / 60 / 60);
        let minutes = Math.floor(this.state.timeLeft / 1000 / 60) - hours * 60;
        let secounds = this.state.timeLeft / 1000 - hours * 60 *60 - minutes * 60;
        let HH = this.format(hours.toString());
        let MM = this.format(minutes.toString());
        let SS = this.format(secounds.toString());

        return(
            <div>
                <h2>{HH}:{MM}:{SS}</h2>
            </div>
        );
    }
}

TimeChart.propTypes = {
    total: PropTypes.number, //in millisecs
};

export default withTracker(props => {
    return {
        total: props.total,
    };
})(TimeChart);