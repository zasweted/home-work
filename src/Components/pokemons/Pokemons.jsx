import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function Pokemons(){

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState('');

    console.log(items);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(false);
            setItems(result.results);
        })
    }, [])
    if(isLoaded){
        return <div>Kraunasi</div>
    }

    return(

        <>
            <div>
                {
                    items.map(pokemon => <Pokemon key={pokemon.url} pokemon={pokemon}></Pokemon>)
                }
            </div>
        </>

    )

}

export default Pokemons;