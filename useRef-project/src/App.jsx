import { useEffect, useRef, useState } from 'react'
import './App.css'
//useRef case A... 

function App() {
  //useRef case A... 
  // Storing Mutable Values: For saving values that you want to persist without triggering a component re-render.
const [count,setCount]=useState(0); //it or UI is re render in every click 
let val=useRef(0); //now val is an object and it or UI is not  re render in every click 
    function handleIncrment(){
      val.current=val.current+1;
      console.log(val.current);
      setCount(count+1);
    }
    //it runs every render
    useEffect(()=>{
      console.log("Mai do bara render ho raha hu ");
    },[])


    //useRef case B... 
  //Accessing DOM Elements: If you need to interact with a DOM element directly (e.g., focusing an input field, measuring dimensions, etc.).
// const[isActive,setActive]=useState(true);
let btnRef=useRef();


function changeColor(){
if(btnRef.current.style.backgroundColor=="red"){
  btnRef.current.style.backgroundColor="gray";
}
else{
  btnRef.current.style.backgroundColor="red";
}

}

  return (
    <>

     <button onClick={handleIncrment} style={{border:'none',backgroundColor:'gray'}}  ref={btnRef}>Incrment</button>
     Count-useState:{count} ||  Count-useRef:{val.current} 
     <hr/>
     <br/>

      <button onClick={changeColor}> Change Color</button>

    </>
  )
}

export default App
