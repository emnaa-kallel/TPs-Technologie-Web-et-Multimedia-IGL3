import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList {

  @Input() books: Book[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Book>();
  trackByBookId(index: number, book: Book): number {
  return book.id;
  }
  
}
