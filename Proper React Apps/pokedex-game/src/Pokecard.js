import React, { Component } from 'react';
import './Pokecard.css';
const IMG_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component{
    render(){
        var imgSRC = `${IMG_API}${this.props.id}.png`;
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src = {imgSRC}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;
