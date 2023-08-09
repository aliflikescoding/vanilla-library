/* variables */
let addButton = document.querySelector('#addButton');
let bookForm = document.querySelector('#bookForm');
let bookFormBackground = document.querySelector('#bookFormBackground');
let cancelButton = document.querySelector('#cancelButton');

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

/* events */
addButton.addEventListener('click', () => {
    showForm();
});
cancelButton.addEventListener('click', () => {
    event.preventDefault();
    hideForm();
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
