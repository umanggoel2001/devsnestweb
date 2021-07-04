const qDB=[
    {
        question:"In Hera Pheri, what was Paresh Rawal's character called?",
        
        option1:"Raju",
        option2:"Shyam",
        option3:"Devi Prasad",
        option4:"Baburao",
        ans:"ans4"
     },
    {
        question:"In Jab We Met, what is the name of Geet's cousin?",
        option1:"Roop",
        option2:"Simran",
        option3:"Preet",
        option4:"Priya",
        ans:"ans1"
    },
    {
        question:"What is the name of Sholay' s iconic villain?",
        option1:"Kalia",
        option2:"Bulla",
        option3:"Gabbar",
        option4:"Shakaal",
        ans:"ans3"
 },
    {
        question:"Finish the quote from Deewar: 'Mere paas _____.'",
        option1:"Baap Hai",
        option2:"Paisa Hai",
        option3:"Maa hai",
        option4:"Iphone Hai",
        ans:"ans3"
    }
];


const ques=document.querySelector('.question');
const option1=document.getElementById('option1');
const option2=document.getElementById('option2');
const option3=document.getElementById('option3');
const option4=document.getElementById('option4');
const answers=document.querySelectorAll('.ans');
const submit=document.querySelector('#submit');
const scores=document.querySelector('.score');
const inner=document.querySelector('.inner');
const contain=document.querySelector('.over');
const button=document.querySelector('.button_slide');
const head=document.querySelector('.head');
 //output to document
var count= 0;
var score=0;
scores.innerHTML=`score <br>${score}`;
 function print(){
     ques.innerHTML=`<b>Ques</b> ${count+1}:-  ${ qDB[count].question}`;
   
     option1.innerHTML=qDB[count].option1;
     option2.innerHTML=qDB[count].option2;
     option3.innerHTML=qDB[count].option3;
     option4.innerHTML=qDB[count].option4;

 }
 print();
 var store;


 function deSelect(){
    answers.forEach((i)=>{
     i.checked=false;
       
        }
       );
 }
 
function checked(){
    answers.forEach((i)=>{
     if(i.checked){
      store=i.id;
    
     }
    });
    return store;
}

submit.addEventListener('click',()=>{
   const answer= checked();
//    console.log(answer);
   if(answer===qDB[count].ans){
    //    console.log('match');
       score++;
    //    console.log(score);
       scores.innerHTML=`score <br>${score}`;

       
     
      
  

   }
    count++;
    deSelect();
   if(count<qDB.length){
    print();
   }
   else{
    inner.style.display="none";
    contain.style.visibility="visible";
    button.addEventListener('click',()=>{
        console.log("hello");
        document.location.reload();
    })
    
    // inner.classList.add("mystyle");
   }
}) 

