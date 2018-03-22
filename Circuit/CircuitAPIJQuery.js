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


    taille = affichageCircuits.length;
    var result = "";
    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + affichageCircuits[i].titre + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a name='afficherDetailsCircuit'  id='" + affichageCircuits[i].idCircuit + "' class=\"thumbnail\">	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:400px; height:300px;'></a>";
        result += "<div> Description: " + affichageCircuits[i].description + " <br></div>";
        result += "<div> Prix: " + affichageCircuits[i].prix + " <br></div>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);

    $("a[name=afficherCircuit]").click(function () {
        //AfficherDetailsCircuits($(this).prop("id"));
    });


}

