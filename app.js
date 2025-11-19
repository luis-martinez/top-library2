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


function deleteBookLibrary(bookId) {
  for (let index = 0; index < myLibrary.length; index++) {
    if (myLibrary[index].id === bookId) {
      // Delete from the Array
      myLibrary.splice(index, 1);
      console.table(myLibrary);
      // Delete from the HTML
      const table = document.querySelector("#container");
      table.deleteRow(index);
    } 
  }
}


function displayBook(book) {
  // Select table
  const container = document.querySelector("#container");
  // Create table row
  const tr = document.createElement("tr");

  // Create "delete button"
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.setAttribute("data-id", book.id);


  tr.innerHTML = `<td>${book.id}</td>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.pages}</td>
                  <td>${book.read}</td>`;

  container.appendChild(tr);
  tr.appendChild(button);

  button.addEventListener("click", () => {
    console.log(button.dataset.id);
    deleteBookLibrary(button.dataset.id);
  });


}


// MAIN

addBookLibrary("The Hobbit", "JRR Tolkien", 300, "Yes");
addBookLibrary("The Lord of the Rings", "JRR Tolkien", 350, "No");

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
