import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';

import '../startup/client/index';

export default class App extends React.Component{
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
            <div>
                <Blaze template="loginButtons"/>
                <Form inline>

                </Form>
            </div>
        );
    }
}