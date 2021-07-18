import { useState } from "react";

const Frm =(props)=>{
  

   const [text,setText]=useState("");
 
    const input1=(e)=>{
      setText(e.target.value);
      // console.log(text);
      
    }
   

    const formClick=(e)=>{
      props.setArr([...props.arr,{ 'name': text}]);
      console.log(props.arr);
      setText("");
     e.preventDefault();
    }
         

   return(
   <div>
         <form  className="form" onSubmit={formClick} >
         <input id="inn" type="text" placeholder="add player"   onChange={input1}   value={text} required/>
      
      <button type="submit">Add</button>
         </form>
     
   
   </div>
   );
   
}


export default Frm;