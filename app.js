const myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookLibrary(title, author, pages, read) {
  let id = crypto.randomUUID();

  let book = new Book(id, title, author, pages, read);

  myLibrary.push(book);
}


function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    // console.log(myLibrary[i].title);
    displayBook(myLibrary[i]);
  }
}


function displayBook(book) {
  const container = document.querySelector("#container");
  const tr = document.createElement("tr");

  tr.innerHTML = `<td>${book.id}</td>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.pages}</td>
                  <td>${book.read}</td>`;

  container.appendChild(tr);
}

// MAIN

let hobbit = addBookLibrary("The Hobbit", "JRR Tolkien", 300, true);
let rings = addBookLibrary("The Lord of the Rings", "JRR Tolkien", 350, false);

// console.log(myLibrary);
// console.table(myLibrary);

displayLibrary();
