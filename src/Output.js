import React, { useState } from "react";
import GetClass from "./GetClass.js"
import GetSubclass from "./GetSubclass.js"

function Output () {

   const [image, setImage] = useState('gale-avatar')
   const [heading, setHeading] = useState('')
   const [subheading, setSubheading] = useState('')
  

   const Roll = () => {
    let result = GetClass()
    let subResult = GetSubclass(result)

    setHeading(result)
    setImage(subResult)
    setSubheading(subResult)
  };

  const SubReroll = () => {
    let newSubResult = GetSubclass(heading)

    setImage(newSubResult)
    setSubheading(newSubResult)
  }

    return (
        <div className="generator">
            <img src={require(`./assets/sub-classes/${image}.png`)} style={{width:"200px"}} alt="Subclass Icon"></img>
            <h2>{heading}</h2>   
            <h3>{subheading}</h3>
            <button onClick={Roll}>
                Roll
            </button>
            <button onClick={SubReroll} className="secondaryButton">Reroll Subclass</button>
        </div>
        
    )
}



export default Output;