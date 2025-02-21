import React,{useRef} from 'react'

const UseRef = () => {
    let btnRef = useRef()
    const handleChange=()=>{
      console.log(btnRef.current)
      btnRef.current.style.backgroundColor="red"
    }
  return (
    <div>
      <button ref={btnRef}> Random Button</button>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default UseRef
