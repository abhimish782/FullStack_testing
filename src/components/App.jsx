import React,{useState} from "react";


function App() {

  const [Headingtext,setHeadingText]=useState("Hello");
  const [styled,setstyled]=useState(false);
  
  function clicked(){
    setHeadingText("Thank You For Clicking");
  }
  function mouseover(){
    setstyled(true);
  }
  function mouseout(){
    setstyled(false);
  }
  function doubleclicked(){
    setHeadingText("Hello");
  }
  return (
    <div className="container">
      <h1>{Headingtext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{ backgroundColor:styled?"black":"white"}} 
      onClick={clicked}
      onDoubleClick={doubleclicked} 
      onMouseOver={mouseover}
      onMouseOut={mouseout}>
        Submit
      </button>
    </div>
  );
}

export default App;
