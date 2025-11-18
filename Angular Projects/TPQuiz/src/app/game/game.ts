import { Component } from '@angular/core';
import { Question } from '../question/question';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [Question, CommonModule, RouterLink],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  score = 0;

  questions = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      answered: false,
      selected: ''
    },
    {
      question: 'Quelle est la capitale de l’Algerie ?',
      options: ['Alger', 'Tunis', 'Tanja'],
      reponse: 'Alger',
      answered: false,
      selected: ''
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu',
      answered: false,
      selected: ''
    },
    {
    question: "Quel monument célèbre se trouve sur l'image ?",
    options: ["Tour Eiffel", "Big Ben", "Colisée", "Taj Mahal"],
    reponse: "Tour Eiffel",
    image: "assets/toureiffel.jpg",
    answered: false,
    selected: ""
    },
    {
      question: "Quel véhicule est montré sur l'image ?",
      options: ["Moto", "Voiture", "Avion", "Train"],
      reponse: "Avion",
      image: "assets/avion.jpg",
      answered: false,
      selected: ""
    }
  ];

  onAnswered(event: { question: any; isCorrect: boolean }) {
    if (event.isCorrect) {
      this.score += 10;
    } else {
      this.score -= 5;
    }
  }
  constructor(private router: Router) {}
  goToScore() {
    this.router.navigate(['/score']);
  }

}