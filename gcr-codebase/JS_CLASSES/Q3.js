class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully");
        } else {
            console.log(this.title + " is already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully");
    }
}

// Creating book objects
let books = [
    new Book("JavaScript", "John", "101"),
    new Book("Python", "Smith", "102"),
    new Book("Java", "James", "103")
];

// Display available books
let availableBooks = books.filter(book => !book.isIssued);

console.log("Available Books:");

availableBooks.forEach(book => {
    console.log(book.title, book.author, book.ISBN);
});

// Search book using ISBN
let searchISBN = "102";

let selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found");
}