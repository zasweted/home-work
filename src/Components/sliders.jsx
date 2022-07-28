import { useState } from "react";

function Sliders(){

    const [area, setArea] = useState([]);
    const create = () => {
        setArea(a => [...a, ''])
    }

    const [size, setSize] = useState('100px');
    const inputHandleSize = (e) => {
        setSize(e.target.value)
        console.log('size', e.target.value);
    }

    const [color, setColor] = useState('#000000');
    const inputHandleColor = (e) => {
        setColor(e.target.value)
        console.log('color', e.target.value);
    }

    const [list, setList] = useState([])
    const save = (e) => {
        setList(e => [...e, {size, color}])
    }
    console.log('list', list);


    return(

        <>
            <div>
                
                <fieldset>
                    <div>
                        <label For="size">Size</label>
                        <input onChange={inputHandleSize} type="range" id="size" name="size" min="10" max="200"></input>
                    </div>
                    <div>
                        <label For="">Color</label>
                        <input onChange={inputHandleColor} type="color" id="color" name="color"></input>
                    </div>
                    <div>
                        <button onClick={create}>Sukurti</button>
                        <button onClick={save}>Išsauguoti</button>
                    </div>
                </fieldset>
                <div className="slider-cube-container">
                    {
                        area.map((_, i) => <div className="slider-cube" key={i} style={{
                            width: size +'px',
                            height: size +'px',
                            backgroundColor: color
                        }}></div>)
                    }
                </div>
               
            </div>
        </>

    );

};
export default Sliders;