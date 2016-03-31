function afficherGraphiqueTempsRole() {
			console.log(window["NeutralA"]);
			var listActeurs="ABCD";
			var color = 10;
			for (var i=0; i<listActeurs.length; i++) {
				 window["barChartData"+listActeurs.charAt(i)] = {
					labels : ["Protagonist","Supporter","Neutral","Gatekeeper"],
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,0.8)",
							highlightFill: "rgba(220,220,220,0.75)",
							highlightStroke: "rgba(220,220,220,1)",
							data : [window["Protagonist"+listActeurs.charAt(i)],window["Supporter"+listActeurs.charAt(i)],window["Neutral"+listActeurs.charAt(i)],window["Gatekeeper"+listActeurs.charAt(i)]]
						}
					]
				}
				
				console.log(window["Protagonist"+listActeurs.charAt(i)] + " "
							+ window["Supporter"+listActeurs.charAt(i)]
							+ " " + window["Neutral"+listActeurs.charAt(i)]
							+ " " + window["Gatekeeper"+listActeurs.charAt(i)]);
			 
			}
			initGraphique();
		}
        
        function afficherPhrases(r) {
            var phrases = JSON.parse(r.response).statements;
            var descr = "";
            var name = "";
            var acteur = "";
            var dialogue = "";
            console.log("PHRASES ************************" + phrases.length);
            for (i=phrases.length-1; i >= 0 ; i--) {
                descr = phrases[i]['object']['definition']['description']['und'];
                name = phrases[i]['object']['definition']['name']['und'];
                acteur = phrases[i]['actor']['name'];
                
                dialogue += "<strong>" + acteur + "</strong> : " + name + "<br>";
            }
            document.getElementById("dialogue").innerHTML = dialogue;   
            ADL.XAPIWrapper.log(phrases);
        }
        function afficherInformation(r) {
            var infos = JSON.parse(r.response).statements;
            
            var descr = "";
            var name = "";
            
            for(var i in infos) {
                descr = infos[i]['object']['definition']['description']['und'];
                name = infos[i]['object']['definition']['name']['und'];
                
                document.getElementById(name).innerHTML = descr;   
            }
            
            ADL.XAPIWrapper.log(infos);
        }
        function afficherTempsRole(r) {
            var role = JSON.parse(r.response).statements;
            var descr = "";
            var name = "";
            var acteur = "";
			
			var listActeurs="ABCD";
			for (var i=0; i<listActeurs.length; i++) {
				window["Supporter"+listActeurs.charAt(i)] = 0;
				window["Neutral"+listActeurs.charAt(i)] = 0;
				window["Protagonist"+listActeurs.charAt(i)] = 0;
				window["Gatekeeper"+listActeurs.charAt(i)] = 0;
			}
            
            for (var i in role) {
                descr = role[i]['object']['definition']['description']['und'];
                name = role[i]['object']['definition']['name']['und'];
                acteur = role[i]['actor']['name'];
                
				window[name+acteur] = descr;
				
                document.getElementById(name+acteur).innerHTML = "<strong>"+ acteur + " : " + name + "</strong> pendant <strong>"
                                                            + descr + "</strong> sc"; 
            }
			
			
			afficherGraphiqueTempsRole();
			
			
            ADL.XAPIWrapper.log(JSON.parse(r.response).statements);
        }
        function afficherRole(r) {
            var roles = JSON.parse(r.response).statements;
            //roles = JSON.parse(roles);
          /*  console.log("Le membre : " + roles[0]['actor']['name'] + " a été " // membre
                        + roles[0]['object']['definition']['name']['und'] // role
                        + "Pendant " + roles[0]['object']['definition']['description']['und'] + "sc");  // nb sec
            ADL.XAPIWrapper.log(roles); */
        }
		
		function getStatements(name){
            
            var nomReu = name;
		
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
                myparams['verb'] = "http://projet10.fr/verbs/information/"+nomReu;
				var ret = ADL.XAPIWrapper.getStatements(myparams, "", function(r) { afficherInformation(r); });				
                //var infoReu = ret.statements;
                
                myparams = ADL.XAPIWrapper.searchParams();
                myparams['verb'] = "http://projet10.fr/verbs/temps_role/"+nomReu;
				ret = ADL.XAPIWrapper.getStatements(myparams, "", function(r) { afficherTempsRole(r); });				
                //var temps_roles = ret.statements;
                
                myparams = ADL.XAPIWrapper.searchParams();
                myparams['verb'] = "http://projet10.fr/verbs/role/"+nomReu;
				rret = ADL.XAPIWrapper.getStatements(myparams, "", function(r) { afficherRole(r); });				
                //var roles = ret.statements;
                
                myparams = ADL.XAPIWrapper.searchParams();
                myparams['verb'] = "http://projet10.fr/verbs/phrase/"+nomReu;
				myparams['order'] = "DESC";
				ret = ADL.XAPIWrapper.getStatements(myparams, "", function(r) { afficherPhrases(r); });				
                
		}
		
		function changeColor(mybar) {
            myBar.datasets[0].bars[0].fillColor = "red"; //bar 1
		    myBar.datasets[0].bars[1].fillColor = "blue"; //bar 2
			myBar.datasets[0].bars[2].fillColor = "green"; //bar 3
			myBar.datasets[0].bars[3].fillColor = "orange"; //bar 3
			myBar.update();
        }
		
		
		function initGraphique() {
			var ctx = document.getElementById("canvasA").getContext("2d");
			var barChartDataA = window["barChartDataA"];
			window.myBar = new Chart(ctx).Bar(window["barChartDataA"], {
				responsive : true
			});
			
			changeColor(myBar);
			
			var ctx = document.getElementById("canvasB").getContext("2d");
			window.myBar = new Chart(ctx).Bar(window["barChartDataB"], {
				responsive : true
			});
			changeColor(myBar);
			
			var ctx = document.getElementById("canvasC").getContext("2d");
			window.myBar = new Chart(ctx).Bar(window["barChartDataC"], {
				responsive : true
			});
			changeColor(myBar);
			
			var ctx = document.getElementById("canvasD").getContext("2d");
			window.myBar = new Chart(ctx).Bar(window["barChartDataD"], {
				responsive : true
			});
			
			changeColor(myBar);
		}
        
        function afficherPageReu(name) {
             document.getElementById("pageList").style.visibility="hidden";
             document.getElementById("pageReu").style.visibility="visible";
            getStatements(name);
            console.log("AFFICHAGE " + name);
        }
		/*function init()
		{				
				getStatements();
				//initGraphique();
		}*/