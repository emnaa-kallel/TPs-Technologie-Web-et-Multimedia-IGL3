import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../Book'; 
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookForm {
  
  @Input() categories: string[] = [];
  @Input() selectedBook: Book | null = null;

  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();

  book: Book = this.resetBook();

  ngOnChanges() {
     if (this.selectedBook) {
      this.book = { ...this.selectedBook }; // Crée une copie
    } else {
      this.book = this.resetBook(); // Réinitialise si selectedBook est null
    }
  }

  resetBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: false,
      stock: 0
    };
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    if (this.selectedBook && this.book.id > 0) {
      console.log('Emitting book update:', this.book);
      this.bookUpdated.emit({ ...this.book });
    } else {
      console.log('Emitting book add:', this.book);
      this.bookAdded.emit({ ...this.book });
    }

    if (!this.selectedBook) {
      form.resetForm();
      this.book = this.resetBook();
    }
  }
}
