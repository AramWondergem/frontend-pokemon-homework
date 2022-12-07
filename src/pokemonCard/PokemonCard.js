import React, {useEffect, useState} from 'react';
import axios from "axios";
import pickachuGif from "../assets/Pikachu_walks.gif"
import useFetch from "../customHooks/useFetch";

function PokemonCard({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(url)
    async function fetchData() {
        setLoading(true);

        try {
            const pokemonData = await axios.get(url)

            console.log(pokemonData)

            setData(pokemonData.data);

        } catch (e) {

            console.error(e.message)

        }
        setLoading(false);

    }

    useEffect(() => {
        fetchData()
    }, []);


    //
    // useEffect(() => {
    //     if (Object.keys(data).length > 0) {
    //         setLoading(false);
    //     }
    //
    //
    //     // const {name, moves, weight, abilities, sprites: {front_shiny}} = data.data;
    //
    // }, [data])

    return (
        <div>

            {loading &&
                <>
                    <img src={pickachuGif} alt="walking Pikachu"/>
                    <p>Look, Pikachu is collecting the pokemons</p>
                </>
            }
            {Object.keys(data).length > 0 &&
                <>
                    <h2>{data.name}</h2>
                    <img src={data.sprites.front_shiny} alt={data.name}/>
                    <h3>Moves: {data.moves.length}</h3>
                    <h3>Weight: {data.weight}</h3>
                    <h3>Abilities</h3>
                    <ul> {
                        data.abilities.map((ability) => <li key={`${data.name}-${ability.ability.name}`}>{ability.ability.name}</li>)
                    }</ul>
                </>
            }


        </div>
    );
}

export default PokemonCard;