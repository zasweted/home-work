

function AddRemove({ countTwo, setCount }){

    const add = () => {
        setCount(x => x + 1)
    };

    const remove = () => {
        setCount(x => x - 3)
    };

    return(

        <>
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
            }}>{countTwo}</p>  
            <button onClick={add} style={{
                marginTop: '50px',

            }}>Add</button>
            <button onClick={remove}>Remove</button>
        </>

    );

};
export default AddRemove;