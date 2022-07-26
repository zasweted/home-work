import { useState } from "react";

function Trees(){
    /*azuolas start */
    const oakStyle = {fontSize: '20px'};
    const [oakTree, setOakTree] = useState([]);
    const addOakTree = () => {
        setOakTree(x => [...x, ''])
    };
    /*azuolas end */

    /*berzas start */
    const birchStyle = {fontSize: '20px', color: '#000'};
    const [birchTree, setBirchTree] = useState([]);
    const addBirchTree = () => {
        setBirchTree(x => [...x, ''])
    }
    /*berzas end */

    /*uosis start */
    const ashTreeStyle = {fontSize: '20px'};
    const [ashTree, setAshTree] = useState([]);
    const addAshTree = () => {
        setAshTree(x => [...x, ''])
    };

    /*uosis end */

    const reset = () => {
        setOakTree(_ => [])
        setBirchTree(_ => [])
        setAshTree(_ => [])
    };


    return(

        <>
            <p style={{
                fontSize: '40px',
            }}>-----2.1-----</p>
            <div className="button-container">
                <button onClick={addOakTree}>azuolas</button>
                <button onClick={addBirchTree}>berzas</button>
                <button onClick={addAshTree}>uosis</button>
            </div>
        <div className="green-field">
            <div className="grass">

                {
                    oakTree.map((_, i) => <div className="oak-tree" key={i}><p style={oakStyle}>Azuolas</p></div>)
                }

            </div>
            <div className="grass">

                    {
                        birchTree.map((_, i) => <div className="birch-tree" key={i}><p style={birchStyle}>Berzas</p></div>)
                    }

            </div>
            <div className="grass">

                    {
                        ashTree.map((_, i) => <div className="ash-tree" key={i}><p style={ashTreeStyle}>Uosis</p></div>)
                    }

            </div>
        </div>
        <div style={{
            marginBottom: '80px'
        }}>
            <button style={{
                fontSize: '40px',
                padding: '20px 60px',
                borderRadius: '50px'
            }} onClick={reset}>reset</button>
        </div>
        </>

    );

};

export default Trees;