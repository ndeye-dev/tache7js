
// Écrire un script qui demande à l’utilisateur d’ajouter un nombre n. Calculer  le modulo de ce nombre par 4 
// et afficher le résultat dans une phrase comme suit:"Si l'on divise 21 par 4 , le reste est de 1"

function calculModulo(){
let n = parseInt(prompt("Entrez un nombre :"));

let reste = n % 4;
if (!isNaN(n)) {
    
    alert(`Si l'on divise ${n} par 4, le reste est de ${reste}.`);
} else {
    alert("Veuillez entrer un nombre valide.");
}
}
calculModulo();
