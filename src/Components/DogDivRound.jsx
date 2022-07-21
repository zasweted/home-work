function DogDivRound({ dogName, spalva, aukstis, plotis, radius }){

    return(

        <p style={{
            backgroundColor: spalva,
            height: aukstis +'px',
            width: plotis +'px',
            borderRadius: radius +'%',
        }}>{dogName}</p>

    );

};

export default DogDivRound;