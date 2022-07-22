import { useState } from "react";


// const stilius = {width: '150px', height: '150px', backgroundColor: 'crimson', borderRadius: rad}




function Migtukas(){

    const [rad, setRad] = useState('50%')
    const changeStyle = () => {
    setRad(z => z === '50%' ? '0' : '50%')
    }

    return(
        <>
        <h1 style={{
            width: '150px',
            height: '150px',
            backgroundColor: 'crimson',
            borderRadius: rad
        }}>{''}</h1>
        <button onClick={changeStyle}>Change</button>
        </>

    );

};

export default Migtukas;