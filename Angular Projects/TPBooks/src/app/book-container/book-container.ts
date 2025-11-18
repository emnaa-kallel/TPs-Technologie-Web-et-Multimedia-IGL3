import { Component } from '@angular/core';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
import { Book } from '../Book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-container',
  imports: [BookList, BookForm, FormsModule, CommonModule],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {

  filterText: string = '';
  
  books: Book[] = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'editeur@example.com',
      publisherPhone: '12345678',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true,
      stock: 5
    },
    {
      id: 2,
      title: 'Angular Guide',
      author: 'John Doe',
      publisherEmail: 'publisher@example.com',
      publisherPhone: '87654321',
      releaseDate: '2023-01-01',
      category: 'Informatique',
      isAvailable: true,
      stock: 0
    },
     {
    id: 3,
    title: 'Les Misérables',
    author: 'Victor Hugo',
    publisherEmail: 'classiques@edition.fr',
    publisherPhone: '33445566',
    releaseDate: '1862-01-01',
    category: 'Roman',
    isAvailable: false,
    stock: 0
  },
  ];

  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  selectedBook: Book | null = null;

  addBook(book: Book) {
    // Générer un nouvel ID seulement si c'est un nouveau livre
    if (!book.id || book.id === 0) {
      book.id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
    }
     const newBook = { 
      ...book, 
      id: this.generateNewId() 
    };
    
    this.books.push(newBook);
    console.log('Book added, new books array:', this.books);
    this.selectedBook = null; // Réinitialiser après ajout
  }

  private generateNewId(): number {
    if (this.books.length === 0) return 1;
    return Math.max(...this.books.map(b => b.id)) + 1;
  }
  editBook(book: Book) {
    this.selectedBook = { ...book }; // Crée une copie pour l'édition
  }

  updateBook(book: Book) {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
    this.selectedBook = null; // Réinitialiser après mise à jour
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
    // Si on supprime le livre en cours d'édition, réinitialiser
    if (this.selectedBook && this.selectedBook.id === id) {
      this.selectedBook = null;
    }
  }

  filteredBooks() {
    return this.books.filter(b => 
      b.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  sortByCategory() {
    this.books.sort((a, b) => a.category.localeCompare(b.category));
  }

  sortByAvailable() {
    this.books.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
  }
}