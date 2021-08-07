import { useCallback,useState } from "react";
 
const useArray=(initial)=>{

    const [item,setItem]= useState(initial);

    // const add=useCallback((i)=>{
    //     setItem(v=>[...v,i]);
    // })

    return{
        item,
        setItem,
        add:useCallback((i)=>{setItem(v=>[...v,i])}),
       clr:useCallback((i)=>{
        setItem(v=>{
            
            // console.log(v);
            // v.filter(p=>)
            const c= v.filter(item => item !== v[i]);

            // const c=v.splice(i,1);
        console.log(c);
          
        return c;
        });
    //    console.log(item);
    }),
          
         
        
        c:useCallback(()=>{setItem(()=>[])}),

    
    }
    }
    

export default useArray;    


