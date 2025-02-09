
import {useEffect, useRef, useState} from 'react';
const Hook_useRef = () => {
    
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);


  const inputRef = useRef();
    function clickMe(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "gray";
    inputRef.current.style.color = "white";
    }
  return (
    <div>
       <input type="text" placeholder="Write text" ref={inputRef} />
       <button onClick={clickMe} style={ {margin:5 }}>ChangeBgColor</button><br/>
      
       <h1>Tracking State Changes</h1>
       <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
  )
}

export default Hook_useRef;
