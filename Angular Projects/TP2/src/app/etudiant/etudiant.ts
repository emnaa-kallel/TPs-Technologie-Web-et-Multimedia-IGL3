import { Component ,OnInit} from '@angular/core';
import { Student } from './TypeStudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-etudiant',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant  implements OnInit{
    /*listeEtudiants: Student[]=
    [
      { id: 1, name: 'Alice', lastname: 'Dupont', average: 15, classe: 'IGL3' },
      { id: 2, name: 'Bob', lastname: 'Martin', average: 12, classe: 'IGL4' },
      { id: 3, name: 'Charlie', lastname: 'Durand', average: 17}
    ] ;*/
    etudiant: Student = {
    id: 1,
    name: 'Emna',
    lastname: 'Kallel',
    average: 17,
    classe: 'IGL3'
  };
   constructor() {  
  } 
  ngOnInit(): void { 
  } 
  
}
