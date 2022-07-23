import { useState } from "react";
import randColor from "../Functions/rand-color";

function AddCube(){
    
    const [cubes, setCube] = useState([]);
    const addCubes = () => {
        setCube(x => [...x, ''])
    }
    return(

        <>
                <h2>-----CUBES-----</h2>
                <button onClick={addCubes}>Add Cube</button>
                <div className="cube-container">

                    {
                        cubes.map((_, i)=> <div className="cube" key={i}></div>)
                    }

                </div>
        </>

    );

};

export default AddCube;