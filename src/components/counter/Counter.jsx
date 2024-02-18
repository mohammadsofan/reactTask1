import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0);
    const increaseCounter=()=>{
        setCounter(counter+1);
    }
  return (
    <button onClick={increaseCounter}>mohammad {counter}</button>
  )
}

export default Counter