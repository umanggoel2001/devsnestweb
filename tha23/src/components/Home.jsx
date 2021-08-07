
import { useState} from "react";
import useArray from "./useArray";
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
// import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';







const  Home=()=>{
    const addlist= useArray(["umang","prakhar","vandana","soumy"]);

    const [value,setValue]=useState("");
return (
    <div>
        <Container maxWidth="sm">
        <Paper elevation={3} >
        <h3> Add List</h3>   
        {/* <input type="text" /> */}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value}  onChange={(e)=>{setValue(e.target.value) } } />
    
         
         <Button variant="contained" color="secondary" onClick={()=>{
             addlist.add(value);
        setValue("");
        }}>

         AddItem
</Button>

         <ul>

            { addlist.item.map((i,index)=>(
                <li key={index}>{i} <Fab color="primary" aria-label="add" onClick={()=>{addlist.clr(index)}}>
              
                X
                </Fab>
                </li> 
           
            ))
            }
            
         </ul>
         <Button variant="contained" color="primary"  onClick={()=>{addlist.c()}}>Clear</Button>
        </Paper>
         </Container>
    </div>
)



}
export default Home;


