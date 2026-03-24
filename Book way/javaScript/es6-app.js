class Book{
    constructor(Title,Author,isbn){
        this.Title=Title;
        this.Author=Author;
        this.isbn=isbn;
    }
}

class UI{
   addBookList(book){
        const list=document.querySelector("#book-list");
        const tr=document.createElement("tr");
        tr.innerHTML=`
                <td>${book.Title}</td>
                <td>${book.Author}</td>
                <td>${book.isbn}</td>
                <td class="delete"><span class="btn btn-danger">X</span></td>`
        list.appendChild(tr);
    }
    clearfield(){
                document.querySelector("#title").value="";
                document.querySelector("#author").value="";
                document.querySelector("#isbn").value="";
    }
    clearTasks(){
        document.querySelector("#book-list").innerHTML="";
    }
    removeTask(item){
        item.parentElement.remove();
    }
    showAlert(message,type){
        this.clearAlert();
        // create a div
        const div=document.createElement("div");
        // Add class
        div.className=`alert alert-${type}`;
        // Add text
        div.innerText=message;
        // Get a show alert parent
        document.querySelector(".show-alert").appendChild(div);
        setTimeout(()=>{
            this.clearAlert();
        },3000)
    }
    clearAlert(){
        const currentAlert=document.querySelector(".alert");
        if(currentAlert){
            currentAlert.remove();
        }
    }
}
class Storage{
    getbooks(){
        let books;
        if(localStorage.getItem("books")===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    addbooks(book){

        const books=this.getbooks();
        books.push(book);
        console.log(books);
        // // Set into localStorage
        localStorage.setItem("books",JSON.stringify(books));
    }
    displayBook(){
          const books = this.getbooks();
        books.forEach(function(book){
            const ui=new UI();
            ui.addBookList(book);
        });
    }
    clearBook(){
        localStorage.clear();
    }
    removeBook(isbn){
    let books = this.getbooks();
    books = books.filter(function(book){
        return book.isbn !== isbn;
    });
    localStorage.setItem("books", JSON.stringify(books));
}
}
// Initialize display of stored books on DOM load
document.addEventListener("DOMContentLoaded", function(){
    const storage = new Storage();
    storage.displayBook();
});
// Add Eventlistener for submit

document.querySelector("#book-form").addEventListener("submit",function(e){
    e.preventDefault();
    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const isbn=document.querySelector("#isbn").value;
    const ui=new UI;
    const storage=new Storage();
    if(title===""||author===""||isbn===""){
        ui.showAlert("Please fill the all fields","danger");
    }else{
        const book=new Book(title,author,isbn);
        ui.addBookList(book);
        ui.showAlert("Book Added","success");
        storage.addbooks(book);
        ui.clearfield();
    }
})
document.querySelector("#clear").addEventListener("click",function(e){
    const ui=new UI()
    const storage = new Storage();
    ui.clearTasks();
    storage.clearBook();
    ui.showAlert("All Clear","success")
});
document.querySelector("#book-list").addEventListener("click",function(e){
    if(e.target.parentElement.classList.contains("delete")){
        const isbn=e.target.parentElement.previousElementSibling.innerText;
        const ui=new UI();
        const storage=new Storage();
        ui.removeTask(e.target.parentElement);
        storage.removeBook(isbn);
        ui.showAlert("book delete","success");
    }
});