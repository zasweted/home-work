import { useState } from "react";

function Select() {

    const colors = [
        { id: 1.1, color: 'Crimson', colorValue: 'Crimson' },
        { id: 1.2, color: 'Green', colorValue: 'Green' },
        { id: 1.3, color: 'Blue', colorValue: 'Blue' },
        { id: 1.4, color: 'Yellow', colorValue: 'Yellow' },
        { id: 1.5, color: 'Orange', colorValue: 'Orange' },
    ]

    const fontSize = [
        { id: 2.1, sizeFont: '20px' },
        { id: 2.2, sizeFont: '30px' },
        { id: 2.3, sizeFont: '40px' },
        { id: 2.4, sizeFont: '50px' },
        { id: 2.5, sizeFont: '60px' },
    ]

    const fontFamily = [
        { id: 3.1, familyFont: 'Arial' },
        { id: 3.2, familyFont: 'Noto' },
        { id: 3.3, familyFont: 'Cursive' },
        { id: 3.4, familyFont: 'Franklin Gothic Medium' },
        { id: 3.5, familyFont: 'Futara' },
    ]

    const [colorName, setColorName] = useState('')
    const [fontSizeName, setFontSizeName] = useState('')
    const [fontFamilyName, setFontFamilyName] = useState('')
    const [showText, setShowText] = useState('')

    const handleInput = (e) => {
        setShowText(e.target.value)
    }
    const handleSelectColor = (e) => {
        setColorName(e.target.value)
    }
    const handleSelectFontSize = (e) => {
        setFontSizeName(e.target.value)
    }
    const handleSelectFontFamily = (e) => {
        setFontFamilyName(e.target.value)
    }

    return (

        <>
            <fieldset>
                <div>
                    <select onChange={handleSelectColor}>
                        {
                            colors.map(c => <option key={c.id} id={c.id} value={c.colorValue}>{c.color}</option>)
                        }
                    </select>
                    <select onChange={handleSelectFontSize}>
                        {
                            fontSize.map(fs => <option key={fs.id} value={fs.sizeFont}>{fs.sizeFont}</option>)
                        }
                    </select>
                    <select onChange={handleSelectFontFamily}>
                        {
                            fontFamily.map(ff => <option key={ff.id} value={ff.familyFont}>{ff.familyFont}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label></label>
                </div>
                <div>
                    <input onChange={handleInput} type="text"></input>
                </div>
                <div>
                    <h1 style={{
                        color: colorName,
                        fontSize: fontSizeName,
                        fontFamily: fontFamilyName
                    }}>{showText}</h1>
                </div>

            </fieldset>
        </>

    );

};

export default Select;