////requ�tes RESERVATION
function AjouterCircuit() {
    var formCircuit = new FormData(document.getElementById('contenuCircuit'));
    formCircuit.append('action', 'enregistrerCircuit');
    $.ajax({
        type: 'POST',
        url: 'Circuit/CircuitControleur.php',
        data: formCircuit,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            CircuitVue(reponse);
        },
        fail: function (err) {

        }
    });
}
//
//function listerRR(){
//	var formreservation = new FormData();
//	formreservation.append('action','lister');//alert(formFilm.get("action"));
//	$.ajax({
//		type : 'POST',
//		url : 'Reservation/ReservationControleur.php',
//		data : formreservation,
//		contentType : false,
//		processData : false,
//		dataType : 'json', //text pour le voir en format de string
//		success : function (reponse){//alert(reponse);
//					reservationVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}
//
///*function enlever(){
//	var leForm=document.getElementById('formEnleverThem');
//	var formthem = new FormData(leForm);
//	formthem.append('action','enlever');//alert(formFilm.get("action"));
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formthem,//leForm.serialize(),
//		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
//		processData : false,
//		dataType : 'json', //text pour le voir en format de string
//		success : function (reponse){//alert(reponse);
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}
//
//function obtenirFiche(){
//	$('#divFiche').hide();
//	var leForm=document.getElementById('formFiche');
//	var formFilm = new FormData(leForm);
//	formFilm.append('action','fiche');
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formFilm,
//		contentType : false, 
//		processData : false,
//		dataType : 'json', 
//		success : function (reponse){//alert(reponse);
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}
//
//function modifier(){
//	var leForm=document.getElementById('formFicheT');
//	var formthem = new FormData(leForm);
//	formthem.append('action','modifier');
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formthem,
//		contentType : false, 
//		processData : false,
//		dataType : 'json', 
//		success : function (reponse){//alert(reponse);
//					$('#divFormFiche').hide();
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}*/
///////////////////////////
//
//
//function FormulaireR(){
//        var reponse={"action":"formulaire"};
//        	reservationVue(reponse);
//	
//}

//lister les participant
function FormulaireCircuit() {
    var formFilm = new FormData();
    formFilm.append('action','lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            //alert(reponse);
            CircuitVue(reponse);
        },
        fail: function (err) {
        }
    });
}

