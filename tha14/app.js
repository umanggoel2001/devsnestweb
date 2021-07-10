
const output=document.querySelector('#output');
const unl=document.querySelector('#unl');

var o="";
 

document.querySelector('button').addEventListener('click', () =>{
    


    o+=`<li>"submit changed"</li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})

// onChange
document.querySelector('input').addEventListener('change', () =>{
    o+=`<li>"input changed"</li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})

// keyDown
document.querySelector('input').addEventListener('keydown', () =>{
   
    o+=`<li>"Key Pressed!!"</li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})

// keyUp
document.querySelector('input').addEventListener('keyup', () =>{


    o+=`<li>"Key Released!!"</li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);

})

// Double Click
document.querySelector('button').addEventListener('dblclick', () =>{

    o+=`<li>"Submit Double Clicked!!"<li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);

})

// Focus Lost
document.querySelector('button').addEventListener('blur', () =>{
  
    
    o+=`<li>"Focus lost!!"<li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);


})

// Focus Gained
document.querySelector('input').addEventListener('focus', () =>{
    
    o+=`<li>"Focus Gained!!"<li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})

// mouse over
document.querySelector('input').addEventListener('mouseover', () =>{
   
    o+=`<li>"Mouse moved over!!"<li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})

// mouse out
document.querySelector('input').addEventListener('mouseout', () =>{
  
    o+=`<li>Mouse moved out!!<li>`;
    unl.innerHTML=o;
    
    output.appendChild(unl);
})