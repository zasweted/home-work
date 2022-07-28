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
    const save = () => {
        setList(b => [...b, ''])
        setArea(_ => [])
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
                <div className="slider-cube-container-create">
                    {
                        area.map((_, i) => <div className="slider-cube" key={i} style={{
                            width: size +'px',
                            height: size +'px',
                            backgroundColor: color
                        }}></div>)
                    }
                </div>
                <div className="slider-cube-container-saved">
                    {
                        list.map((a, i)=> <div  key={i} style={{
                            width: a.size +'px',
                            height: a.size +'px',
                            color: a.color
                        }}>NOT FUN</div>)
                    }

                </div>
               
            </div>
        </>

    );

};
export default Sliders;