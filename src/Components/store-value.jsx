import { useEffect, useState } from "react";


function StoreValue(){

    const [counter, setCounter] = useState(0)
    const addNumber = () => {
        setCounter(x => x + 1)
    };

    useEffect(() => {
        const skaicius = localStorage.getItem('SKAICIUS');
        setCounter(skaicius)
        console.log('skaicius', skaicius);
    }, [])


    useEffect(() => {
        localStorage.setItem('SKAICIUS', counter)
        console.log('counter', counter);
    }, [counter])

    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----2.3-----</p>
            <h2>{counter}</h2>
            <button style={{
                fontSize: '50px',
                padding: '40px 60px',
                marginBottom: '100px'
            }} onClick={addNumber}>+</button>
        </>

    );

};

export default StoreValue;