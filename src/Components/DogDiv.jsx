function DogDivSquare({ dogName, spalva, plotis, aukstis, }){
    return (

            <p style={
                {
                    backgroundColor: spalva,
                    width: plotis +'px',
                    height: aukstis +'px',
                }
        }>{dogName}</p>

    );
};
export default DogDivSquare;