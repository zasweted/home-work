import { useState } from "react";

function Santikis(){

    const [leftNum, setLeftNum] = useState(100)
    const [rightNum, setRightNum] = useState(50)

    const leftChange = (e) => {
        setLeftNum(e.target.value)
    }
    const rightChange = (e) => {
        setRightNum(e.target.value)
    }
    return(

        <>
            <fieldset style={{
                marginBottom: '100px'
            }}>
                <input value={leftNum} type="number" onChange={leftChange}></input>
                <input value={rightNum} type="number" onChange={rightChange}></input>
            </fieldset>
        </>

    );

};
export default Santikis;