import { useEffect, useState } from "react";
import Random from "../Functions/random-number-generator";


function MyLittleFarm(){

    

    const [avys, setAvys] = useState([]);
    console.log('avys', avys);
    const [karves, setKarves] =useState([]);
    console.log('karves', karves);
    const [transfer, setTransfer] = useState([]);
    const addAnimal = () => {
        for(let i = 0; i< Random(5, 20); i++){
            setAvys(x => [...x, {name: 'A', id: Random(1000000, 9999999)}]);
        }
        for(let x = 0; x< Random(5, 20); x++) {
            setKarves(x => [...x, {name: 'K', id: Random(1000000, 9999999)}]);
        }
        
    }

    const hardReset = () => {
        setAvys(_ => [])
        setKarves(_ => [])
    }
    useEffect(() => {
        const getAvys = localStorage.getItem('AVYS')
        if(getAvys !== null){
            setAvys(JSON.parse(getAvys))
        } 
        const getKarves = localStorage.getItem('KARVES')
        if(getKarves !== null){
            setKarves(JSON.parse(getKarves))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('AVYS', JSON.stringify(avys));
        localStorage.setItem('KARVES', JSON.stringify(karves))
    }, [avys, karves])

    

    



    return(

        <>
            <h1>------------------My Little Farm-------------------</h1>
            <div className="farm-main">
                
                <div className="farm-field">
                    {
                        avys.map((a)=> <div className="avis" id={a.id} key={a.id}>{`${a.name} ${a.id}`}</div>)
                    }
                </div>
                <button onClick={addAnimal} className="btn"> I Ganykla </button>
                <div className="farm-field">
                    {
                        karves.map((a)=> <div className="karve" key={a.id}>{`${a.name} ${a.id}`}</div>)
                    }
                </div>
            </div>
            <button onClick={hardReset}>HARD RESET</button>
        </>

    );

};


export default MyLittleFarm;