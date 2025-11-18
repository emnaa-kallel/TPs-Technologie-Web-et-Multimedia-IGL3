import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-tache',
  imports: [CommonModule],
  templateUrl: './gestion-tache.html',
  styleUrl: './gestion-tache.css',
})
export class GestionTache {
   taches = [
    { description: 'Préparer la présentation', completee: false, priorite: 'basse' },
    { description: 'Envoyer des emails', completee: true, priorite: 'moyenne' },
    { description: 'Préparer les tests', completee: false, priorite: 'haute' },
  ];

  toggleStatut(tache: any) {
    tache.completee = !tache.completee;
  }



}