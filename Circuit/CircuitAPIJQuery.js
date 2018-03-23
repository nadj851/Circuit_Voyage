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
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + affichageCircuits[i].titre + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a name='afficherDetailsCircuit'  id='" + affichageCircuits[i].idCircuit + "' >	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:350px; height:300px;'></a>";
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
        
    taille = affichageCircuits.length;
    var result = "";
    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-12'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>"+ affichageCircuits[i].titre + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a>	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:600px; height:600px;'></a>";
        result += "<div> Description: " + affichageCircuits[i].description + " <br></div>";
        result += "<div> Prix: " + affichageCircuits[i].prix + " <br></div>";
        result += "<a href='#' class='category btn btn-danger btn-xs' cid='ACTION'  class='' style='float:right;' onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit('"+ affichageCircuits[i].idCircuit+ "');'>Reservation </a>";
       result += "</div>";
        result += "</div>";
        result += "</div>";
        //'"+  affichageCircuits[i].idCircuit +"'
    }
    $('#get_result').html(result);
}



