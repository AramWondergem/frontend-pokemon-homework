import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./pokemonCard/PokemonCard";
import computerSaysNo from "./assets/computers-says-no.gif"
import useFetch from "./customHooks/useFetch";


function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false)

    async function fetchData ( url = "https://pokeapi.co/api/v2/pokemon" ) {
        setLoading(true)
        try {
            const pokemonData = await axios.get(url)

            console.log(pokemonData)

            setData(pokemonData.data);

        }
        catch (e) {

            setLoading(false)

            console.error(e.message)

            setErrorLoading(true)

        }

        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);






    return (
    <div>
        <img src="" alt=""/>
        <div>
            <button disabled={data.previous === null} onClick={ () => fetchData(data.previous)}>Vorige</button>
            <button disabled={data.next === null} onClick={ () => fetchData(data.next)}>Volgende</button>
        </div>
        <div>
            {
                loading &&
                <p>🏃‍♀️The elves are running hard at the moment to fetch your pokemons 🏃‍♂️</p>
            }
            {Object.keys(data).length > 0 &&
                data.results.map((item) => <PokemonCard key={item.url} url={item.url}/>)

            }
            {
                errorLoading &&

                <>

                <img src={computerSaysNo} alt="GIF of computer says no scene of little britian"/>

                <p>Something went wrong when loading the page. Maybe you can refresh the page</p>

                </>

            }
        </div>
    </div>
  );
}

export default App;

