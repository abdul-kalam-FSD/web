// Book constructor
function Book(Title,Author,isbn){
    this.Title=Title;
    this.Author=Author;
    this.isbn=isbn;
}

// UI constructor
function UI(){
    // Add Book to ui
    UI.prototype.addBookList=function(book){
        const list=document.querySelector("#book-list");
        const tr=document.createElement("tr");
        tr.innerHTML=`
                <td>${book.Title}</td>
                <td>${book.Author}</td>
                <td>${book.isbn}</td>
                <td class="delete"><span class="btn btn-danger">X</span></td>`
        list.appendChild(tr);
    }
    UI.prototype.clearfield=function(){
                document.querySelector("#title").value="";
                document.querySelector("#author").value="";
                document.querySelector("#isbn").value="";
    }
    UI.prototype.clearTasks=function(){
        document.querySelector("#book-list").innerHTML="";
    }
    UI.prototype.removeTask=function(item){
        item.parentElement.remove();
    }
    UI.prototype.showAlert=function(message,type){
        this.clearAlert();
        // create a div
        const div=document.createElement("div");
        // Add class
        div.className=`alert alert-${type}`;
        // Add text
        div.innerText=message;
        // Get a show alert parent
        document.querySelector(".show-alert").appendChild(div);
        setTimeout(function(){
            document.querySelector(".alert").remove();
            this.clearAlert();
        },3000)
    }
    UI.prototype.clearAlert=function(){
        const currentAlert=document.querySelector(".alert");
        if(currentAlert){
            currentAlert.remove();
        }
    }
    }
 function Storage(){
       Storage.prototype.getbooks=function(){
        let books;
        if(localStorage.getItem("books")===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
        Storage.prototype.addbooks=function(book){

        const books=this.getbooks();
        books.push(book);
        console.log(books);
        // // Set into localStorage
        localStorage.setItem("books",JSON.stringify(books));
    }
    Storage.prototype. displayBook=function(){
          const books = this.getbooks();
        books.forEach(function(book){
            const ui=new UI();
            console.log(ui);
            ui.addBookList(book);
        });
    }
    Storage.prototype.clearBook=function(){
        localStorage.clear();
    }
   Storage.prototype.removeBook = function(isbn){
    let books = this.getbooks();

    books = books.filter(function(book){
        return book.isbn !== isbn;
    });

    localStorage.setItem("books", JSON.stringify(books));
}
 }
const test=new Storage();
console.log(test.addbooks());
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
        const ui=new UI();
        const storage=new Storage();
        ui.removeTask(e.target.parentElement);
        storage.removeBook(isbn);
        ui.showAlert("book delete","success");
    }
});