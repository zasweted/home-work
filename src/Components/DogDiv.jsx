function DogDivSquare({ dogName, spalva, plotis, aukstis, column, center, fleks }){
    return (

            <p style={
                {
                    backgroundColor: spalva,
                    width: plotis +'px',
                    height: aukstis +'px',
                    display: fleks,
                    flexDirection: column,
                    alignItems: center,
                    justifyContent: center,
                }
        }>{dogName}</p>

    );
};
export default DogDivSquare;