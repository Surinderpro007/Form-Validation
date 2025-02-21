
import React, { useContext } from 'react'
import { colorProv } from '../../App'


const Context3 = () => {

    const {color, setColor ,txtColor ,setTxtColor } = useContext(colorProv)

    const handleChange=()=>{
        console.log("Changed")
        if(color==="black"){
            setColor("white")
            setTxtColor("black")
        }
        else{
            setColor("black")
            setTxtColor("white")
            }
    }
    

  return (
    <div>
{color}
{setColor}
<button onClick={handleChange} style={{color: txtColor ? "black" : "white" }}>Clike</button>
    </div>
  )
}

export default Context3
