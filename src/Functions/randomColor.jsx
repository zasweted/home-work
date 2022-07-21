import Random from "./random-number-generator";

function RandomColor(){
    const color = Random(1, 2);
    if(color === 1){
        return 'blue';
    }
        return 'red';
    
};

export default RandomColor;