const asd ={backgroundColor: 'crimson', height: '130px', width: '130px', borderRadius: '15%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};

function LowerCaseDogs({ dogName, suva }){

    return(
        suva === suva.toLowerCase() ? <p style={asd}>{dogName}</p> : null
        
        
        

    );

};

export default LowerCaseDogs;