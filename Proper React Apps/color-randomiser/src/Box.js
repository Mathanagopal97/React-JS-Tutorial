import React, { Component } from 'react';
import './Box.css';
import { choose } from './helper'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choose(this.props.listOfColors)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    chooseColor() {
        let newColor;
        do {
            newColor = choose(this.props.listOfColors);
        } while (newColor === this.state.color);
        this.setState({ color: newColor });
    }

    handleClick() {
        this.chooseColor();
    }

    render() {
        return (
            <div className="Box" onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>

            </div>
        )
    }
}

export default Box;