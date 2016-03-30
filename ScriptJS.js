// SCRIPTS MAISON

// Fonction qui va concaténer les deux valeurs sélectionnées pour donner le nom complet à chercher
function concat() {
	var nomComplet = document.getElementById("SelectReunion").value+document.getElementById("Session").value;
	document.getElementById("para").innerHTML = "Votre réunion : " + nomComplet;
	}
	
