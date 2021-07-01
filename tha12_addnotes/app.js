//using prototype
//book constructor
//learned from traversy media
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
console.log(Book);
}


//ui constructor
function UI(){

}

//adding book to list using prototype
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');
    //adding table row
    const row=document.createElement('tr');
    //now insert col in row
    row.innerHTML=`<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}
//show alert
UI.prototype.showAlert=function(message,className){
    const div=document.createElement('div');
    //add class
    div.className=`alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //make the parent
    const container=document.querySelector('.container');
    const form=document.querySelector('#book-form');
    //put the alert of div before form
    container.insertBefore(div,form);


    // set the timeout
  setTimeout(function(){
      document.querySelector('.alert').remove();
  },3000);

}




//clearing the fields
UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
    
} 
 
//delete book
UI.prototype.deleteBook=function(target){
    if(target.className==="delete"){
        target.parentElement.parentElement.remove();
    }
} 


// add event listner//
document.getElementById('book-form').addEventListener('submit',function(e){
    const title=document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn=document.getElementById('isbn').value
            

            //instantiate a constructor
            const book= new Book(title,author,isbn);
            
       //instantiate a ui\
       const ui=new UI();
            //validation
             if(title===''|| author===''|| isbn===' '){
                //error alert
                ui.showAlert('plz fill all fields','error');
             }else{
            
            //adding book to list
            ui.addBookToList(book);
            ui.showAlert('BooK Added','success');
            //clera the fields
            ui.clearFields();

             }
            

            
    

    e.preventDefault();
});

//event listener for deleter
document.getElementById('book-list').addEventListener('click',function(e){

    //make instance
    const ui=new UI();
    ui.deleteBook(e.target);
    //alert
    ui.showAlert("book deleted",'success')
});