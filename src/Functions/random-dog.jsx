function RandomDog(){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    const oddDogs = [];
    const evenDogs =[];
    dogs.map((a, i ) => {
        if(i % 2 == 0) return evenDogs.push(a);
        if(i % 2 !== 0) return oddDogs.push(a);
    })

};

export default RandomDog;

console.log(oddDogs, evenDogs);