function initServ() // Fonction d'initialisation du serveur 
	{
	  var conf = { 								// variable configurant les paramètres de connexion
	"endpoint" : "https://cloud.scorm.com/tc/0O6GMM7KOI/sandbox/", 	// endpoint : notre serveur
	"user" : "vincentglize@hotmail.fr", 							// utilisateur
	"password" : "iutbay64", 										// mot de passe
	"allowFail" : "False" ,											// empêche les "échecs silencieux" utile surtout en cas de multi-serveurs
	};
	
	ADL.XAPIWrapper.changeConfig(conf); // changement de la config
	alert(ADL.XAPIWrapper.testConfig()) // alert pour vérifier si la config a bien été changée (true/false)
	}
	
	var ret = ADL.XAPIWrapper.getStatements();
if (ret)
   ADL.XAPIWrapper.log(ret.statements);
	//var search = ADL.XAPIWrapper.searchParams();
	//search['limit'] = 499;
	//var ret = ADL.XAPIWrapper.getStatements(search);
	
	// var ret = ADL.XAPIWrapper.getStatements(); // procédure de récupération des mots des statements
	unStat = ret.statements;
