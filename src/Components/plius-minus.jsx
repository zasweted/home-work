import { useState } from "react";

function AddRemove(){
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(x => x + 1)
    };

    const remove = () => {
        setCount(x => x - 3)
    };

    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----3-----</p>
            <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                marginTop: '100px',
                width: '130px',
                height: '130px',
                backgroundColor: 'purple',
                borderRadius: '35px',
            }}>{count}</p>  
            <button onClick={add} style={{
                marginTop: '50px',

            }}>Add</button>
            <button onClick={remove}>Remove</button>
        </>

    );

};
export default AddRemove;