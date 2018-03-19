var perso = {
  nom : "Thoai",
  sante : 150,
  force : 25,

  decrire : function(){
    var description = this.nom + " a " + this.sante + " points de sante et " + this.force + " points de force";
    return description;
  }
}

console.log(perso.decrire());

perso.sante = perso.sante - 20;
perso.force = perso.force + 10;

console.log(perso.decrire());