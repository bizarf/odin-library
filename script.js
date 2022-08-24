let myLibrary = [];

// the constructor...
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    return myLibrary.push(newBook)
}

addBookToLibrary(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    223,
    "Yes"
);

addBookToLibrary(
    "The Hobbit",
    "J. R. R. Tolkien",
    310,
    "No"
);

// const test = new Book("test", "test", 343, "yes")
// const test2 = new Book("woof", "woof", 55, "no")
// const test3 = new Book("meow", "meow", 43, "yes")

function libraryDisplay() {
    myLibrary.forEach(({
        title,
        author,
        pages,
        read
    }) => {
        let table = document.querySelector("#library-table")
        let newRow = table.insertRow()
        let titleCell = newRow.insertCell()
        let authorCell = newRow.insertCell(1)
        let pagesCell = newRow.insertCell(2)
        let readCell = newRow.insertCell(3)
        titleCell.textContent = title
        authorCell.textContent = author
        pagesCell.textContent = pages
        readCell.textContent = read
    })
}

// function addTableRow() {
//     let table = document.querySelector("#library-table")
//     let newRow = table.insertRow()
//     let cell = newRow.insertCell()
//     cell.textContent = "test"
// }

let log = (item) => {
    let table = document.querySelector("#library-table")
    let newRow = table.insertRow();
    for (const property in item) {
        let newCell = newRow.insertCell()
        newCell.textContent = item[property]
    }

}
myLibrary.forEach(log);