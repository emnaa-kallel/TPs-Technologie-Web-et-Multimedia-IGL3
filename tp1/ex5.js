const livre={
    titre:"Le Petit Prince",
    auteur:"Antoine de Saint-Exupéry",
    annee:1943,

    getInfo ()
    {
    return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}.`;
    }

};


console.log(livre.getInfo());