import { Book } from '../models/Book';

export class ApiService {
    static fetchBooks(): Promise<Book[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true },
                    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, available: true },
                    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, available: true }
                ]);
            }, 500);
        });
    }
}