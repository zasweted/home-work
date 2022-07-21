function RandomDog(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    const square = {
        backgroundColor: 'grey',
        color: 'white',
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const round ={
        backgroundColor: 'green',
        height: aukstis '120px',
        width: plotis '120px',
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };
    dogs.map((a, i ) => {
        if(i % 2 == 0) return square;
        if(i % 2 !== 0) return round;
    })

};

export default RandomDog;
