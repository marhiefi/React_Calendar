import React from 'react'
import './Header.css';


function PrevButton (props) {
   return (
       <span className="prev-button">
       <button className='buttons' 
       onClick={props.onButtonClick}>prev{props.prev}
       </button>
       </span>
   );
 }
 
 function NextButton (props) {
   return ( 
       <span className="next-button">
       <button className='buttons'
       onClick={props.onButtonClick}>next{props.next}
       </button>
       </span>
   );
 }
 
function Header (props) { 
    return (
         <div  className="header">
             <span className="column col-center" >{props.active}</span>
         </div>
    ) 
};

export {PrevButton, NextButton, Header};

    