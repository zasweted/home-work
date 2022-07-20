import Random from "../Functions/random-number-generator";

function RandomColor(){
    const color = Random(1, 2);
    if(color === 1){
        return 'blue';
    }else{
        return 'red';
    }
};

export default RandomColor;