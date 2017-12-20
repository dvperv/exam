import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, ListGroupItem } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

class SchoolItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState((prevState, props) => ({
            checked: !prevState.checked,
        }));
    }

    render(){
        {/*<ButtonGroup className="pull-right" >*/}
        {/*<Button active bsStyle="primary" bsSize="small" onClick={(e) => this.editRow(this.props.school._id, e)}><Glyphicon glyph="pencil"/></Button>*/}
        {/*<Button bsStyle="danger" bsSize="small" onClick={(e) => this.deleteRow(this.props.school._id, e)}><Glyphicon glyph="remove"/></Button>*/}
    {/*</ButtonGroup>*/}
        return(
            <ListGroupItem href={"/school/edit/" + this.props.school._id}>
                <Checkbox inline onChange={this.handleChange} checked={this.state.checked}>
                    {this.props.school.title}
                </Checkbox>
            </ListGroupItem>);
    }
}

SchoolItem.propTypes = {
    // index: PropTypes.number,
    school: PropTypes.object,
    // onAnswerChange: PropTypes.func,
};

export default withTracker(props => {
    return {
        school: props.school,
    };
})(SchoolItem);