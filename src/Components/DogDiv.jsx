const square = {backgroundColor: 'grey',color: 'white',width: '130px', height: '130px',display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center'};



function DogDivSquare({ dogName }){

    return (

            <p style={square}>{dogName}</p>

    );
};
export default DogDivSquare;