import React, { Component } from 'react';

class Dummy extends Component{
    render() {
      return (
        <div>
          <h1>Hi there!!! {this.props.number}</h1>
        </div>
      )
    }
}

export default Dummy;