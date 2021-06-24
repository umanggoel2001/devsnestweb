const cards=document.querySelectorAll('.memorycard');
const numb=document.querySelector('.num');

const moves=document.querySelector('.move');
const startMatch=document.querySelector('.but');

 var hasflip=false;
 var firstclick,secondclick;
 var lock=false;
 var score=0;
 var mo=0;
 numb.innerHTML=`SCORE<br>${score}`;
 moves.innerHTML=`MOVES<br> ${mo}`;



 //start the game
startMatch.addEventListener('click',()=>{
    document.querySelector('.landing').style.opacity=0;

  

    setTimeout(()=>{
        document.querySelector('.landing').style.display="none";
    },1000)

})

//working flip 
function flip(){

  


    if(lock){
        return;
    }
    if(this===firstclick){
        return;
    }

    this.classList.add('flip');
 
    if(hasflip===false){
        hasflip=true;
        firstclick=this;

    }
    else{
        hasflip=false;
        secondclick=this;
        if(firstclick.dataset.frame===secondclick.dataset.frame){
            score++;
            mo++;
             numb.innerHTML=`SCORE<br>${score}`;
            
            moves.innerHTML=`MOVES<br> ${mo}`;
            
            firstclick.removeEventListener('click',flip);
            secondclick.removeEventListener('click',flip);
        }
        //not matching
        else{
            lock=true;
            mo++;
 moves.innerHTML=`MOVES<br> ${mo}`;
            

         setTimeout(()=>{
             firstclick.classList.remove('flip');
             secondclick.classList.remove('flip');
            
            lock=false;

         },1500);
     
        
        
     
        }
    
    }


// matching
  
}



(function shuffle(){
    cards.forEach(i=>{
        let random= Math.floor(Math.random()*12);
        i.style.order=random;
    });
}
)();


cards.forEach((i)=>{
    i.addEventListener('click',flip);
})



    

