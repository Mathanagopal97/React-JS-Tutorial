import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        return (
            <i class={`fas fa-dice-${this.props.face} fa-7x`}></i>
        )
    }
}

export default Dice;
