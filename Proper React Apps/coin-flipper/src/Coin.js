import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imgSRC} height="333"/>
                <h3>Out of {this.props.heads + this.props.tails} flips, we have {this.props.heads} heads and {this.props.tails} tails.</h3>
            </div>
        )
    }
}

export default Coin;