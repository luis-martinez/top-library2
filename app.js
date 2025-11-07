const myLibrary = [];

function Book(id, title, author, pages) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
}


function addBookLibrary(title, author, pages) {
  let id = crypto.randomUUID();

  let book = new Book(id, title, author, pages);

  myLibrary.push(book);
}

let hobbit = addBookLibrary("The Hobbit", "JRR Tolkien", 300);
let rings = addBookLibrary("The Lord of the Rings", "JRR Tolkien", 350);

console.log(myLibrary);
