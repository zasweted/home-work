import { useEffect, useState } from "react"
import Book from "./Book";


function Books(){

    const [items, setItems] = useState([]);
    const [info, setInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState('');
    useEffect(() => {
        fetch('https://in3.dev/knygos/')
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
        })
    }, [])
    
    useEffect(() => {
        fetch('https://in3.dev/knygos/types/')
        .then(res => res.json())
        .then((result) => {
            setInfo(result);
        })
    }, [])
    if(!isLoaded){
        return <div>Puslapis Kraunasi, Prasome palaukti...</div>
    }
    
    


    return(

        <>
            {
                items.map(book => <Book key={book.id} book={book} tipas={info.find(el=>el.id === book.type)}></Book>)
            }

        </>
    )

}

export default Books;