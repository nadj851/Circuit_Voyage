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
        result += "<div> Description: " + affichageCircuits[i].description + " <br></div>";
        result += "<div> Prix: " + affichageCircuits[i].prix + " <br></div>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);

    $("a[name=afficherDetailsCircuit]").click(function () {
        AfficherDetailsCircuit($(this).prop("id"));
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

function AffichageDetailsCircuit(affichageCircuits) {
    $('#get_result').html("");
     $('#sommaire').html("details circuits");
        
    var taille = affichageCircuits.length;
    var strVar="";
    for (var i = 0; i < taille; i++) {        
        
strVar += "";
strVar += "        <br \/>";
strVar += "        <div>";
strVar += "            <h2 align=\"center\">Circuit de voyage Phuket<\/h2>";
strVar += "            <br \/>";
strVar += "<a>	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:460px; height:500px;'></a>";
strVar += "";
strVar += "";
strVar += "            <table class=\"table table-condensed\" style=\"width: 480px; float:right; height: 400px; \">";
strVar += "                <thead>";
strVar += "                    <tr style=\" height: 30px\">";
strVar += "                        <th style=\"background-color: #426CB4; color: white\">Phuket<\/th>";
strVar += "                        <th style=\"background-color: #426CB4; color: white\"><\/th>";
strVar += "                    <\/tr>";
strVar += "                <\/thead>";
strVar += "                <tbody>";
strVar += "                    <tr style=\" height: 30px\">";
strVar += "                        <td style=\"background-color: white; color: black\">Durée<\/td>";
strVar += "                        <td style=\"background-color: #426CB4; color: white; width: 70px\">7 jours<\/td>";
strVar += "";
strVar += "                    <\/tr>";
strVar += "                    <tr style=\" height: 30px\">";
strVar += "                        <td style=\"background-color: white; color: black\">Tarifs<\/td>";
strVar += "                        <td style=\"background-color: #426CB4; color: white\">"+affichageCircuits[i].prix+" $<\/td>";
strVar += "                    <\/tr>";
strVar += "                    <tr style=\" height: 30px\">";
strVar += "                        <td style=\"background-color: white; color: black\">Infos<\/td>";
strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
strVar += "";
strVar += "                    <\/tr>";
strVar += "                    <tr>";
strVar += "                        <td style=\"background-color: white; color: black\">Visites: Hanoi - Baie d'Halong - Ho Chi Minh - My Tho ";
strVar += "                            - Delta du Mekong - Ho Chi Minh - Siem Reap - Angkor - Phnom Penh";
strVar += "";
strVar += "                            Lieux remarquables";
strVar += "                            La baie d'Hạ Long  Mausolée de Hô Chi Minh  La pagode au Pilier unique  ";
strVar += "                            Temple de la Littérature Quoc Tu Giam  Hô-Chi-Minh-Ville  Delta Mékong  ";
strVar += "                            Palais de la Réunification  Angkor Vat  Wat Phnom<\/td>";
strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
strVar += "                    <\/tr>";
strVar += "";
strVar += "                <\/tbody>";
strVar += "            <\/table>";
strVar += "";
strVar += "";
strVar += "";
strVar += "            <div >";
strVar += "                <div class=\"card text-center\" style=\"background-color: white; color: white;\">";
strVar += "                    <div class=\"card-header\" style=\"background-color: #426CB4;color: white\">";
strVar += "                        <ul class=\"nav nav-tabs card-header-tabs\">";
strVar += "                            <li class=\"nav-item\" >";
strVar += "                                <a class=\"nav-link active\" href=\"#\" style=\"color: black\" onclick=\"$('#suite').show();$('#hotel').hide();\">Itinéraire<\/a>";
strVar += "                            <\/li>";
strVar += "                            <li class=\"nav-item\">";
strVar += "                                <a class=\"nav-link\" href=\"#\" style=\"color: black\" onclick=\"$('#suite').hide();$('#hotel').show();\">Hotels<\/a>";
strVar += "                            <\/li>";
strVar += "                            <li class=\"nav-item\">";
strVar += "                                <a class=\"nav-link disabled\" href=\"#\" style=\"color: black\" onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit("+ affichageCircuits[i].idCircuit+ ");'>Réservations<\/a>";
strVar += "                            <\/li>";
strVar += "                        <\/ul>";
strVar += "                    <\/div>";
strVar += "                    <div class=\"card-body\" id=\"suite\" style=\"background-color: cornflowerblue; color: black; \">";
strVar += "                        <div class=\"card-header\">";
strVar += "                            <ul class=\"nav nav-tabs card-header-tabs\">";
strVar += "                                <li class=\"nav-item\" >";
strVar += "                                    <a class=\"nav-link active\" href=\"#\" style=\"color: black\" >étape 1<\/a>";
strVar += "                                <\/li>";
strVar += "                                <li class=\"nav-item\">";
strVar += "                                    <a class=\"nav-link\" href=\"#\" style=\"color: black\">étape 2<\/a>";
strVar += "                                <\/li>";
strVar += "                                <li class=\"nav-item\">";
strVar += "                                    <a class=\"nav-link disabled\" href=\"#\" style=\"color: black\">étape 3<\/a>";
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
strVar += " ";
strVar += "";

    $('#get_result').html(strVar);  
        
        
        
        
        
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



