

function eleveNote(){ 
    
let nombreNotes = parseInt(prompt("Entrez le nombre de notes :"));

if (isNaN(nombreNotes) || nombreNotes <= 0) {
    alert("Entrez un nombre entier positif.");
} else {
    let notes = [];

    for (let i = 0; i < nombreNotes; i++) {
        let note = parseInt(prompt("Entrez la note de l'élève " + (i + 1) + " :"));
        notes.push(note);
    }

    // Calculer la moyenne des notes avec la methode .reduce()
    let somme = notes.reduce((acc, curr) => acc + curr, 0);
    let moyenne = somme / notes.length;


    // pour obtenir un nouveau tableau contenant uniquement les notes supérieures à la moyenne
    let nombreElevesAuDessusMoyenne = notes.filter(note => note > moyenne).length;

    console.log("Les notes sont : " + notes);
    console.log("La moyenne de la classe est : " + moyenne);
    console.log("Nombre d'élèves ayant une note supérieure à la moyenne : " + nombreElevesAuDessusMoyenne);


    document.write("Les notes sont : " + notes);
    document.write("<br>")
    document.write("La moyenne de la classe est : " + moyenne.toFixed());
    document.write("<br>")
    document.write("Nombre d'élèves ayant une note supérieure à la moyenne : " + nombreElevesAuDessusMoyenne);

}
}

eleveNote();