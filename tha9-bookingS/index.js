var seats=document.querySelector('.seat');
var book =document.querySelector('.booked');

var b=0;
var r=49;
//creating the seats
window.onload=()=>{
    for(let i=0;i<7;i++){
        var row=document.createElement('tr');
        row.className='row';
        seats.appendChild(row);
        for(let j=0;j<7;j++){
            var cell=document.createElement('td');
            cell.className='col'; 
            console.log(cell);
        
            row.appendChild(cell);
        }
   }

   book.innerHTML=`Booked Seats= ${b}||****************************||Remaining Seats= ${r}`
}
//collecting the clicks



setTimeout(() => {
    var clicks=document.querySelectorAll('.col');
clicks.forEach(i=>{
    i.addEventListener('click',(i)=>{
        if(i.target.classList.contains('tog')!=true){
            r--;
            b++;
            book.innerHTML=`Booked Seats= ${b}||****************************||Remaining Seats= ${r}` 
        }
        else{
            b--;
            r++;
            book.innerHTML=`Booked Seats= ${b}||****************************||Remaining Seats= ${r}` 
        }
        
        i.target.classList.toggle('tog');
    });
});
    
}, 100);





