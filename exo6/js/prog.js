var mot = prompt("Rentrer un mot");
var longeurMot= mot.length;

// Renvoie un message de bienvenue
function direBonjour(mot) {
    var motMajuscule = mot.toUpperCase();
    var message = "Il a "+ longeurMot +" \n Il s'ecrit en minuscule " + mot +"\n" + " il s'ecrit en majuscule " + motMajuscule ;
    return message;
}

function compter(mot){
    var voyelle =0;
    for(var i = 0;i< mot.length; i++){
        var lettre = mot[i].toLowerCase();
        if((lettre === 'a') || (lettre==='e')|| (lettre==='i') || (lettre==='o') || (lettre==='u') || (lettre==='y') ){
            voyelle++;
        }
    }
    return voyelle;
}

console.log(direBonjour(mot));

var nbVoyelle = compter(mot);
console.log("Il contient " + nbVoyelle + " voyelles " + (longeurMot - nbVoyelle) + " consonnes");