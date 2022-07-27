import { useState } from "react";
import Random from "../Functions/random-number-generator";


function Form(){

    

    const [input, setInput] = useState('')
    const [cube, setCube] = useState([])
    const click = () => {
        for(let i = 0; i < input; i++){
            setCube(x => [...x, Random(100, 200)])
        }
    }
    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----3.1-----</p>
            <div className="form-container">
                <div className="inner-form">
                    <form>
                        <label style={{
                            color: '#000'
                        }}>Enter number</label>
                        <input style={{
                            width: '100px',
                            height: '50px',
                            marginTop: '50px',
                            marginLeft: '50px',
                            fontSize: '50px'
                        }} 
                        type="number" required
                        onChange={(e) => setInput(e.target.value)}/>
                    </form>
                    <button onClick={click}>ADD</button>
                    <button onClick={() => setCube(_ => [])}>reset</button>
                    <div className="form-cube-container">
                        {
                            cube.map((a, i) => <div key={i} className="form-cube"><p>{a}</p></div>)
                        }

                    </div>

                </div>
                
                
                
            </div>
        </>

    );

};

export default Form;