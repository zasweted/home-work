import Book from './Book';
import { useEffect, useState } from "react"

function BooksDesc(){



    const [itemsTwo, setItemsTwo] = useState([])
    const [isLoadedTwo, setIsLoadedTwo] = useState('');
    console.log(itemsTwo);

    useEffect(() => {
        fetch('https://in3.dev/knygos/types/')
        .then(res => res.json())
        .then((result) => {
            setIsLoadedTwo(true);
            setItemsTwo(result);
        })
    }, [])
    return(

        <>
            {
                itemsTwo.map(book2 => <Book props2={book2}></Book>)
            }
        </>

    )

}

export default BooksDesc;