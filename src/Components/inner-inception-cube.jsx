import { useState } from "react";

function InnerInceptionCube(){

    const [counter, setCount] = useState(0)
    const addNumber = () => {
        setCount(x => x + 1)
    };

    return(

        <>
          <div className="cube-black">
            <button onClick={addNumber}>+</button>
            <h1>{counter}</h1>
          </div>
        </>

    );

};

export default InnerInceptionCube;