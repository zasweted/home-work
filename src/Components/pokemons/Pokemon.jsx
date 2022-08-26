import randColor from "../../Functions/rand-color";


function Pokemon({pokemon}){

    return(
        <>
            <div>{pokemon.name}</div>
            <a style={{
                textDecoration: 'none',
                color: randColor()
            }} href={pokemon.url}>{pokemon.url}</a>
        </>
    )

}

export default Pokemon;