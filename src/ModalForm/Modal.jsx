import React,{useState} from 'react'
import FormOpen from "./FormOpen"
function Modal() {
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className="modal">
        <h1>User Details Form</h1>
        <button onClick={()=>{
            setisOpen(!isOpen)
        }}>Open Form</button>
        {isOpen ? <FormOpen /> : null}
    </div>
  )
}

export default Modal