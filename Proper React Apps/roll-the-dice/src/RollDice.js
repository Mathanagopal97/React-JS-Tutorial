import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 2,
            number2: 5
        };
        this.rollTheDice = this.rollTheDice.bind(this);
    }

    rollTheDice(e) {
        let num1, num2;
        num1 = Math.floor(Math.random() * 6) + 0;
        num2 = Math.floor(Math.random() * 6) + 0;
        this.setState({ number1: num1, number2: num2 });
    }
    render() {
        let faces = ["one", "two", "three", "four", "five", "six"];
        return (
            <div>
                <h1>Dice will be rolled</h1>
                <div>
                    <Dice face={faces[this.state.number1]} />
                    <Dice face={faces[this.state.number2]} />
                </div>
                <button onClick={this.rollTheDice}>Click to roll the dice</button>
            </div>
        )
    }
}

export default RollDice;