const myLibrary = [];


function Book( title,author, read, pages) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read':'not read yet'}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}  



  
document.getElementById("new-book").addEventListener('click',function(){
    document.getElementById("add-book").style.display = "block";
})

// function addBookToLibrary() {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const pages = Number(document.getElementById("pages").value);
//     const read = document.getElementById("read").checked;
//     console.log("Title:", title);
//     console.log("Author:", author);
//     console.log("Pages:", pages);
//     console.log("Read Value:", read);

//     const book = new Book(title, author, pages, read);
//     myLibrary.push(book);
//     console.log(myLibrary)
    
// }



// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     addBookToLibrary();
//   });



function displayBooks() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        libraryDiv.appendChild(bookCard);
    });
}



function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}


document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();

    // Reset form and hide it
    document.getElementById("bookForm").reset();
    document.getElementById("add-book").style.display = "none";
});

document.getElementById("library").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const index = e.target.getAttribute("data-index");
        removeBook(index);
    } 
});
// Initial books
addBookToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 320, false));
addBookToLibrary(new Book("1984", "George Orwell", 328, true));

// Display initial books
displayBooks();