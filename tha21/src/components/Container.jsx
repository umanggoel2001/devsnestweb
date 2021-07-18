import Card from './Card';
import React from 'react';
import  { useState } from 'react';
import Frm from './Frm';








const Container=()=>{
    const obj=[
        {
         
            name:"Rohit Sharma",
        },
        {
         
            name:"Shikhar Dhawan",
           
        },
        {
            
            name:"Virat Kohli",
          
        },
        {
        
            name:"Hardik Pandaya",
            
        }
    
    ];
    const [arr,setArr]=useState(obj);
 
    var arr1=[]
    for(let i=0;i<arr.length;i++){
        arr1.push(<Card key={i} name={arr[i].name}  ind={i} arr={arr} setArr={setArr} />);
    }
return(
    <div className="container"> 
        <Frm  arr={arr} setArr={setArr}/>
       {arr1.length>0?arr1:<div className="no"></div>}

    </div>
);
}

export default Container;