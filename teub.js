// step 1 : recup la liste :
var maListe = Liste;


// fonction qui recupere l'url
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
    }

//fonction qui met des majs
 function upperFirst(string) {
 	return string.charAt(0).toUpperCase() + string.slice(1);
 }

//recuperation de la liste
 var monUl = document.getElementById("ListeContainer");
console.log(monUl);

maListe.forEach(function(item) {
	var monLi = document.createElement('li');

//creation d'une variable Nom qui va chercher dans l'url en fonction de la function tout en haut
var Nom=findGetParameter("Nom")
console.log(Nom)


// donc si le Nom (de l'url) est egale a un item.nom pris de la Liste, il va seulement afficher les donnée ci dessous
if (Nom==item.Nom){

var div=document.getElementById("texte")
div.innerHTML="<span>"+ item.Nom.toUpperCase() +" </br> "+ upperFirst(item.Prenom)+ "</span>" +" </br> "+ (item.Mail)+ "</span>";
 }

});







//l'affichage de la description
// div.innerHTML="<span>"+ item.Nom.toUpperCase() +" </br> "+ upperFirst(item.Prenom)+ "</span>" +" </br> "+ (item.Mail)+ "</span>";
