// Initialize empty array to store new books
const myLibrary = [];

// Select HTML elements
const addDialogBtn = document.querySelector('.add-dialog');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('.book-form');
const closeDialog = document.querySelector('.close-dialog');
const addNewBook = document.querySelector('.add-book');
const newBookTitle = document.querySelector('#title');
const newBookAuthor = document.querySelector('#author');
const newBookPages = document.querySelector('#pages');
const newBookRead = document.querySelector('#read');
const library = document.querySelector('.library');

// Object constructor for new books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        // return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        return `${this.title}<br>by ${this.author}<br>${this.pages} pages<br>`;
    };
}

// Accepts user's inputs and stores new book object in myLibrary array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Loop through myLibrary array and display each book on page
function displayBooks() {
    library.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        // Display book details
        const displayBook = document.createElement('div');
        displayBook.classList.add('books');
        library.appendChild(displayBook);
        const bookInfo = document.createElement('p');
        bookInfo.innerHTML = myLibrary[i].info();
        displayBook.appendChild(bookInfo);
        // Read/not read button
        const readBtn = document.createElement('button');
        readBtn.classList.add('read-btn');
        readBtn.setAttribute('data-book', i);
        if (myLibrary[i].read == true) {
            readBtn.classList.add('read');
            readBtn.innerHTML = 'Read';
        }
        else {
            readBtn.classList.add('not-read');
            readBtn.innerHTML = 'Not Read';
        }
        readBtn.onclick = toggleRead;
        displayBook.appendChild(readBtn);
        // Remove book button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.setAttribute('data-book', i);
        removeBtn.innerHTML = 'Remove';
        removeBtn.onclick = removeBook;
        displayBook.appendChild(removeBtn);
    }
}

// Dialog for adding new book details
addDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeDialog.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});
addNewBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.checked);
    dialog.close();
    form.reset();
});

// Toggle read/unread
const toggleRead = (e) => {
    const bookIndex = e.target.getAttribute('data-book');
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    displayBooks();
};

// Remove book from library
const removeBook = (e) => {
    const bookIndex = e.target.getAttribute('data-book');
    myLibrary.splice(bookIndex, 1);
    displayBooks();
};






// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

/* 
To-do:
- add read checkmark image?
- change btn color of read/not read
- form fields -valid/invalid/required
    - mdn form validation

*/