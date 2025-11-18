// Déclaration de variables de différents types
var nom = "Emna";
var age = 21;
var estEtudiant = true;
// Fonction typée
function somme(a, b) {
    return a + b;
}
console.log("Somme =", somme(5, 10));
// Classe implémentant l'interface
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficherInfos = function () {
        console.log("ID: ".concat(this.id, ", Nom: ").concat(this.nom, ", Pr\u00E9nom: ").concat(this.prenom, ", \u00C2ge: ").concat(this.age));
    };
    return EtudiantImpl;
}());
var etu1 = new EtudiantImpl(1, "Kallel", "Emna", 21);
etu1.afficherInfos();
// Fonction générique
function creerTableau(elements) {
    return elements;
}
console.log(creerTableau([1, 2, 3]));
console.log(creerTableau(["Angular", "React", "Vue"]));
// Union de types et types optionnels
function afficherMessage(message, prefix) {
    console.log("".concat(prefix !== null && prefix !== void 0 ? prefix : "Message", ": ").concat(message));
}
afficherMessage("Bonjour");
afficherMessage(404, "Erreur");
// Enumération
var Role;
(function (Role) {
    Role["Admin"] = "Administrateur";
    Role["Etudiant"] = "\u00C9tudiant";
    Role["Enseignant"] = "Enseignant";
})(Role || (Role = {}));
var userRole = Role.Etudiant;
console.log("Rôle utilisateur :", userRole);
