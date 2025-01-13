import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("compunnet mount")

        return (()=>{
            console.log("component will nount")
        })

    })

    useEffect(()=>{
        console.log("component update")
    },[count])

    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1> Lifecycle </h1>
        <p> count: {count} </p>
        <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default Lifecycle
