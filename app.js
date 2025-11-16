const myLibrary = [];

function Book(title, author, pages, read) {
  let id = crypto.randomUUID();

  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookLibrary(title, author, pages, read) {
  // Creates a new book
  let book = new Book(title, author, pages, read);
  // Store the book
  myLibrary.push(book);
  // Display book in the table
  displayBook(book);
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

addBookLibrary("The Hobbit", "JRR Tolkien", 300, "yes");
addBookLibrary("The Lord of the Rings", "JRR Tolkien", 350, "no");

console.table(myLibrary);


// NEW BOOK

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const form = document.querySelector("form");


showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


// NEW BOOK SUBMIT

const submit = document.querySelector("#newBook");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  // Get data from the dialog, new book
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector('input[name="read"]:checked');

  addBookLibrary(title.value, author.value, Number(pages.value), read.value);

  console.table(myLibrary);

  dialog.close();
  form.reset();
});
