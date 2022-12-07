import React, {useState} from 'react';
import './App.css';
import PokemonCard from "./pokemonCard/PokemonCard";
import computerSaysNo from "./assets/computers-says-no.gif"
import useFetch from "./customHooks/useFetch";


function App() {

    const [data, setData] = useState({});
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [dataUrl, setDataUrl] = useState("https://pokeapi.co/api/v2/pokemon")


    useFetch(dataUrl, setData, setCatchError, setIsLoading)


    return (
        <div>
            <div>
                <button disabled={data.previous === null} onClick={() => setDataUrl(data.previous)}>Vorige</button>
                <button disabled={data.next === null} onClick={() => setDataUrl(data.next)}>Volgende</button>
            </div>
            <div>
                {
                    isLoading &&
                    <p>🏃‍♀️The elves are running hard at the moment to fetch your pokemons 🏃‍♂️</p>
                }
                {Object.keys(data).length > 0 &&
                    data.results.map((item) => <PokemonCard key={item.url} dataUrl={item.url}/>)

                }
                {
                    catchError !== null &&

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


