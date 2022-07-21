function DogDivRound({ dogName, spalva, aukstis, plotis, radius, fleks, column, center }){

    return(

        <p style={{
            backgroundColor: spalva,
            height: aukstis +'px',
            width: plotis +'px',
            borderRadius: radius +'%',
            display: fleks,
            flexDirection: column,
            alignItems: center,
            justifyContent: center,
        }}>{dogName}</p>

    );

};

export default DogDivRound;