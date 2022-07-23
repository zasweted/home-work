import { useState } from "react";

function Trees(){
    const oakStyle = {fontSize: '20px'}
    const [oakTree, setOakTree] = useState([]);
    const addOakTree = () => {
        setOakTree(x => [...x, ''])
    }

    return(

        <>
            <p style={{
            fontSize: '40px',
        }}>-----2.1-----</p>
        <div className="green-field">
            <div className="grass">

                {
                    oakTree.map((_, i) => <div className="oak-tree" key={i}><p style={oakStyle}>Azuolas</p></div>)
                }

            </div>
            <div className="grass"></div>
            <div className="grass"></div>
        </div>
        <div className="button-container">
            <button onClick={addOakTree}>azuolas</button>
            <button>berzas</button>
            <button>uosis</button>
        </div>
        </>

    );

};

export default Trees;