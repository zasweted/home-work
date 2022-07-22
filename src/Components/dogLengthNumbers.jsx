const green = {color: 'green', fontSize: '40px'};
const red = {color: 'red', fontSize: '40px'};

function DogLengthNumbers({ dogNameLength, length }){

return(
    
    length.length > 6 ? <p style={green}>{dogNameLength.length}</p> : <p style={red}>{dogNameLength.length}</p>
    );
    
};

export default DogLengthNumbers;

