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
function enregistrer() {

    var formFilm = new FormData(document.getElementById('contenuParticpants'));
    formFilm.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function ajouterParticipant() {

    var formParticpants = new FormData(document.getElementById('contenuParticpants'));
    //var formParticpants = $("#ajouterParticipant").serialize();
    //formParticpants.push({"action":"enregistrer"}); 
    
    formParticpants.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formParticpants,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function lister() {
    var formFilm = new FormData();
    formFilm.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);
        },
        fail: function (err) {
        }
    });
}

function afficherFormulaire() {
    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'afficherFormulaireTous');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm, //leForm.serialize(),
        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            //alert(reponse);
            filmsVue(reponse);

        },
        fail: function (err) {
        }
    });
    //	var formFilm = new FormData();
//	formFilm.append('action','afficherFormulaires');//alert(formFilm.get("action"));
//	$.ajax({
//		type : 'POST',
//		url : 'participants/participantsControleur.php',
//		data : formFilm,
//		contentType : false,
//		processData : false,
//		dataType : 'json', //text pour le voir en format de string
//		success : function (reponse){//alert(reponse);
//					filmsVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
        
         // alert("participant clic");
}

function supprimerParticipant() {

    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'supprimerParticipant');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm, //leForm.serialize(),
        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);

        },
        fail: function (err) {
        }
    });
}

function detailParticipant() {
    
    $('#divFiche').hide();
    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'detail');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);
            $('select').hide();
            $("input[type=text][id=nomParticipant]").val(reponse.detailParticipant.nom);
            $("input[type=text][id=prenomParticipant]").val(reponse.detailParticipant.prenom);
            $("input[type=text][id=courielParticipant]").val(reponse.detailParticipant.courriel);
            $("input[type=text][id=telPostalParticipant]").val(reponse.detailParticipant.tel);
            $("input[type=text][id=villeParticipant]").val(reponse.detailadresse.ville);
            $("input[type=text][id=codePostalParticipant]").val(reponse.detailadresse.codePostale);
            
            $('#labelSexe').text("Sexe : "+reponse.detailParticipant.sexe);
            $('#labelPays').text("Pays : "+reponse.detailadresse.pays);
            //$("input[type=text][id=paysParticipant]").val(reponse.detailadresse.pays);
            $("input[type=text][id=numeroPasseport]").val(reponse.detailPasseport.numeroPass);
            $("input[type=text][id=dateDelPasseport]").val(reponse.detailPasseport.dateDelivPass);
            $("input[type=text][id=dateExpPasseport]").val(reponse.detailPasseport.dateExpiration);
            $("input[type=text][id=nationalite]").val(reponse.detailPasseport.nationalites);
            $("input[type=text][id=delivrerAExpPasseport]").val(reponse.detailPasseport.lieuDeliv);
        },
        fail: function (err) {
        }
    });
}

function modifierParticipant() {
    var leForm = document.getElementById('formFicheF');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'modifier');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {//alert(reponse);
            $('#divFormFiche').hide();
            filmsVue(reponse);
        },
        fail: function (err) {
        }
    });
}

function obtenirFicheParticipant(){
    
    
}

//function afficherFormulaireParticipant() {
//   
//    var leForm = document.getElementById('formreservation');
//    var formFilm = new FormData(leForm);
//    formFilm.append('action', 'afficherFormulaireTous');//alert(formFilm.get("action"));
//    $.ajax({
//        type: 'POST',
//        url: 'participants/participantsControleur.php',
//        data: formFilm, //leForm.serialize(),
//        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
//        processData: false,
//        dataType: 'json', //text pour le voir en format de string
//        success: function (reponse) {
//            //alert(reponse);
//            filmsVue(reponse);
//
//        },
//        fail: function (err) {
//        }
//    });
//}
