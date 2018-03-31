//requ�tes films
function message(reponse) {
    var mes = "";

    mes += "<div class='alert alert-success'>";
    mes += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    mes += "<b>" + reponse + "</b>";
    mes += "</div>";
    $('#messages').html(mes);
    setTimeout(function () {
        $('#messages').html("");
    }, 5000);

}
function enregistrer(){
    
	var formFilm = new FormData(document.getElementById('formEnreg'));
	formFilm.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function ajouterParticipant(){
    
	var formParticpants = new FormData(document.getElementById('contenuParticpants'));
	//var formParticpants = $("#ajouterParticipant").serialize();
        //formParticpants.push({"action":"enregistrer"}); 
           formParticpants.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formParticpants,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function lister(){
	var formFilm = new FormData();
	formFilm.append('action','lister');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
		},
		fail : function (err){
		}
	});
}

function afficherFormulaire(){
	var formFilm = new FormData();
	formFilm.append('action','afficherFormulaires');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
		},
		fail : function (err){
		}
	});
}

function supprimerParticipant(){
    
	var leForm=document.getElementById('formreservation');
	var formFilm = new FormData(leForm);
	formFilm.append('action','supprimerParticipant');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
                                        
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
		url : 'participants/participantsControleur.php',
		data : formFilm,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					filmsVue(reponse);
		},
		fail : function (err){
		}
	});
}

function modifier(){
	var leForm=document.getElementById('formFicheF');
	var formFilm = new FormData(leForm);
	formFilm.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					$('#divFormFiche').hide();
					filmsVue(reponse);
		},
		fail : function (err){
		}
	});
}

function afficherFormulaireParticipant(){
    alert("participant clic");
	var leForm=document.getElementById('formreservation');
	var formFilm = new FormData(leForm);
	formFilm.append('action','afficherFormulaireTous');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'participants/participantsControleur.php',
		data : formFilm,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'text', //text pour le voir en format de string
		success : function (reponse){alert(reponse);
					//filmsVue(reponse);
                                        
		},
		fail : function (err){
		}
	});
}
