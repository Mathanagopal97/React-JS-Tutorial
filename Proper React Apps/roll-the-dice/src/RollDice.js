import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 1,
            number2: 4,
            isRolling: false
        };
        this.rollTheDice = this.rollTheDice.bind(this);
    }

    rollTheDice(e) {
        let num1, num2;
        num1 = Math.floor(Math.random() * 6) + 0;
        num2 = Math.floor(Math.random() * 6) + 0;
        this.setState({ number1: num1, number2: num2, isRolling: true });
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000);
    }
    render() {
        let faces = ["one", "two", "three", "four", "five", "six"];
        return (
            <div className="RollDice">
                <h1>Dice will be rolled</h1>
                <div>
                    <Dice face={faces[this.state.number1]} rolling = {this.state.isRolling} />
                    <Dice face={faces[this.state.number2]} rolling = {this.state.isRolling}/>
                </div>
                <button onClick={this.rollTheDice} disabled={this.state.isRolling}>
                    {!this.state.isRolling ? 'Roll the dice' : 'Rolling.....'}
                </button>
            </div>
        )
    }
}

export default RollDice;