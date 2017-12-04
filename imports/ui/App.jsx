import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

// import '../startup/client/index';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            HH: 0,
            MM: 0,
            elapsed: 0,
            total: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeHH = this.handleChangeHH.bind(this);
        this.handleChangeMM = this.handleChangeMM.bind(this);
        // Disable animating charts by default.
        //defaults.global.legend = false;
    }

    HHfill(){
        let a=[];
        for(i=0; i<24; i++) a.push( <option value={i}>{i}</option>);
        return a;
    }

    MMfill(){
        let a=[];
        for(i=0; i<60; i++) a.push( <option value={i}>{i}</option>);
        return a;
    }

    handleClick() {
        if(this.state.isOn) {
            //выключить
            this.setState(prevState => ({
                total: 0,
                elapsed: 0,
                isOn: false,
            }));
            clearInterval(this.timerID);
        }
        else {
            //включить
            this.setState(prevState => ({
                total: (prevState.HH * 60 + prevState.MM) * 60 * 1000,
                elapsed: 0,
                isOn: true,
            }));
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    }

    handleChangeHH(event) {
        this.setState({HH: event.target.value});
    }

    handleChangeMM(event) {
        this.setState({MM: event.target.value});
    }

    tick() {
        if (this.state.elapsed < this.state.total) {
            this.setState(prevState => ({
                elapsed: prevState.elapsed + 1000
            }));
        }
        else {
            this.setState(prevState => ({
                isOn: false,
            }));
            clearInterval(this.timerID);
        }
    }

    render(){
        return(
            <div className="container">
                { this.props.currentUser ?
                    <div>
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="/search">Exam</a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Nav>
                                <NavItem eventKey={1} href="/search">Поиск</NavItem>
                                <NavItem eventKey={2} href="/lended">Мои <Glyphicon glyph="book"/></NavItem>
                                <NavItem eventKey={3} href="/owed">Чужие <Glyphicon glyph="book"/></NavItem>
                                <NavItem eventKey={4} href="/cabinet"><Glyphicon glyph="cog"/></NavItem>
                                <Blaze template="atNavButton" ></Blaze>
                            </Nav>
                        </Navbar>
                        {this.props.main}
                    </div>
                    :
                    <Blaze template="atForm" />
                }
            </div>
        );
    }
}

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        // listLoading: !handle.ready(),
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(App);