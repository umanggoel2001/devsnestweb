import { functionExpression } from "@babel/types";
import { useState } from "react";
const Card=(props)=>{
  
 const[flag,setFlag]=useState(0);
 const [name,setName]=useState("");
    const del=()=>{
        const arr2=props.arr.filter((e,i)=>
            i!=props.ind
        );
        console.log(arr2);
        props.setArr(arr2);
    }

    const name1=(e)=>{
        setName(e.target.value);
    }



    const edit=()=>{
       props.setArr( props.arr.map((e,i)=>{
           if(i==props.ind){
               setFlag(0);
               
            return {'name': name};
         
           }
           else{
            return e;
           }
       }))
    }

    return(
        <div className="card">
            {
                (flag===1)?
                <form onSubmit={edit}>
                <input id="inn" type="text" placeholder="what to edit"   onChange={name1}   value={name} required/>
                <button id="but" type="submit">submit</button>
                </form>: <div className="real">
                <h1>{props.name}</h1>  
            <button onClick={del}><i class="fa fa-times" aria-hidden="true"></i></button>
            <button onClick={()=>{
                setFlag(1);
            
            }}>edit</button>
                </div>
                 
            }

       
         
        </div>
        )
    }
    export default Card;