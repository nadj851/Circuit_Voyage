//requ�tes RESERVATION
function enregistrerR() {
    var formreservation = new FormData(document.getElementById('formEnrReserv'));
    formreservation.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formreservation,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            reservationVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function listerRR() {
    var formreservation = new FormData();
    formreservation.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formreservation,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            reservationVue(reponse);
        },
        fail: function (err) {
        }
    });
}

/*function enlever(){
 var leForm=document.getElementById('formEnleverThem');
 var formthem = new FormData(leForm);
 formthem.append('action','enlever');//alert(formFilm.get("action"));
 $.ajax({
 type : 'POST',
 url : 'Thematique/ThematiqueControleur.php',
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
 url : 'Thematique/ThematiqueControleur.php',
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
 url : 'Thematique/ThematiqueControleur.php',
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


function FormulaireR() {
    var reponse = {"action": "formulaire"};
    reservationVue(reponse);

    var textLab = parseInt(prixReservation);
    
    var total = 0;
    $('#NombreAdulte').on('change', function () {
        var selectVal = parseInt($("#NombreAdulte option:selected").val());
        if (selectVal !== 0) {
            total += selectVal * textLab;
            $("#labtotal").text(total);
             $("#amount").val(total);
             prixReservation+=total;
            
        } else {
            $("#labtotal").text(textLab);
             $("#amount").val(textLab);
             prixReservation+=total;
        }

    });

    $('#NombreEnfant').on('change', function () {
        var selectVal = parseInt($("#NombreEnfant option:selected").val());

        if (selectVal !== 0)
        {
            total += selectVal * textLab * 0.75;
            $("#labtotal").text(total);
             $("#amount").val(total);
            
        } else {
            $("#labtotal").text(textLab);
             $("#amount").val(textLab);
        }


    });

    $('#NombreBebe').on('change', function () {
        var selectVal = parseInt($("#NombreBebe option:selected").val());

        if (selectVal !== 0)
        {
            total += selectVal * textLab * 0.5;
            $("#labtotal").text(total);
             $("#amount").val(total);
        } else {
            $("#labtotal").text(textLab);
               $("#amount").val(textLab);
            
        }

    });

}

//lister les participant
function listerParticipants() {
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


//information sur  user connecter
function infoUser() {
    var formFilm = new FormData();
    formFilm.append('action', 'infouser');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Utilisateur/UtilisateurControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            //reponse = JSON.parse(reponse);			//filmsVue(reponse);

            $("input[type=text][id=nomParticipant]").val(reponse.information[0].last_name);
            $("input[type=text][id=prenomParticipant]").val(reponse.information[0].first_name);
            $("input[type=text][id=courielParticipant]").val(reponse.information[0].email);
        },
        fail: function (err) {
        }
    });
}




//ramener circuit par identifiant 
function RamenerCircuit(rid) {
    var formcirc = new FormData();
    formcirc.append('action', "ramener");//alert(formFilm.get("action"));
    formcirc.append('idc', rid);
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formcirc,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) { //alert(reponse);

            $("#labtotal").html(reponse.circuitid[0].prix + " $");
             $("#amount").val(reponse.circuitid[0].prix);

        },
        fail: function (err) {
        }
    });
}

function prix(idSelect, textLab, taux) {

    var total = 0;
    $(idSelect).on('change', function () {

        var selectVal = parseInt($(idSelect + " option:selected").val());
        if (selectVal !== 0)
            total = selectVal * textLab * taux;
        

        else {
            total = textLab;
            $("#labtotal").text(textLab);
                 $("#amount").val(textLab);
           
        }


        // $("#labtotal").text(total);


    });
    return total;
}
