const round ={backgroundColor: 'green', height: '130px', width: '130px', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};

const square = {backgroundColor: 'grey',color: 'white',width: '130px', height: '130px',display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center'};

function OddEvenDogs({ dogName, index}){

    return(

        <p style={index % 2 === 0 ? square : round}>{dogName}</p>

    );

};
export default OddEvenDogs;