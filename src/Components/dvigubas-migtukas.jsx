import { useState } from "react";
import Random from "../Functions/random-number-generator";







function DvigubasMigtukas(){
    const [count, setCount] = useState(0);
    const [rad, setRad] = useState('50%')
    const changeStyle = () => {
    setRad(z => z === '50%' ? '0' : '50%')
    };
    
    
    const generateRandom = () => {
        setCount(x => x = Random(5, 25))
    }

    return(
        <>
        <h2 style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            width: '150px',
            height: '150px',
            background: 'rgb(55,241,47)',
            background: 'radial-gradient(circle, rgba(55,241,47,1) 35%, rgba(255,0,0,1) 100%)',
            borderRadius: rad
        }}>{count}</h2>
        <button onClick={changeStyle}>Change Shape</button>
        
        <button onClick={generateRandom}>Generate Random</button>
        </>

    );

};

export default DvigubasMigtukas;