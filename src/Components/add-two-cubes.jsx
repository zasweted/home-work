import { useState } from "react";

function AddTwoCubes(){

    const [cubeRed, setRedCube] = useState([]);
    const addRedCube = () => {
        setRedCube(x => [...x, '']);
    }
    const [cubeBlue, setBlueCube] = useState([]);
    const addBlueCube = () => {
        setBlueCube(x => [...x, '']);
    }
    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----5-----</p>
        <button onClick={addRedCube}>Add Red</button>
        <button onClick={addBlueCube}>Add Blue</button>
        <button>Reset</button>
        <div className="cube-container">

            {
                cubeRed.map((_, i) => <div className="cube-red" key={i}></div>)
            }

            {
                cubeBlue.map((_, i)=><div className="cube-blue" key={i}></div>)
            }

        </div>
        </>

    );

};

export default AddTwoCubes;