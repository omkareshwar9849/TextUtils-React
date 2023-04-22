import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
         setTempText(text);
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        //console.log(tempText)
        props.showAlert("Text is converted to uppercase.!!!","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking....","success");
      }
    
    const handelundo = () =>{
        setTempText(text);
        setText(tempText)
        console.log(tempText)
        props.showAlert("Last text retrieved..!!!","success");
    }
    const handleonclear = () =>{
        setTempText(text);
        let newText = " ";
        setText(newText)
        console.log(tempText)
        props.showAlert("Text is cleared!!!","success");
    }

    const handleLowClick = () =>{
         setTempText(text);
        let newText = text.toLowerCase();
        setText(newText)
        console.log(tempText)
        props.showAlert("Text is converted to lowercase..!!!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setTempText(text);
        setText(event.target.value)
        //console.log(tempText)
    }

    const handlereplace = () =>{
        let newText =text.replace(fWord,rWord);
        console.log(newText)
        setText(newText)
        props.showAlert("Text Replaced successfully.!!!","success");
    }

    const handlefWord = (event) =>{
        setfWord(event.target.value)
    }

    const handlerWord = (event) =>{
        setrWord(event.target.value)
    }

    const handleRClear = () => {
        setfWord("");
        setrWord("");
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied.!!!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All Extra spaces are removed from the text.","success");
    }

    const len=(text)=>{
        if(text === ""){
            return 0;
        }
        else if(text.charAt(text.length-1)===" "){
            return text.split(" ").length-1;
        }
        else{
            return text.split(" ").length;
        }
    } 

    const btnstyle=(mode)=>{
        if(mode==='purple'){
            return{
            backgroundColor: '#59359a',
            color:"white"
            }
        }
        
    }

    const textstyle=(mode)=>{
        if(mode==='purple'){
            return{
            color:"#59359a"
            }
        }
        
    }


    const [text, setText] = useState(''); 
    const [tempText,setTempText] = useState('');
    const [fWord, setfWord] = useState("");
    const [rWord, setrWord] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div> 
                <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
                <div className="mb-3"> 
                <textarea className={` form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{backgroundColor : props.mode === 'dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleonclear}>Clear</button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handelundo}>UNDO</button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={speak}> Speak </button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={textstyle(props.mode)} className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    Find word : 
                    <input onChange={handlefWord} className='mx-2' type="text" value={fWord}/>
                    Replace word :
                    <input onChange={handlerWord} className='mx-2' type="text" value={rWord} />
                    <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handlereplace}> Replace </button>
                    <button style={btnstyle(props.mode)} className="btn btn-primary mx-1" onClick={handleRClear}> Clear </button>
                </div>
                <h2>Yout text summary</h2>
                <p>{len(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text === "" ? "Enter something in the text box above to preview it here" : text}</p>
            </div>
        </>
    )
}