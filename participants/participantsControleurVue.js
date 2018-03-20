//vue films
function listerP(listeParticpants) {
    var taille= listeParticpants.length;;
    var rep = "<div class='form-group row'>";
        rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
        rep += "                                <div class=\"col-sm-10\" >";
        rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";
        rep += "                                        <option></option>";
    for (var i = 0; i < taille; i++) {
        rep += "<option>" + listeParticpants[i].nom + "</option>" ;
    }    
   
        rep += "                                    </select>    ";
        rep += "                                </div>";
        rep += "                            </div>";
        rep += "<input type=\"button\" class=\"btn\" value=\"Modifier\" onClick=\" modifier();\" style=\"float: right; \"><br><br>";
        rep += "<input type=\"button\" class=\"btn\" value=\"Supprimer\" onClick=\" supprimer();\" style=\"float: right; \">";
    
    $('#get_result').html(rep);
}

function AfficherForm() {
    
    


   
}

function afficherFiche(reponse) {
    var uneFiche;
    if (reponse.OK) {
        uneFiche = reponse.fiche;
        $('#formFicheF h3:first-child').html("Fiche du film numero " + uneFiche.idf);
        $('#idf').val(uneFiche.idf);
        $('#titreF').val(uneFiche.titre);
        $('#dureeF').val(uneFiche.duree);
        $('#resF').val(uneFiche.res);
        $('#divFormFiche').show();
        document.getElementById('divFormFiche').style.display = 'block';
    } else {
        $('#messages').html("Film " + $('#numF').val() + " introuvable");
        setTimeout(function () {
            $('#messages').html("");
        }, 5000);
    }

}

var filmsVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
        case "enlever" :
        case "modifier" :
            $('#messages').html(reponse.msg);
            setTimeout(function () {
                $('#messages').html("");
            }, 5000);
            break;
        case "lister" :
            listerP(reponse.listeParticpants);
            break;
        case "afficherFormulaire" :
             $('#get_result').html(reponse.msg);
            break;
        case "fiche" :
            afficherFiche(reponse);
            break;
    }
}

