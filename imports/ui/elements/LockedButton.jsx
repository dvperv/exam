import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

/*
Защищенная кнопка удаления
Идея и дизайн: (c) 2017 dvperv Первухин Дмитрий Васильевич
*/

class LockedButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {locked: this.props.locked};
    }

    render(){
        return(
            <ButtonGroup>
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton
                        value={1}
                        onChange={(e)=>this.setState((prevState, props)=> ({locked: !prevState.locked}))}
                        checked={this.state.locked}>
                        {this.state.locked?<Glyphicon glyph="lock" className="text-danger"/>:<Glyphicon glyph="off" className="text-success"/>}
                    </ToggleButton>
                </ToggleButtonGroup>
                <Button disabled={this.state.locked}>{this.props.glyph?<Glyphicon glyph={this.props.glyph}/>:""}{this.props.caption}</Button>
            </ButtonGroup>
        );
    }
}

LockedButton.propTypes = {
    locked: PropTypes.bool,
    glyph: PropTypes.string,
    caption: PropTypes.string,
};

export default withTracker(props => {
    return {
        locked: props.locked,
        glyph: props.glyph,
        caption: props.caption,
    };
})(LockedButton);