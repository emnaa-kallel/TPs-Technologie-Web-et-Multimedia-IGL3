//1. Déclare une variable name de type string, age de type number, et isAdmin de type boolean.
let name :string;
let age :number;
let isAdmin : boolean;

//2. Crée un tableau scores contenant uniquement des nombres.
let scores :number[];

//3. Crée un tuple [string, number] pour représenter un étudiant.
let etudiant :[string, number];

//4. Crée un enum Role { User, Admin, SuperAdmin } et affecte-lui une valeur.
enum Role {
  User,       // 0
  Admin,      // 1
  SuperAdmin  // 2
}

let monRole: Role = Role.Admin;
console.log(monRole); 
//Les enums en TypeScript assignent automatiquement des valeurs numériques par défaut (0, 1, 2…).