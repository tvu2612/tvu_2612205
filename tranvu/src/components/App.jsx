// import React, {useState} from "react";

// function App(){
//     const[headingText, setHeadingText] = useState("Hello");
//     const[isMouseOver, setMouseOver] = useState(false);

//     function handleClick(){
//         setHeadingText("submitted");
//     }
//     function handleMouseOver(){
//         setMouseOver(true);
//     }
//     function handleMouseOut(){
//         setMouseOver(false);
//     }

//     return(
//         <div>
//             <h1>{headingText}</h1>
//             <button 
//             onClick={handleClick} 
//             onMouseOver={handleMouseOver} 
//             onMouseOut={handleMouseOut} 
//             style={{backgroundColor:isMouseOver ? "red":"blue"}}>Submit</button>
//         </div>
//     );
// }
// export default App;