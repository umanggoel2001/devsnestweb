
import './App.css';

import White from  './components/White';
import Black from './components/Black';

//making the black row

var arr1=[];
for(let i=0;i<4;i++){
  arr1.push(<Black/>);
  arr1.push(<White/>);
}

//making the white row
var arr2=[];
for(let i=0;i<4;i++){
  arr2.push(<White/>);
  arr2.push(<Black/>);
}

//make the rowB
const Brow=()=>{
  return(
    <div className='brow'>
      {arr1}
    </div>
  )
  ;
}
//make the rowW
const Wrow=()=>{
  return(
    <div className='wrow'>
      {arr2}
    </div>
  )
  ;
}

//now merging the rows

var arr =[];
for(let i=0;i<4;i++){
  arr.push(<Brow/>);
  arr.push(<Wrow/>);
}


const Board=()=>{
  return(

    <div className="board">
    {arr}
    </div>
 
  )
}

const App=()=>{
   return(
     <div className="App">
       <Board/>
     </div>
   );
   
}

export default App;


//my previous approach.
// // make the white box
// const White=()=>{
//   return(
//     <div className="white">
// hii
//     </div>
//   );
// }

// // make the black box
// const Black=()=>{
// return(
//   <div className="black">
// hello
//   </div>
// );  
// }

// //make a black row
//  const Rblack=()=>{

   
     

//        {
//          arr.map(i=>{
        
//           if(i%2===0){
//             return(
//             <div className="rblack">
//             <White/>
//             </div>
//             )
//           }
//           else{
//             return(
//             <div className="rblack">
//             <Black/>
//             </div>);
//           }
//         })

//        }


  
//  }

//  //make a white row
// const RWhite=()=>{
//   return(
//     <div className="rwhite"> 
//     </div>
//   );
// }

// const Board=()=>{


// {
// arr.map(i=>{
//   if(i%2===0){

//     return(
//       <div className="board">
//          <RWhite/>
//       </div>
//    );
//   }
//   else{
//     return(

//       <div className="board"> <Rblack/> 
//       </div>
//    ); 
//   }
// })

// }


// }

// const arr=[1,2,3,4,5,6,7,8,9,10];

// function App() {
//   return (
//     <div className="App">
//    <Board/>
//  </div>
//   );
// }

// export default App;
