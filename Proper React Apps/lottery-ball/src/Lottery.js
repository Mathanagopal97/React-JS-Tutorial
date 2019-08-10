import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })
        };
        this.handleClick = this.handleClick.bind(this);
    }
    generateNums(e){
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }
    handleClick(e){
        this.generateNums();
    }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n} />)}
                </div>
                <button onClick = {this.handleClick}>Generate Lottos</button>
            </section>
        )
    }
}

export default Lottery;