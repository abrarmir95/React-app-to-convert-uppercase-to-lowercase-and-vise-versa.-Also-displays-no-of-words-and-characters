import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('');
  
    const handleupcase = () => {
        // console.log('button was clicked')
        // setText('you have clicked on handleupcase')
        let upText = text.toUpperCase()
        setText(upText)
    }
    const handlelocase = () => {
    
        let upText = text.toLowerCase()
        setText(upText)
    }
    const handleonchage = (event) => {
        // console.log('on change')
        setText(event.target.value)
    }
    return (
        <>
            <h3>{props.heading} </h3><div>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleonchage} placeholder='Enter the text here' value={text} id="texthere" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupcase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelocase}>Convert to Lowercase</button>

            </div>
            <h2>Your text has:</h2>
           <p> {text.split(" ").length} number of words and {text.length} number of characters</p>
           <p> You will take this much of time to read these words: {.008 * text.split(" ").length} </p>
           <h3>Preview of above text is:</h3>
           {text}
        </>
    )
}

