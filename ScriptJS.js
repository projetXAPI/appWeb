// SCRIPTS MAISON

function concat() {
	// Fonction qui va concaténer les deux valeurs sélectionnées pour donner le nom complet de la réunion à chercher
	var nomComplet = document.getElementById("SelectReunion").value+document.getElementById("Session").value;
	document.getElementById("para").innerHTML = "Votre réunion : " + nomComplet; // affichage dans le paragraphe
	}
	
	
function AfficherRoles(nomComplet){	
	// Récupération des statements pour y chercher ceux exprimant les rôles
	var search = ADL.XAPIWrapper.searchParams();
	var verbeRecherche = "temps_role_"+nomComplet;
	search['verb']['display']['und'] = verbeRecherche;
	var resRole = ADL.XAPIWrapper.getStatements(search);
	ADL.XAPIWrapper.log(resRole.statements);
	
}	
	
	/* EXTRAIT DOC DE CHARTS.JS : http://www.chartjs.org/docs/#bar-chart-example-usage
	var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
	*/
