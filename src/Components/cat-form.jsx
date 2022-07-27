import { useEffect, useState } from "react";

function CatForm(){
    
    const [catName, setCatName] = useState('');
    const [catWeigth, setCatWeigth] = useState('')   
    
    const getNameValue = (e) => {
        setCatName(e.target.value )
    }
    const getWeigthValue = (e) => {
        setCatWeigth(e.target.value  + 'kg')
    }
   
    const [list, setList] = useState([])
    const submit = (e) => {
        e.preventDefault();
        setList(a => [...a, [catName, catWeigth]])
    }
    console.log(list); 
    
    useEffect(() => {
        const catData = localStorage.getItem('KATUKAI')
        if(catData !== null) setList(JSON.parse(catData))
    }, [])

    useEffect(() => {
        localStorage.setItem('KATUKAI', JSON.stringify(list))
    }, [list])

    const sorted = [...list].sort((a, b) => a > b ? 1 : -1)

    console.log('sorted', sorted);
    return(

        <>
            <form className="cat-form-container">
                <label>Cat Name</label>
                <input
                onChange={getNameValue}
                style={{
                    margin: '0 10px',
                    height: '30px',
                    fontSize: '20px'
                }}  type="text"/>
                <label>Cat Weigth</label>
                <input
                onChange={getWeigthValue}
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
                <div>
                    <h1 style={{
                        color: '#000'
                    }}>-=Cat list=-</h1>
                    <div>
                        {
                            list.map((a, i) => <li style={{
                                color: '#000'
                            }} key={i}>{`${a[0]}   ${a[1]}`}</li>)
                        }
                    </div>
                </div>
                
            </form>
        </>

    );


};

export default CatForm;