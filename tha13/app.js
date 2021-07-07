const name1=document.querySelector('#name1');
const name2=document.querySelector('#name2');
const b=document.querySelector('#b');
const change= document.querySelector('.change');

const snail=document.querySelector('.snail');
const btn=document.querySelector('.btn-contain');

function cli(){
	window.location.reload();
}


b.addEventListener('click',()=>{

	snail.style.visibility="visible";
	btn.style.visibility="hidden";



    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const check=JSON.parse(this.responseText);
		console.log(check);
		setTimeout(()=>{
			snail.style.display="none";
			change.innerHTML=`<h2>Love percentage: ${check.percentage}%</h2><h2>${check.result}</h2><br>
		<button onclick=cli()>Try Again</button>`

		},2000);
		
	}
});

xhr.open("GET", `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1.value}&sname=${name2.value}`);
xhr.setRequestHeader("x-rapidapi-key", "9a2cf12dbbmshf016a960e24070cp171f43jsnfaf9a9e57542");
xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");

xhr.send(data);
    

});

