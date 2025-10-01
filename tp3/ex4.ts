//1. Crée une interface User avec les propriétés id: number, name: string, email?: string (optionnelle), et isAdmin: boolean en lecture seule.
interface User{
    id:number;
    name:string;
    email?:string; // optionnelle
    readonly isAdmin:boolean;  // lecture seule
}

//2. Crée un objet user1 conforme à cette interface.
const user1 :User={
    id:1,
    name:"Emna",
    email:"emna.kallel@etudiant-fst.utm.tn",
    isAdmin:true
};
console.log(user1);

//3. Crée une interface Admin qui hérite de User et ajoute une propriété permissions: string[].
interface Admin extends  User{
    permissions: string[];
}

// Exemple d’objet Admin
const admin1: Admin = {
  id: 2,
  name: "Bob",
  isAdmin: true,
  permissions: ["read", "write", "delete"]
};
console.log(admin1);