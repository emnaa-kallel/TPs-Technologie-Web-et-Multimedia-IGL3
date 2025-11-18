// Déclaration de variables de différents types
let nom: string = "Emna";
let age: number = 21;
let estEtudiant: boolean = true;

// Fonction typée
function somme(a: number, b: number): number {
  return a + b;
}
console.log("Somme =", somme(5, 10));

// Interface Etudiant
interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
}

// Classe implémentant l'interface
class EtudiantImpl implements Etudiant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age: number
  ) {}

  afficherInfos(): void {
    console.log(`ID: ${this.id}, Nom: ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}`);
  }
}

const etu1 = new EtudiantImpl(1, "Kallel", "Emna", 21);
etu1.afficherInfos();

// Fonction générique
//Les génériques permettent de réutiliser une fonction avec différents types
function creerTableau<T>(elements: T[]): T[] {
  return elements;
}
console.log(creerTableau<number>([1, 2, 3]));
console.log(creerTableau<string>(["Angular", "React", "Vue"]));

// Union de types et types optionnels
//Les unions de types rendent le code plus flexible (string | number)
//Les types optionnels (prefix?) ne sont pas obligatoires.
function afficherMessage(message: string | number, prefix?: string): void {
  console.log(`${prefix ?? "Message"}: ${message}`);
}
afficherMessage("Bonjour");
afficherMessage(404, "Erreur");

// Enumération
//Les énumérations (enum) servent à représenter des constantes nommées.
enum Role {
  Admin = "Administrateur",
  Etudiant = "Étudiant",
  Enseignant = "Enseignant"
}

let userRole: Role = Role.Etudiant;
console.log("Rôle utilisateur :", userRole);

