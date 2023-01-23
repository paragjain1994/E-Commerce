import React from "react";


let Title = ()=>{
    
  const mystyle ={
    textAlign: "center",
    color: "black",
    fontSize: "4.5rem"
  }

  const mystyle2 ={
    textAlign: "center",
    color: "black",
    fontSize: "2.5rem",
    marginBlockStart: "-15px"
  }

    return(
<div> 
<h1 style={mystyle}>The Generics</h1>
<hr />
<h1 style={mystyle2}>Music</h1>
</div>

    )
}

export default Title;