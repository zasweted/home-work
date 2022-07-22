const asd ={backgroundColor: 'crimson', height: '130px', width: '130px', borderRadius: '15%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};

function LowerCaseDogs({ dogName, dog }){

    return(
        
        
        <p style={asd}>{dog === dog.toLowerCase() ? dogName : null}</p>
        

    );

};

export default LowerCaseDogs;