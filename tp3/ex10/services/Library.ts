import { Book } from '../models/Book';

export class Library {
    private books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    removeBook(bookId: number) {
        this.books = this.books.filter(b => b.id !== bookId);
    }

    searchBook(title: string): Book[] {
        return this.books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    }

    borrowBook(bookId: number): boolean {
        const book = this.books.find(b => b.id === bookId);
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    }

    returnBook(bookId: number): boolean {
        const book = this.books.find(b => b.id === bookId);
        if (book && !book.available) {
            book.available = true;
            return true;
        }
        return false;
    }

    getBooks(): Book[] {
        return this.books;
    }
}
