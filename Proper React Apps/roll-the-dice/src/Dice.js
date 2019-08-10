import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        return (
            <i className={`Die fas fa-dice-${this.props.face} fa-7x ${this.props.rolling ? "shaking" : ""}`}></i>
        )
    }
}

export default Dice;
