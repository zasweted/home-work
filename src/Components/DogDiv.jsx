function DogDivSquare({ dogName, color, spalva, plotis, aukstis, column, center, fleks }){
    return (

            <p style={
                {
                    backgroundColor: spalva,
                    color: color,
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