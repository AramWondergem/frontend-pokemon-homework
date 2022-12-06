import React from 'react';

function PokemonCard({name, src, numberOfMoves, weight, abillities}) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={src} alt={name}/>
            <h3>`Moves: ${numberOfMoves}`</h3>
            <h3>`Weight: ${weight}`</h3>
            <h3>Abilities</h3>
            <ul> {
                // abillities.map() //afmaken na data bekijken
            }</ul>
        </div>
    );
}

export default PokemonCard;