// step 1 : recup la liste :
var maListe = Liste;

 function upperFirst(string) {
 	return string.charAt(0).toUpperCase() + string.slice(1);
 }

var div=document.getElementById("texte")
 function button(item){
 	console.log(item);
 	document.location.href="teub.html?Nom=" +item.Nom
 //	div.innerHTML="<span>"+ item.Nom.toUpperCase() +" </br> "+ upperFirst(item.Prenom)+ "</span>" +" </br> "+ (item.Mail)+ "</span>";
 }

console.log(Liste);

// step 2 : trouver le bon container

var monUl = document.getElementById("ListeContainer");
console.log(monUl);

console.log(maListe.length);

// step 3 : parcourir les données et effectuer le traitement sur chaque getElement
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	monLi.onclick = function(){button(item)}

	monLi.innerHTML = "<span>"+ item.Nom.toUpperCase() +" "+ upperFirst(item.Prenom)+ "</span>";
	console.log(monLi);
	monUl.appendChild(monLi);

});

//option 2 (boucle), For
//for (var i = 0; i < maListe.length; i++) {

//	console.log(maListe[i].Nom);
//}

//step pour cliquer

