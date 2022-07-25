import { useEffect, useState } from "react";


function StoreValue(){

    const [counter, setCounter] = useState(0)
    const addNumber = () => {
        setCounter(x => x + 1)
    };

    const reset =() => {
        setCounter(_ => 0)
    };

    useEffect(() => {
        const skaicius = localStorage.getItem('SKAICIUS');
        if(skaicius !== 0) setCounter(JSON.parse(skaicius))
        console.log('skaicius', skaicius);
    }, [])


    useEffect(() => {
        localStorage.setItem('SKAICIUS', counter)
        console.log('counter', JSON.stringify(counter));
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
                marginBottom: '20px',
            }} onClick={addNumber}>+</button>
            <button style={{
                marginBottom: '100px'
            }} onClick={reset}>reset</button>
        </>

    );

};

export default StoreValue;