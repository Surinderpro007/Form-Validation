import React, { useState } from 'react'

const Timer = () => {
    const [timer,setTimer] =useState(0)
    const [initialposition,setInitialposition] =useState(0)

    const handleStart=()=>{
        if(!initialposition){
            const id = setInterval(() => {
                setTimer((timer)=> timer + 1)
            },1000)
            setInitialposition(id)
        }
    }

    const handleStop=()=>{
        clearInterval(initialposition)
        setInitialposition(0)
        }

    const handleReset=()=>{
        setTimer(0)
        clearInterval(0)
        }


  return (
    <div>

<h2>Timer {timer}</h2>
<div>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
</div>
      
    </div>
  )
}

export default Timer
