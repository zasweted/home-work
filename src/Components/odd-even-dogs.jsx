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
    height:  '120px',
    width:  '120px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};
function OddEvenDogs({ name, square }){

    return(

        <p style={round}>{name}</p>

    );

};
export default OddEvenDogs;