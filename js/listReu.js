    function afficherInformationBase(r) {
        var infos = JSON.parse(r.response).statements;
        console.log(JSON.parse(r.response).statements);
        
        var descr = "";
        var name = "";
        for(var i in infos) {
            descr = infos[i]['object']['definition']['description']['und'];
            name = infos[i]['object']['definition']['name']['und'];
            if (name == "nom") {
                document.getElementById("list").innerHTML += "<br><a href=\"#\" onclick=\"afficherPageReu('"+descr+"')\">"+descr+"</a>";
            }
        }
    }
    
    function getStatementsInfo(){
            
        var nomReu = "ES2002d";
		
		var conf = {
            "endpoint" : "https://cloud.scorm.com/tc/0O6GMM7KOI/sandbox/",
            "user" : "vincentglize@hotmail.fr",
            "password" : "iutbay64",
            "allowFail" : "False"
            };
								
        //Login
		ADL.XAPIWrapper.changeConfig(conf);
				
		//Get statements
        var myparams = ADL.XAPIWrapper.searchParams();
        myparams['activity'] = "http://projet10.fr/activity/information/";
        //myparams['verb']['display'] = "information"; 
		var ret = ADL.XAPIWrapper.getStatements(myparams, "", function(r) { afficherInformationBase(r); });				
	}
    
    function init() {
        getStatementsInfo();
    }