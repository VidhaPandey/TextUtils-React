import React, { useState } from 'react'
import Alert from './Alert';
export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("UpperCase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleClearClick=()=>{
    setText('');
    props.showAlert("Text Cleared","success");
  }
  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed","success");
  }
  const handleOnChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText] =useState('');
  //text="vidha";//wrong way to set state
  //setText("Vidha");//correct way to set state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1> 
    
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" my-3 style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*(text.split(" ").length-1)} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}