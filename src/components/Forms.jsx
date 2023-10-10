import React, {useState} from "react";


function form(){

    const [Headingtext,setHeadingText]=useState("Hello");
    const [styled,setstyled]=useState(false);
    var name;
  
  function clicked(){
    setHeadingText(name);
  }
  function mouseover(){
    setstyled(true);
  }
  function mouseout(){
    setstyled(false);
  }
  function handleChange(event){
    name=event.target.value;
  }
    return(
        <div className="container">
            <h1>{Headingtext}</h1>
            <input 
            type="text" 
            placeholder="Whats your name" 
            onChange={handleChange}
            />
            <button 
            style={{ backgroundColor:styled?"black":"white"}} 
            onClick={clicked}
            onDoubleClick={doubleclicked} 
            onMouseOver={mouseover}
            onMouseOut={mouseout}
            >Submit</button>
        </div>
    )
}

export default form;