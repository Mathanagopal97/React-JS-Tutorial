import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            heads: 0,
            tails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipTheCoin(e) {
        let randNum = Math.floor(Math.random() * 10) + 1;
        if (randNum % 2 === 0) {
            this.setState(curState => ({
                heads: curState.heads + 1
            }));
            this.setState({ img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" });
        }
        else {
            this.setState(curState => ({
                tails: curState.tails + 1
            }));
            this.setState({ img: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" });
        }

        console.log(this.state.heads);
        console.log(this.state.isHeads);
        console.log(this.state.tails);
    }
    handleClick(e) {
        this.flipTheCoin();
    }
    render() {
        return (
            <div>
                <h1>Let's Flip a coin!</h1>
                <Coin heads={this.state.heads} tails={this.state.tails} imgSRC={this.state.img} />
                <button onClick={this.handleClick}>Flip Here.</button>
            </div>
        )
    }
}

export default Flipper;