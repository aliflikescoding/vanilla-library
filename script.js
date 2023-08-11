/* variables */
let addButton = document.querySelector('#addButton');
let bookForm = document.querySelector('#bookForm');
let bookFormBackground = document.querySelector('#bookFormBackground');
let cancelButton = document.querySelector('#cancelButton');
let submitButton = document.querySelector('#submitButton');
let myForm = document.querySelector('#myForm');

let bookTitle = document.querySelector('#book_title');
let bookAuthor = document.querySelector('#book_author');
let bookPage = document.querySelector('#book_page');
let bookDesc = document.querySelector('#book_desc');
let readButton = document.querySelector('#readButton');
let readButtonTwo = document.querySelector('#readButtonTwo');

let myLibrary = [];

/* Object Constructors */
function Book(title, author, page, status, description) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.status = status;
  this.description = description
}

/* events */
addButton.addEventListener('click', () => {
    showForm();
});
cancelButton.addEventListener('click', () => {
    event.preventDefault();
    myForm.reset();
    hideForm();
});
submitButton.addEventListener('click', () => {
  event.preventDefault();
  createBook();
});

/* functions */
function showForm() {
    bookForm.classList.remove('not-active');
    bookForm.classList.add('active');
    bookFormBackground.classList.add('parentDisable');
}

function hideForm() {
    bookForm.classList.remove('active');
    bookForm.classList.add('not-active');
    bookFormBackground.classList.remove('parentDisable');
}
function addBookToLibrary(book) {
  myLibrary.push(book)
  console.log(myLibrary)
}

function createBook() {
    if (bookTitle.value != "" && bookAuthor.value != "" && bookPage.value != "" && bookDesc.value != "") {
      let title = bookTitle.value;
      let author = bookAuthor.value;
      let pages = bookPage.value;
      let desc = bookDesc.value;
      let status;
      if (readButton.checked == true) {
        status = true;
      }
      else if (readButtonTwo.checked == true) {
        status = false;
      }
      else {}
      let book = new Book(title, author, pages, status, desc);
      addBookToLibrary(book);
      hideForm();
      myForm.reset();
    }
}
