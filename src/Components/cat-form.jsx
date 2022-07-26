import { useEffect, useState } from "react";

function CatForm(){

    const [name, setName] = useState('');
    const [weigth, setWeigth] = useState('')
    const submit = (e) => {
        e.preventDefault();
    }

    

    useEffect(() => {
        localStorage.setItem('cat', JSON.stringify({name: name, weigth: weigth}))
    })



    return(

        <>
            <form className="cat-form-container">
                <label>Cat Name</label>
                <input
                onChange={(e) => setName(e.target.value)}
                style={{
                    margin: '0 10px',
                    height: '30px',
                    fontSize: '20px'
                }}  type="text"/>
                <label>Cat Weigth</label>
                <input
                onChange={(e) => setWeigth(e.target.value)}
                style={{
                    margin: '0 10px',
                    height: '30px',
                    fontSize: '20px'
                }} type="number"/>
                <div style={{
                    margin: '40px 0 0 0'
                }}>
                    <button
                    onClick={submit}
                    style={{
                        padding: '20px 40px',
                        color: 'black',
                        backgroundColor: 'crimson',
                        border: '1px solid black',
                        borderRadius: '50px'

                    }}>SUBMIT</button>
                </div>
            </form>
        </>

    );


};

export default CatForm;