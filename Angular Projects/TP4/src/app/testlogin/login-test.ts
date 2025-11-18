import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-login-test',
  imports: [CommonModule,FormsModule],
  templateUrl: './login-test.html',
  styleUrl: './login-test.css',
})
export class LoginTest {
   isLoggedIn=false;
   inputName = '';
   nom = 'Emna';
    
  login() {
    if (this.inputName === this.nom) {
      this.isLoggedIn = true;
    } else {
      alert("Le nom est incorrect. Veuillez réessayez !");
    }
  }
   afficher(){
    console.log("Bienvenue, utilisateur!");

   }

}