const myLibrary = [];

function Book(title, author, pages, read) {
  let id = crypto.randomUUID();

  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


Book.prototype.changeReadStatus = function() {
  // Update in the array
  this.read = this.read ? false : true;
  console.table(myLibrary);
  // Update in the HTML table
  document.getElementById(`${this.id}`).innerHTML = this.read;
};


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

  // Create "Delete" button
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";
  buttonDelete.setAttribute("data-id", book.id);

  // Create "Change Status" button
  const buttonStatus = document.createElement("button");
  buttonStatus.textContent = "Change Status";

  tr.innerHTML = `<td>${book.id}</td>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.pages}</td>
                  <td id="${book.id}">${book.read}</td>`;

  container.appendChild(tr);
  tr.appendChild(buttonDelete);
  tr.appendChild(buttonStatus);

  buttonDelete.addEventListener("click", () => {
    console.log(buttonDelete.dataset.id);
    deleteBookLibrary(buttonDelete.dataset.id);
  });

  buttonStatus.addEventListener("click", () => {
    book.changeReadStatus();
  });

}


// MAIN

addBookLibrary("The Hobbit", "JRR Tolkien", 300, true);
addBookLibrary("The Lord of the Rings", "JRR Tolkien", 350, false);

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

  addBookLibrary(title.value, author.value, Number(pages.value), Boolean(read.value));

  console.table(myLibrary);

  dialog.close();
  form.reset();
});
