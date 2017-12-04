import React from 'react';
import PropTypes from 'prop-types';

export default class TimeChart extends React.Component{
    render(){
        return(
            <div>
                Hi
            </div>
        );
    }
}

TimeChart.propTypes = {
    elapsed: PropTypes.number,
    total: PropTypes.number,
};