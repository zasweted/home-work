import { useState } from "react";

function AddCube(){
    
    const [cube, setCube] = useState([]);

    return(

        <>
            <h2>FUN</h2>
            <button onClick={() => setCube(x => [...x,])}>Add Cube</button>
            <div className='cube-container'>
              
                {
                  cube.map((_, i) => <div className='cube' key={i}
                  ></div>)
                }

            </div>
        </>

    );

};

export default AddCube;