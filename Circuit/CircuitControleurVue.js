////vue Circuit
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

function formulaireCircuit() {
    
    
    
}
var CircuitVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);

            break;

        case "lister" :
            listerR(reponse.listetheme);
            break;

        case "listerParticipant" :
            listerP(reponse.listetheme);
            break;
        case "afficherFormCircuit" :
            formulaireCircuit();
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}

