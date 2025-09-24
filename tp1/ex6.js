class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }

    
    getMention() {
        if (this.note >= 16) return "Très bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "Échec";
    }
}

const etudiant1 = new Etudiant("Emna", 17);
const etudiant2 = new Etudiant("Mohamed", 13);
const etudiant3 = new Etudiant("Adem", 9);


console.log(`${etudiant1.nom} : ${etudiant1.getMention()}`); 
console.log(`${etudiant2.nom} : ${etudiant2.getMention()}`); 
console.log(`${etudiant3.nom} : ${etudiant3.getMention()}`); 
