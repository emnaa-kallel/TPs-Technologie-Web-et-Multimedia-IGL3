const notes = [12, 5, 17, 9, 20];
const somme = notes.reduce((acc, note) => acc + note, 0);
const moyenne = somme / notes.length;
console.log("Moyenne :", moyenne); 


const notesDecroissant = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant :", notesDecroissant); 

const notesSup10 = notes.filter(note => note >= 10);
console.log("Notes ≥ 10 :", notesSup10); 

