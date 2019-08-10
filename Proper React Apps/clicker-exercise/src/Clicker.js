import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            isWinner: false
        };
        this.getNumber = this.getNumber.bind(this);
    }

    getNumber(e) {
        console.log(e);
        let randNumber = Math.floor(Math.random() * 10) + 1;
        if (randNumber === 7) this.setState({ isWinner: true });
        this.setState({ number: randNumber });
    }
    render() {
        let button = <button onClick={this.getNumber}>Click Me</button>
        let message = <h1>"You Win!!!"</h1>
        return (
            <div>
                <h1>The number is {this.state.number}</h1>
                <div>
                    {!this.state.isWinner ? button : message}
                </div>
            </div>
        )
    }
}

export default Clicker;
