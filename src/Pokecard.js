import React, { Component } from 'react';
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let padToThree = (numéro) => {
    //NOTE: N'oublier jamais de renvoyer qqchose. C'est IMPORTANT:
    //En base, ce code se marche en fournissant les numeros de trois chiffre, même les 
    // numeros comme 4 - qui deviennent 004 et 94 - qui deviennent 094
    return numéro <= 999 ? `00${numéro}`.slice(-3) : numéro
}

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        console.log(imgSrc);
        console.log(this.props); //TESTING:
        return (
            // will be styled later
            <div className="Pokecard"> 
                <h1 className="Pokecard-title">{this.props.name}</h1> 
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name}></img>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;