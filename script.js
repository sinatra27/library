const myLibrary = [];
const showDialogBtn = document.querySelector('.show-dialog');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('.book-form');
const closeDialog = document.querySelector('.close-dialog');
const addNewBook = document.querySelector('.add-book');
const newBookTitle = document.querySelector('#title');
const newBookAuthor = document.querySelector('#author');
const newBookPages = document.querySelector('#pages');
const newBookRead = document.querySelector('#read');

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

// Function accepts the user's inputs and stores new book object in library array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Function loops through the array and displays each book on the page


// Dialog for adding new book details
showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeDialog.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});
addNewBook.addEventListener('click', (e) => {
    e.preventDefault();
    if (newBookRead.checked == true) newBookRead.value = 'read';
    else newBookRead.value = 'not read yet';
    // console.log(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    dialog.close();
    form.reset();
});

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());



/* 
To-do:
- fn that displays each book on page

*/