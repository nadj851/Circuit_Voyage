function AfficherCircuits(idThem) {
    var formCircuit = new FormData(document.getElementById('contenuCircuit'));
    formCircuit.append('action', 'enregistrerCircuit');
    $.ajax({
        type: 'GET',
        url: 'Circuit/CircuitAPI.php?idThem=' + idThem,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse.affichageCircuits[0].idCircuit);
            //Affichage
            AffichageCircuit(reponse.affichageCircuits);
        },
        fail: function (err) {

        }
    });
}

function AffichageCircuit(affichageCircuits) {
    $('#get_result').html("");
    $('#sommaire').html("Tous les circuits");


    taille = affichageCircuits.length;
    var result = "";
    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-6'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + affichageCircuits[i].titre + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a name='afficherDetailsCircuit'  id='" + affichageCircuits[i].idCircuit + "' >	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:400px; height:400px;'></a>";
        result += "</div>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'> Description:</span>" + "<span style='font-size: 15px;color:black;'>" + affichageCircuits[i].description + "</span>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'> Prix: </span>" + "<span style='font-size: 15px;'>" + affichageCircuits[i].prix + " $</span>";
        result += "</div>";

        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);

    $("a[name=afficherDetailsCircuit]").click(function () {
        AfficherDetailsCircuit($(this).prop("id"));
        idCircuit=$(this).prop("id");
    });
}

function AfficherDetailsCircuit(idCircuit) {

    var formCircuit = new FormData(document.getElementById('contenuCircuit'));
    formCircuit.append('action', 'enregistrerCircuit');
    $.ajax({
        type: 'GET',
        url: 'Circuit/CircuitAPI.php?idCircuit=' + idCircuit,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse.affichageCircuits[0].idCircuit);
            //Affichage
            AffichageDetailsCircuit(reponse.affichageCircuits);
        },
        fail: function (err) {

        }
    });
}
var prixReservation;
function AffichageDetailsCircuit(affichageCircuits) {
    $('#get_result').html("");
    $('#sommaire').html("details circuits");

    var taille = affichageCircuits.length;
    var strVar = "";
    for (var i = 0; i < taille; i++) {

        var jour = showDays(affichageCircuits[i].dateDeRetour, affichageCircuits[i].dateDeDepart);
        strVar += "        <br \/>";
        strVar += "        <div>";
        strVar += "            <h2 align=\"center\">" + affichageCircuits[i].titre + "<\/h2>";
        strVar += "            <br \/>";
        strVar += "<div class='container'>";
        strVar += "<div class='row'>";

        strVar += "<div class='col-md-6'>";
        strVar += "<a>	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:450px; height:500px;'></a>";

        strVar += "";
        strVar += "";
        strVar += "                    <\/div>";

        strVar += "<div class='col-md-4'>";
        strVar += "            <table class=\"table table-condensed\" style=\"width: 450px; float:right; height: 500px; \">";
        strVar += "                <thead>";
        strVar += "                    <tr style=\" height: 30px\">";
        strVar += "                        <th style=\"background-color: #426CB4; color: white\">" + affichageCircuits[i].titre + "<\/th>";
        strVar += "                        <th style=\"background-color: #426CB4; color: white\"><\/th>";
        strVar += "                    <\/tr>";
        strVar += "                <\/thead>";
        strVar += "                <tbody>";
        strVar += "                    <tr style=\" height: 30px\">";
        strVar += "                        <td style=\"background-color: white; color: black\">Durée<\/td>";
        strVar += "                        <td style=\"background-color: #426CB4; color: white; width: 70px\">" + jour + " jours<\/td>";
        strVar += "";
        strVar += "                    <\/tr>";
        strVar += "                    <tr style=\" height: 30px\">";
        strVar += "                        <td style=\"background-color: white; color: black\">Tarifs<\/td>";
        strVar += "                        <td style=\"background-color: #426CB4; color: white\">" + affichageCircuits[i].prix + " $<\/td>";
        strVar += "                    <\/tr>";
        strVar += "                    <tr style=\" height: 30px\">";
        strVar += "                        <td style=\"background-color: white; color: black\">Infos<\/td>";
        strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
        strVar += "";
        strVar += "                    <\/tr>";
        strVar += "                    <tr>";
        strVar += "                        <td style=\"background-color: white; color: black\">" + affichageCircuits[i].description + "<\/td>";
        strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
        strVar += "                    <\/tr>";
        strVar += "";
        strVar += "                <\/tbody>";
        strVar += "            <\/table>";
        strVar += "";
        strVar += "";
        strVar += "";
        strVar += "                    <\/div>";
        strVar += "                    <\/div>";
        strVar += "                    <\/div>";

        strVar += "            <br \/>";
        strVar += "<div class='container'>";
        strVar += "<div class='row'>";
        strVar += "<div class='col-md-10'>";
        strVar += "                <div class=\"card text-center\" style=\"background-color: white; color: white;\">";
        strVar += "                    <div class=\"card-header\" style=\"background-color: #426CB4;color: white\">";
        strVar += "                        <ul class=\"nav nav-tabs card-header-tabs\">";
        strVar += "                            <li class=\"nav-item\" >";
        strVar += "                                <a class=\"nav-link active\" href=\"#\" style=\"color: white\" onclick=\"$('#suite').show();$('#hotel').hide();\">Itinéraire<\/a>";
        strVar += "                            <\/li>";
        strVar += "                            <li class=\"nav-item\">";
        strVar += "                                <a class=\"nav-link\" href=\"#\" style=\"color: white\" onclick=\"$('#suite').hide();$('#hotel').show();\">Hotels<\/a>";
        strVar += "                            <\/li>";
        strVar += "                            <li class=\"nav-item\">";
        strVar += "                                <a id='prixReservation' class=\"nav-link disabled\" href=\"#\" style=\"color: white\" onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit(" + affichageCircuits[i].idCircuit + ");'>Réservations<\/a>";
        strVar += "                            <\/li>";
        strVar += "                            <li class=\"nav-item\">";
        strVar += "                                <a class=\"nav-link btn btn-danger\" href=\"#\"  onclick='enregistrerPani();'>Ajouter au Panier<\/a>";
        strVar += "                            <\/li>";

        strVar += "                        <\/ul>";
        strVar += "                    <\/div>";
        strVar += "                    <div class=\"card-body\" id=\"suite\" style=\"background-color: cornflowerblue; color: white; \">";
        strVar += "                        <div class=\"card-header\">";
        strVar += "                            <ul class=\"nav nav-tabs card-header-tabs\">";
        strVar += "                                <li class=\"nav-item\" >";
        strVar += "                                    <a class=\"nav-link active\" href=\"#\" style=\"color: white\" >étape 1<\/a>";
        strVar += "                                <\/li>";
        strVar += "                                <li class=\"nav-item\">";
        strVar += "                                    <a class=\"nav-link\" href=\"#\" style=\"color: white\">étape 2<\/a>";
        strVar += "                                <\/li>";
        strVar += "                                <li class=\"nav-item\">";
        strVar += "                                    <a class=\"nav-link disabled\" href=\"#\" style=\"color: white\">étape 3<\/a>";
        strVar += "                                <\/li>";
        strVar += "                            <\/ul>";
        strVar += "                        <\/div>";
        strVar += "                    <\/div>";
        strVar += "                    <p id=\"hotel\"class=\"card-text\">With supporting text below as a natural lead-in to additional content.";
        strVar += "                        With supporting text below as a natural lead-in to additional content.";
        strVar += "                        With supporting text below as a natural lead-in to additional content.";
        strVar += "                        With supporting text below as a natural lead-in to additional content.";
        strVar += "                        With supporting text below as a natural lead-in to additional content.<\/p>";
        strVar += "                    <p id=\"lot\"class=\"card-text \" style=\"height: 150px; background-color: white\"><\/p>";
        strVar += "                    ";
        strVar += "";
        strVar += "";
        strVar += "                <\/div>";
        strVar += "            <\/div>";
        strVar += "                    <\/div>";
        strVar += "                    <\/div>";
        strVar += "                    <\/div>";
        strVar += " ";
        strVar += "";

        $('#get_result').html(strVar);
        prixReservation = affichageCircuits[i].prix;
       


        /* result += "<div class='col-md-12'>";
         result += "<div class='panel panel-success'>";
         result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>"+ affichageCircuits[i].titre + "</span></div>";
         result += "<div class='panel-body'>";
         result += "<a>	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:500px; height:500px;'></a>";
         result += "<div> Description: " + affichageCircuits[i].description + " <br></div>";
         result += "<div> Prix: " + affichageCircuits[i].prix + " <br></div>";
         result += "<a href='#' class='category btn btn-danger btn-xs' cid='ACTION'  class='' style='float:right;' onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit("+ affichageCircuits[i].idCircuit+ ");'>Reservation </a> ";
         result += "<a href='#' class='category btn btn-success btn-xs' cid='ACTION'  class='' style='float:right;' onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit("+ affichageCircuits[i].idCircuit+ ");'> Ajouter au Panier </a>";
         result += "</div>";
         result += "</div>";
         result += "</div>";
         //'"+  affichageCircuits[i].idCircuit +"'
         }
         $('#get_result').html(result);*/
    }
}


function showDays(firstDate, secondDate) {



    var startDay = new Date(firstDate);
    var endDay = new Date(secondDate);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.

    return Math.floor(days);

}
