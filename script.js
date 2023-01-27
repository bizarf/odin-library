let myLibrary = [];
let table = document.querySelector("#library-table");
let bookForm = document.querySelector("#addBookForm");
let bookTableBody = document.querySelector("#book-data");

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
        myLibrary.push(this);
    }
}

// adds new books to the library array
function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
}

// submit button events
bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    libraryDisplay();
    clearInputs();
});

// Resets the form
function clearInputs() {
    bookForm.reset();
}

// creates new table rows
function addTableRow(title, author, pages, read, id) {
    let deleteTd = document.createElement("button");
    let statusBtn = document.createElement("button");
    deleteTd.textContent = "Delete";
    deleteTd.classList = "deleteBtn";
    deleteTd.dataset.id = id;
    let newRow = bookTableBody.insertRow();
    let titleCell = newRow.insertCell();
    let authorCell = newRow.insertCell(1);
    let pagesCell = newRow.insertCell(2);
    let readCell = newRow.insertCell(3);
    let deleteBtnCell = newRow.insertCell(4);
    pagesCell.classList = "pagesCol";
    readCell.classList = "bookStatusCol";
    deleteBtnCell.classList = "deleteBtnCol";
    titleCell.textContent = title;
    authorCell.textContent = author;
    pagesCell.textContent = pages;
    statusBtn.textContent = read;
    statusBtn.classList = "bookStatus";
    statusBtn.dataset.statusId = id;
    readCell.appendChild(statusBtn);
    deleteBtnCell.appendChild(deleteTd);
}

// test data
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310, false);

// Display function populates the table
function libraryDisplay() {
    bookTableBody.textContent = "";
    bookId();
    myLibrary.map((book) =>
        addTableRow(book.title, book.author, book.pages, book.read, book.id)
    );
    deleteBtn();
    setReadStatusClass();
    bookStatusToggle();
}
libraryDisplay();

// sets the labels of the book status
function setReadStatusClass() {
    let tableCell = document.querySelectorAll(".bookStatus");
    for (let cell of tableCell) {
        if (cell.textContent === "false") {
            cell.textContent = "Unread";
        } else if (cell.textContent === "true") {
            cell.textContent = "Read";
        }
    }
}

// Gives each book an ID number based on their array position
function bookId() {
    myLibrary.forEach(() => {
        for (let i = 0; i < myLibrary.length; i++) {
            myLibrary[i].id = i;
        }
    });
}

// function for the delete buttons. uses data attribute which is tied to array index
function deleteBtn() {
    let bookDeleteBtn = document.querySelectorAll("[data-id]");
    bookDeleteBtn.forEach((bookDelete) => {
        bookDelete.addEventListener("click", () => {
            myLibrary.splice(bookDelete.dataset.id, 1);
            libraryDisplay();
        });
    });
}

// function to toggle the book read status
function bookStatusToggle() {
    let bStatusBtn = document.querySelectorAll("[data-status-id]");
    bStatusBtn.forEach((status) => {
        status.addEventListener("click", () => {
            myLibrary[status.dataset.statusId].read =
                !myLibrary[status.dataset.statusId].read;
            libraryDisplay();
        });
    });
}
