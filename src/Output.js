import React, { useState } from "react";

const GetClass = () => {
    let num = (Math.random() * 10) + 1
    switch (true) {
        case num < 0.8333:
            return "Barbarian";
        case num > 0.8333 && num < 1.6666:
            return "Bard";
        case num > 1.6666 && num < 2.4999:
            return "Cleric";
        case num > 2.4999 && num < 3.3332:
            return "Druid";
        case num > 3.3332 && num < 4.1666:
            return "Fighter"; 
        case num > 4.1666 && num < 4.9999:
            return "Monk"; 
        case num > 4.9999 && num < 5.8332:
            return "Paladin";
        case num > 5.8332 && num < 6.6666:
            return "Ranger"; 
        case num > 6.6666 && num < 7.4999:
            return "Rogue"; 
        case num > 7.4999 && num < 8.3332:
            return "Sorcerer"; 
        case num > 8.3332 && num < 9.1665:
            return "Warlock"; 
        case num > 9.1665 && num < 11:
            return "Wizard"; 
        default:
            return "Paladin"
    }  
}

function Output () {

   const [heading, setHeading] = useState('')
   const [image, setImage] = useState('gale-avatar')

   const Roll = () => {
    let result = GetClass()
    setHeading(result)
    setImage(result)
  };

    return (
        <div className="generator">
            <img src={require(`./assets/${image}.png`)} style={{width:"200px"}}></img>
            <h2>{heading}</h2>   
            <button onClick={Roll}>
                Roll
            </button>
        </div>
        
    )
}



export default Output;