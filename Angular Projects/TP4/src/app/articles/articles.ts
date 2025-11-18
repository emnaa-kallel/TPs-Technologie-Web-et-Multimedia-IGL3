import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [CommonModule,FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles=[
    {
  titre: "Services et Injection de Dépendances",
  contenu: "Les services Angular permettent de partager des données et des fonctions entre composants, grâce à l'injection de dépendances.",
  importance: 'élevée'
},
    {
  titre: "Formulaires",
  contenu: "Angular propose des formulaires réactifs et template-driven pour gérer les entrées utilisateur de façon dynamique.",
  importance: 'faible'
},
  ];
   // Champs pour ajouter un article
  newTitle = "";
  newContent = "";
  newImportance = "moyenne"; // valeur par défaut
  addArticle() {
    if (this.newTitle.trim() !== "" && this.newContent.trim() !== "") {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
   
      // Effacer les champs après ajout
      this.newTitle = "";
      this.newContent = "";
      this.newImportance = "moyenne";
    } else {
      alert("Veuillez remplir le titre et le contenu !");
    }
  }


}