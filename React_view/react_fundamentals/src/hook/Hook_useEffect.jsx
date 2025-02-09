import { useEffect } from "react";
import { useState } from "react"

const Hook_useEffect = () => {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const [cal,setCal] = useState(0);
    
    useEffect( () => {
      getMessage();
    },[count])

    useEffect( () => {
      setCal(count2 ** 2)
      // or setCal( (count) => count2 ** 2);
    },[count2])
    
    useEffect( () => {
      setTimeout( () => {
        setCount( () => count + 1)
      },1000)
    },[]) // empty array performe once operation 

    function getMessage(){
      console.log("Positive Number printed.");
    }

  return (

    <div>
    <p>Plus value : {count} </p>
    <button onClick={ () => setCount(count +1)}>In Plus</button>
    <p>Minus value : {count2} </p>
    <button onClick={ () => setCount2(count2 +1)}>Do Square</button>
    <p> {cal}</p>
    </div>
  )
}

export default Hook_useEffect

//useEffect is something which help us to perform side effect in our react application
