"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (bookId) {
        this.books = this.books.filter(function (b) { return b.id !== bookId; });
    };
    Library.prototype.searchBook = function (title) {
        return this.books.filter(function (b) { return b.title.toLowerCase().includes(title.toLowerCase()); });
    };
    Library.prototype.borrowBook = function (bookId) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    };
    Library.prototype.returnBook = function (bookId) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (book && !book.available) {
            book.available = true;
            return true;
        }
        return false;
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    return Library;
}());
exports.Library = Library;
