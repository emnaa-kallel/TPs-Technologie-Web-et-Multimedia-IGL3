import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  produit=[
    { nom: 'Clavier', stock: 60 },
    { nom: 'Souris Gaming', stock: 20 },
    { nom: 'Casque audio', stock: 15 },
    { nom: 'Ordinateur Portable', stock: 17 }

  ]

}