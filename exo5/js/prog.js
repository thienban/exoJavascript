var prenom = prompt("Rentrer le 1er nombre");
var nom = prompt("Rentrer le 2er nombre");

// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(direBonjour(prenom, nom));
// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat