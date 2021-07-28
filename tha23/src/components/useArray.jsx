import { useCallback,useState } from "react";
 
const useArray=(initial)=>{

    const [item,setItem]= useState(initial);
    // const add=useCallback((i)=>{
    //     setItem(v=>[...v,i]);
    // })

    return{
        item,
        setItem,
        add:useCallback((i)=>{setItem(v=>[...v,i]);console.log(item);}),
        clr:useCallback((i)=>{setItem(v=>{v.splice(i,1)
            // console.log(i);
            // console.log(v);
        
            return v;
         
        });console.log(item)}),
        c:useCallback((a)=>{setItem(()=>[])}),

    
    }
    }
    

export default useArray;    


