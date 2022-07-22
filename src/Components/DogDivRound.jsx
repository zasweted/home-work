const round ={backgroundColor: 'green', fontSize: '25px', height: '130px', width: '130px', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};

function DogDivRound({ dogName }){

    return(

        <p style={round}>{dogName}</p>

    );

};

export default DogDivRound;