
// Écrire un script qui demande un nombre de départ, et qui calcule sa factorielle.

function calculFctorielle(){ 
let nombre = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
 
if (nombre < 0 || isNaN(nombre)) {
    document.getElementById("erreur").innerText = "Erreur : entrez un nombre valide.";
    
} else {
    
    let calcule = 1;
    for (let i = 1; i <= nombre; i++) {
        calcule = i * calcule;
    }

    document.write(`La factorielle de ${nombre} est : ${calcule}`);
}
}
calculFctorielle();

// function factorielle(n) {
// 	alert('Calcul factorielle => '+n);
// 	if (n == 0) return 1;
// 	else return n*factorielle(n-1);
// }
