import React, {useState} from "react";


function Kindofform(){

  const [name,setName] = useState("");
  const [heading,setHeading] = useState(""); // inorder to change anything on the webpage useState is used never try to store anything in a third variable and change it ex. dont try to store fullname as a variable and trigger it when clicked that doesnt work here

  function handleChange(event){
    setName(event.target.value);
    
  }

  function handleSubmit(){
    setHeading(name);
  }
    return(
        <div className="container">
            <h1>Hello {heading}</h1>
            <input 
            type="text" 
            placeholder="Whats your name" 
            onChange={handleChange}
            value={name}    // always specify attributes that we change as a js object ex. value attribute should be assigned {name} so it correspondes to the same name 
            
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Kindofform;