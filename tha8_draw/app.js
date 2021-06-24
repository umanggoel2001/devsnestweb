var matrix=document.querySelector('.matrix');
window.onload=function(){
    for(let i=0;i<14;i++){
        var row=document.createElement('tr');
        row.className='row';
        matrix.appendChild(row);
        for(let j=0;j<80;j++){
            var box=document.createElement('td');
            
            box.className='col';
            row.appendChild(box);

        }
    }
}



setTimeout(()=>{
    var cols=document.querySelectorAll('.col');
    cols.forEach(c=>{
        c.addEventListener('click',(c)=>{
            c.target.classList.toggle("t");
        });
    });
},100);