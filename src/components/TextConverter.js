import React, { useState } from 'react'

export default function TextConverter(props) {

    //Tools
    //01
    const handletextclick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText)

    }
    //02
    const handletextclicklc = () => {
        console.log("lowercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        settext(newText)

    }
    //03
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);



    }
    //04
    const capitalize = () => {
        let CapitalizeWords = text[0].toUpperCase();
        for (let i = 1; i <= text.length - 1; i++) {
            let currentCharacter, previousCharacter = text[i - 1];
            if (previousCharacter && previousCharacter === ' ') {
                currentCharacter = text[i].toUpperCase();
            } else {
                currentCharacter = text[i];
            }
            CapitalizeWords = CapitalizeWords + currentCharacter;
        }
        settext(CapitalizeWords);
    }
    //05
    const handlereact1 = () => {
        let newtext = text.replaceAll("class=", "className=");
        settext(newtext);
    };
    //05
    const handlereact2 = () => {
        let newtext = text.replaceAll("for=", "htmlFor=");
        settext(newtext);
    };






    //Text Viewer
    const HandleOnChange = (event) => {
        console.log("On Change");
        settext(event.target.value);
    }

    const [text, settext] = useState('Enter text here');

    return (

        <>
        <div className="container my-3"> 
            <h1>{props.Head01}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" onChange={HandleOnChange} style={{bckgroundColor: props.mode===`dark`?`grey`:`black`}} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" onClick={handletextclick} className="btn btn-primary">Convert to uppercase</button>
            <button type="button" onClick={handletextclicklc} className="btn btn-primary">Convert to Lowecase</button>
            <button type="button" onClick={handleCopy} className="btn btn-primary">Copy</button>
            <button type="button" onClick={capitalize} className="btn btn-primary">Capital 1st</button>
            <button type="button" onClick={handlereact1} className="btn btn-primary">React1</button>
            <button type="button" onClick={handlereact2} className="btn btn-primary">React2</button>



            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    )
}
