import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="center">
      <h2>Bienvenue au Quiz</h2>
      <p class="small">Répondez aux questions, gagnez des points, et comparez vos scores.</p>
      <div style="margin-top:16px;">
        <a routerLink="/game" class="btn-primary">Commencer le jeu</a>
      </div>
      <hr />
      <h3>Consignes</h3>
      <ul>
        <li>Chaque bonne réponse donne des points (par défaut +10).</li>
        <li>Chaque mauvaise réponse enlève des points (par défaut -5).</li>
        <li>Le bouton devient inactif après la réponse — impossible de répondre deux fois.</li>
        <li>Chaque question a un chronomètre (si le temps s'écoule, c'est compté comme incorrect).</li>
      </ul>
    </div>
  `
})
export class Home {}


