import React, { Component } from 'react';
import './Pokecard.css';
const IMG_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component{
    render(){
        var imgSRC = `${IMG_API}${this.props.id}.png`;
        return(
            <div className="Pokecard">
                <h1>Pokecard!!!</h1>
                <h2>{this.props.name}</h2>
                <img src = {imgSRC}/>
                <h3>Type: {this.props.type}</h3>
                <h3>EXP: {this.props.exp}</h3>
            </div>
        )
    }
}

export default Pokecard;
