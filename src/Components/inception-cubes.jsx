import { useState } from "react";


function InceptionCubes(){

    const [cubeBlack, setBlackCube] = useState([]);
    const addBlackCube = () => {
        setBlackCube(x => [...x, ''])
    };

    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----2.2-----</p>
            <div>
                <button style={{marginBottom: '50px'}} onClick={addBlackCube}>Prideti</button>
            </div>
            <div className="inception-container">

                {
                    cubeBlack.map((_, i) => <div className="cube-black" key={i}>
                        <button>+</button>
                    </div>)
                }

            </div>
        </>

    );

};

export default InceptionCubes;