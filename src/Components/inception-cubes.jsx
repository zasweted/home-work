import { useState } from "react";
import Random from "../Functions/random-number-generator";
import InnerInceptionCube from "./inner-inception-cube";


function InceptionCubes(){

    const [cubeBlack, setBlackCube] = useState([]);
    const addBlackCube = () => {
        setBlackCube(x => [...x, Random(1, 999)])
    };

    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(x => x + 1);
    }

    const reset = () => {
        setBlackCube(_ => [])
        setCount(x => x = 0)
    };

    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----2.2-----</p>
            <div>
                <button style={{marginBottom: '50px'}} onClick={addBlackCube}>Prideti</button>
                <button onClick={reset}>reset</button>
            </div>
            <div className="inception-container">

                {
                    cubeBlack.map((_, i) => <InnerInceptionCube key={i}></InnerInceptionCube>)
                }

            </div>
        </>

    );

};

export default InceptionCubes;