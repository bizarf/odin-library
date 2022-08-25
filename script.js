let myLibrary = [];
let table = document.querySelector("#library-table");
let bookForm = document.querySelector("#addBookForm");
let bookTableBody = document.querySelector("#book-data");

// the constructor...
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// adds new books to the library array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    return myLibrary.push(newBook)
}

// submit button events
bookForm.addEventListener("submit", function (e) {
    e.preventDefault()

    addBookToLibrary(title.value, author.value, pages.value, read.checked)
    addTableRow(myLibrary.at(-1).title, myLibrary.at(-1).author, myLibrary.at(-1).pages, myLibrary.at(-1).read)
    clearInputs()
})

// Resets the form
function clearInputs() {
    bookForm.reset();
}

// creates new table rows
function addTableRow(title, author, pages, read) {
    let deleteTd = document.createElement("button")
    deleteTd.textContent = "Delete"
    deleteTd.classList = "deleteBtn"
    let newRow = bookTableBody.insertRow()
    let titleCell = newRow.insertCell()
    let authorCell = newRow.insertCell(1)
    let pagesCell = newRow.insertCell(2)
    let readCell = newRow.insertCell(3)
    let deleteBtnCell = newRow.insertCell(4)
    titleCell.textContent = title
    authorCell.textContent = author
    pagesCell.textContent = pages
    readCell.textContent = read
    deleteBtnCell.appendChild(deleteTd)
}

addBookToLibrary(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    223,
    1
);

addBookToLibrary(
    "The Hobbit",
    "J. R. R. Tolkien",
    310,
    0
);

// Display function populates the table
function libraryDisplay() {
    for (let book of myLibrary) {
        addTableRow(book.title, book.author, book.pages, book.read)
    }
    return "Library loaded"
}
libraryDisplay()

// Clears the table except for the headers
function clearTableRows() {
    while (table.rows.length > 1) {
        table.deleteRow(1)
    }
}

function checkReadStatus() {
    let tableCell = document.querySelectorAll(".tableCell");
    for (let cell of tableCell) {
        if (cell.textContent === "false") {
            cell.className = "test"
        } else if (cell.textContent === "true") {
            cell.className = "test2"
            cell.textContent = "POL"
        }
    }
}

function removeFromLibrary() {
    myLibrary.splice( ? , 1)
}