//requ�tes thematique
/*function enregistrerT(){
	var formthematique = new FormData(document.getElementById('formEnregthems'));
	formthematique.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formthematique,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}
*/
function listerPanier(){
          $('#sommaire').html("le panier "); 
	var formpanier= new FormData();
	formpanier.append('action','listerP');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formpanier,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					panierVue(reponse);
                                       
		},
		fail : function (err){
		}
	});
        
        
}

/*function enlever(){
	var leForm=document.getElementById('formEnleverThem');
	var formthem = new FormData(leForm);
	formthem.append('action','enlever');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formthem,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}

function obtenirFiche(){
	$('#divFiche').hide();
	var leForm=document.getElementById('formFiche');
	var formFilm = new FormData(leForm);
	formFilm.append('action','fiche');
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formFilm,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}

function modifier(){
	var leForm=document.getElementById('formFicheT');
	var formthem = new FormData(leForm);
	formthem.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formthem,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					$('#divFormFiche').hide();
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}*/
/////////////////////////
/*function FormulaireT(){
        var reponse={"action":"formulaire"};
        	thematiqueVue(reponse);
	
}*/