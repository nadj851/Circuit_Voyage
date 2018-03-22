$(document).ready(function(){
$("a").click( function(){
    alert("happenig");
    AfficherCircuits($(this).prop("id"));    
});
});

function AfficherCircuits(idThem) {
    var formCircuit = new FormData(document.getElementById('contenuCircuit'));
    formCircuit.append('action', 'enregistrerCircuit');
    $.ajax({
        type: 'GET',
        url: 'Circuit/CircuitAPI.php?idThem='+idThem,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
           //Affichage
            AffichageCircuit(reponse.affichageCircuits);
        },
        fail: function (err) {

        }
    });
}

function AffichageCircuit(affichageCircuits){
    alert(affichageCircuits.idCircuit);
    
    /*
    $('#get_result').html("");
    
    
    taille = listetheme.length;
    var result = "";

    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].nom + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a href='#' name='afficherCircuit'  id='" + listetheme[i].idThematique + "' class=\"thumbnail\">	<img src='pochettes/" + listetheme[i].image + "' style='width:400px; height:300px;'></a>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);
    */
}

