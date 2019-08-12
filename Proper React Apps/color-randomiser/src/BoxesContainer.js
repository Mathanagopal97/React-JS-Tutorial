import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

class BoxesContainer extends Component {
    static defaultProps = {
        numBoxes: 27,
        allColors: [
            "purple", "magenta", "pink", "violet", "#E52B50", "#FFBF00",
            "#FBCEB1", "#007FFF", "#F5F5DC", "#DE3163", "#007BA7", "#00FF3F",
            "#FFD700", "#4B0082", "#FF00AF", "#E30B5C", "#003153", "#1C39BB", "#FF4500",
            "#E0B0FF", "#C8A2C8", "#29AB87", "#B57EDC"
        ]
    };
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            () => (<Box listOfColors={this.props.allColors} />
            ));
        return (
            <div>
                <h1>Color boxes. Click on them to change the color.</h1>
                <div className='BoxesContainer'>
                    <br />
                    {boxes}
                </div>
            </div>

        )
    }
}

export default BoxesContainer;