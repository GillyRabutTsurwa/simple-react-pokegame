import React, { Component } from 'react';
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    render() {
        //TITLE DISPLAY
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        }
        else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        //NEW:NOTE: Well done. Bien joué ici
        let cardPokemon = this.props.pokemon.map((currentPokemon) => {
            console.log(currentPokemon)
            return <Pokecard id={currentPokemon.id} name={currentPokemon.name} type={currentPokemon.type} exp={currentPokemon.base_experience}/>
        });

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {cardPokemon}
                </div>
            </div>
        );
    }
}

export default Pokedex;