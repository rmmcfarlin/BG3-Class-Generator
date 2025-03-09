import React, { useState } from "react";
import GetClass from "./GetClass.js"
import GetSubclass from "./GetSubclass.js"

function Output () {

   const [image, setImage] = useState('gale-avatar')
   const [heading, setHeading] = useState('')
   const [subheading, setSubheading] = useState('')
  

   const Roll = () => {
    let result = GetClass()
    
    setHeading(result)
    setImage(result)
    setSubheading(GetSubclass(result))
  };

    return (
        <div className="generator">
            <img src={require(`./assets/${image}.png`)} style={{width:"200px"}}></img>
            <h2>{heading}</h2>   
            <h3>{subheading}</h3>
            <button onClick={Roll}>
                Roll
            </button>
        </div>
        
    )
}



export default Output;