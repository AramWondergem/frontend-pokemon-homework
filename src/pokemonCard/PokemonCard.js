import React, {useState} from 'react';
import pickachuGif from "../assets/Pikachu_walks.gif"
import useFetch from "../customHooks/useFetch";
import computerSaysNo from "../assets/computers-says-no.gif";

function PokemonCard({dataUrl}) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [catchError, setCatchError] = useState(null);


    useFetch(dataUrl, setData, setCatchError, setIsLoading)


    return (
        <div>

            {isLoading &&
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
                        data.abilities.map((ability) => <li
                            key={`${data.name}-${ability.ability.name}`}>{ability.ability.name}</li>)
                    }</ul>
                </>
            }
            {
                catchError !== null &&

                <>

                    <img src={computerSaysNo} alt="GIF of computer says no scene of little britian"/>

                    <p>Something went wrong when loading the page. Maybe you can refresh the page</p>

                </>

            }


        </div>
    );
}

export default PokemonCard;