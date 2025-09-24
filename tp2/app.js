var tasks = []; 
console.log("Bienvenue dans votre application de gestion de tâches !"); 



function afficherlisteTache() {
    const liste = document.getElementById("taskList");
    liste.innerHTML = "";
    const filtre = document.getElementById("filtrer").value;

    /*Etape 10 */
    let nbtaskencours=0;
    let nbtaskterminees=0;
    tasks.forEach((task, index) => {
        if (task.status === "Terminée") nbtaskterminees++;
        else if (task.status === "en cours") nbtaskencours++;
        if (filtre !== "toute" && task.status !== filtre) return;
        const li = document.createElement("li");
        li.setAttribute("dataind", index);
        li.classList.add("task-item");
        /*Etape 5 */
        const span = document.createElement("span");
        span.textContent = task.content;
        if (task.status === "Terminée") span.style.textDecoration = "line-through";
        /*Etape 5 */
        const terminerbtn = document.createElement("button");
        terminerbtn.textContent = task.status;
        terminerbtn.classList.add("btn", "btn-complete");
        terminerbtn.addEventListener("click", () => terminerTache(li));
        /*Etape 5 */
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Supprimer";
        deletebtn.classList.add("btn", "btn-delete");
        deletebtn.addEventListener("click", () => supprimerTache(li));

        li.appendChild(span);
        li.appendChild(terminerbtn);
        li.appendChild(deletebtn);
        liste.appendChild(li);
    });
    const etatTache = document.getElementById("etatTache");
    etatTache.textContent = `Terminée(s): ${nbtaskterminees}, En cours: ${nbtaskencours}`;
}

/*Etape 6 */
function ajouterTache() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;
    const task = {
        content: input.value,
        status: "en cours"
    };
    tasks.push(task);
    input.value = "";
    afficherlisteTache();
    sauvegarderLocalStorage();
}

/*Etape 6 */
function supprimerTache(tache) {
    const index = parseInt(tache.getAttribute("dataind"));
    tasks.splice(index, 1);
    afficherlisteTache();
    sauvegarderLocalStorage();
}

/*Etape 6 */
function terminerTache(tache) {
    const index = parseInt(tache.getAttribute("dataind"));
    tasks[index].status = "Terminée";
    afficherlisteTache();
    sauvegarderLocalStorage();
}

/*Etape 10 */
function toutSupprimer() {
    tasks = [];
    afficherlisteTache();
    sauvegarderLocalStorage();
}
/*Etape 9*/ 
function sauvegarderLocalStorage() {
    localStorage.setItem("todolist", JSON.stringify(tasks));
}
/*Etape 9*/ 
function chargerLocalStorage() {
    const data = localStorage.getItem("todolist");
    if (data) {
        tasks = JSON.parse(data); 
        afficherlisteTache();
    }
}
/*Etape 9*/ 
window.addEventListener("load", () => {
    chargerLocalStorage();
});