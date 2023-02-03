import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

    function totitleCase(value) {
        let myValue = value.toLowerCase()
        let newValue = myValue.split(" ")
        let newarray = []
        for(let i = 0; i< newValue.length; i++){
            let arrayValue = newValue[i][0].toUpperCase() + newValue[i].slice(1)
            newarray.push(arrayValue)
    }
        return newarray.join(" ")
    }

    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let Utext = text.toUpperCase();
        setText(Utext);
        props.showAlert("Coverted to Uppler case","success");
    }

    const handleLoClick = ()=>{
        let Utext = text.toLowerCase();
        setText(Utext);
        props.showAlert("Coverted to Lower case","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const buttonClick = () => {
        let newText = totitleCase(text)
        setText(newText)
    }

    const handleCopy = () => {
        var mytext = document.getElementById("myBox");
        mytext.select();
        navigator.clipboard.writeText(mytext.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let mytext = text.split(/[ ]+/);
        setText(mytext.join(" "));
        props.showAlert("Extra space removed","success");
    }


  return (
    <>
    <div className='container' style={{ color: props.mode==='dark'?'#ffffff':'#363a3e'}}>
        <h3 style={{ color: props.mode==='dark'?'#ffffff':'#363a3e'}}>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode==='light'?'#ffffff':'#363a3e', color: props.mode==='dark'?'#ffffff':'#363a3e'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 mx-1">Speak</button>
        <button className="btn btn-primary mx-1" onClick={buttonClick}>Convert to TitleCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        
    </div>
    

    <div className="container my-5" style={{ color: props.mode==='dark'?'#ffffff':'#363a3e'}}>
        <h3>Your text summary</h3>
        <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
        <p><strong>{0.008 * text.split(" ").length}</strong> minutes to read.</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text"}</p>
    </div>
    </>
  )
}

TextForm.propTypes ={
    heading: PropTypes.string,
}