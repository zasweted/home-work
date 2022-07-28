import { useEffect, useState } from "react";

function CatForm(){
    
    const [catName, setCatName] = useState('');
    const [catWeigth, setCatWeigth] = useState('')   
    
    const getNameValue = (e) => {
        setCatName(e.target.value )
    }
    const getWeigthValue = (e) => {
        setCatWeigth(e.target.value)
    }
   
    const [list, setList] = useState([])
    const submit = (e) => {
        e.preventDefault();
        setList(a => [...a, {catName, catWeigth}])
    }
    
    
    useEffect(() => {
        const catData = localStorage.getItem('KATUKAI')
        if(catData !== null) setList(JSON.parse(catData))
    }, [])

    useEffect(() => {
        localStorage.setItem('KATUKAI', JSON.stringify(list))
    }, [list])

    
    return(

        <>
            <form className="cat-form-container">
                <label style={{
                    color: '#000'
                }}>Cat Name</label>
                <input
                onChange={getNameValue}
                style={{
                    margin: '0 10px',
                    height: '30px',
                    fontSize: '20px',
                }}  type="text"/>
                <label style={{
                    color: '#000'
                }}>Cat Weigth</label>
                <input
                onChange={getWeigthValue}
                style={{
                    margin: '0 10px',
                    height: '30px',
                    fontSize: '20px',
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
                            list.sort((a, b) => a[1] - b[1]).map((a, i) => <li style={{
                                color: '#000'
                            }} key={i}>{`${a[0]}   ${a[1]}kg`}</li>)
                        }
                    </div>
                    <div style={{color: '#000'}}>Bendras svoris :
                        
                    </div>
                </div>
                
            </form>
        </>

    );


};

export default CatForm;