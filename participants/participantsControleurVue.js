//vue films
function listerP(listeParticpants) {
    var taille = listeParticpants.length;
    ;
    var rep = "<div class='form-group row'>";
    rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";
    rep += "                                        <option></option>";
    for (var i = 0; i < taille; i++) {
        rep += "<option>" + listeParticpants[i].nom + "</option>";
    }

    rep += "                                    </select>    ";
    rep += "                                </div>";
    rep += "                            </div>";
    rep += "<input type=\"button\" class=\"btn\" value=\"Modifier\" onClick=\" modifier();\" style=\"float: right; \"><br><br>";
    rep += "<input type=\"button\" class=\"btn\" value=\"Supprimer\" onClick=\" supprimer();\" style=\"float: right; \">";

    $('#get_result').html(rep);
}

function listerP(listeParticpants) {
    var taille = listeParticpants.length;
    ;
    var rep = "<div class='form-group row'>";
    rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";
    rep += "                                        <option></option>";
    for (var i = 0; i < taille; i++) {
        rep += "<option>" + listeParticpants[i].nom + "</option>";
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

function afficherFormParticipant(reponse) {
    var NbAdulte = reponse.adulte;
    var NbEnfant = reponse.enfant;
    var NbBebe = reponse.bebe;

alert(NbAdulte+" , "+NbEnfant+" , "+NbBebe);
    var rep = "";
    
    for (var i = 1; i <= NbAdulte; i++) {
        rep += " <label  >Adulte Numéro "+i+"</label>";
        rep=formParticipant(rep);
        rep += "<hr class='ligne_horizontal'>";
        rep+="<br><br><br>";
        
    }
    for (var i = 1; i <= NbEnfant; i++) {
        rep += " <label  >Enfant Numéro "+i+"</label>";
        rep=formParticipant(rep);
        rep += "<hr class='ligne_horizontal'>";
        rep+="<br><br><br>";
        
    }
    for (var i = 1; i <= NbBebe; i++) {
        rep += " <label  >Bébé Numéro "+i+"</label>";
        rep=formParticipant(rep);
        rep += "<hr class='ligne_horizontal'>";
        rep+="<br><br><br>";
        
    }
   // rep=formParticipant(rep);

    $('#get_result').html("");
    $('#get_result').html(rep);
}

var filmsVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
        case "enleverParticpant" :
        case "modifier" :
            message(reponse.msg);
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
        case "afficherParticipant" :
            afficherFormParticipant(reponse);
            break;

    }
}

function formParticipant(rep) {
    
    rep += "                <div class=\"container-fluid\" >";
    rep += "                    <form id=\"contenuParticpants\"class=\"form-group row\" >";

    rep += "                          <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 20px\" >";
    rep += "				<div class=\"form-group row\">";
    rep += "                                  <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\">Nom </label>";
    rep += "                                    <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"nomParticipant\" name=\"nomParticipant\" placeholder=\"Entrer nom du participant\" required>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"prenomParticipant\" class=\"col-sm-2 col-form-label\">Prénom</label>";
    rep += "                                    <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"prenomParticipant\" name=\"prenomParticipant\" placeholder=\"Entrer prénom    du participant\" required>";
    rep += "                                    </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"sexeParticipant\" class=\"col-sm-2 col-form-label\">Sexe</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"sexeParticipant\" name=\"sexeParticipant\" required>";
    rep += "                                        <option></option>";
    rep += "                                        <option>Femme</option>";
    rep += "                                        <option>Homme</option>";
    rep += "                                        <option>Autre</option>";
    rep += "                                    </select>    ";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"courielParticipant\" class=\"col-sm-2 col-form-label\">Couriel</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"courielParticipant\" name=\"courielParticipant\" placeholder=\"Entrer courriel du participant\" required>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"memeAdresse\" class=\"col-sm-2 col-form-label\">Même adresse</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                <div class=\"form-check\">";
    rep += "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse\" id=\"oui\" value=\"option1\" checked>";
    rep += "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Oui</label>";
    rep += "                                   </div>";

    rep += "                                   <div class=\"form-check\">";
    rep += "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse\" id=\"non\" value=\"option2\" >";
    rep += "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Non</label>";
    rep += "                                </div>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"paysParticipant\" class=\"col-sm-2 col-form-label\">Pays</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                    <select class=\"form-control\"  id=\"paysParticipant\" name=\"paysParticipant\" required>";
    rep += "                                        <option value=\"\">Pays...</option>";
    rep += "                                        <option value=\"AF\">Afghanistan</option>";
    rep += "                                  <option value=\"AL\">Albania</option>";
    rep += "                            <option value=\"DZ\">Algeria</option>";
    rep += "                      <option value=\"AS\">American Samoa</option>";
    rep += "                <option value=\"AD\">Andorra</option>";
    rep += "          <option value=\"AG\">Angola</option>";
    rep += "    <option value=\"AI\">Anguilla</option>";

    rep += "                                        <option value=\"AR\">Argentina</option>";
    rep += "                                  <option value=\"AA\">Armenia</option>";
    rep += "                            <option value=\"AW\">Aruba</option>";
    rep += "                      <option value=\"AU\">Australia</option>";
    rep += "                <option value=\"AT\">Austria</option>";
    rep += "          <option value=\"AZ\">Azerbaijan</option>";
    rep += "    <option value=\"BS\">Bahamas</option>";
    rep += "                                        <option value=\"BH\">Bahrain</option>";
    rep += "                                  <option value=\"BD\">Bangladesh</option>";
    rep += "                            <option value=\"BB\">Barbados</option>";
    rep += "                      <option value=\"BY\">Belarus</option>";
    rep += "                <option value=\"BE\">Belgium</option>";
    rep += "          <option value=\"BZ\">Belize</option>";
    rep += "    <option value=\"BJ\">Benin</option>";
    rep += "                                        <option value=\"BM\">Bermuda</option>";
    rep += "                                        <option value=\"BT\">Bhutan</option>";
    rep += "                                        <option value=\"BO\">Bolivia</option>";
    rep += "                                  <option value=\"BL\">Bonaire</option>";
    rep += "                            <option value=\"BA\">Bosnia &amp; Herzegovina </option>";
    rep += "                                        <option value=\"BW\">Botswana</option>";
    rep += "                                  <option value=\"BR\">Brazil</option>";
    rep += "                            <option value=\"BC\">British Indian Ocean Ter</option>";
    rep += "                                        <option value=\"BN\">Brunei</option>";
    rep += "                                  <option value=\"BG\">Bulgaria</option>";
    rep += "                            <option value=\"BF\">Burkina Faso</option>";
    rep += "                      <option value=\"BI\">Burundi</option>";
    rep += "                <option value=\"KH\">Cambodia</option>";
    rep += "          <option value=\"CM\">Cameroon</option>";
    rep += "    <option value=\"CA\">Canada</option>";
    rep += "                                        <option value=\"IC\">Canary Islands</option>";
    rep += "                                  <option value=\"CV\">Cape Verde</option>";
    rep += "                            <option value=\"KY\">Cayman Islands</option>";
    rep += "                      <option value=\"CF\">Central African Republic</option>";
    rep += "                <option value=\"TD\">Chad</option>";
    rep += "          <option value=\"CD\">Channel Islands</option>";
    rep += "    <option value=\"CL\">Chile</option>";
    rep += "                                        <option value=\"CN\">China</option>";
    rep += "                                  <option value=\"CI\">Christmas Island</option>";
    rep += "                            <option value=\"CS\">Cocos Island</option>";
    rep += "                      <option value=\"CO\">Colombia</option>";
    rep += "                <option value=\"CC\">Comoros</option>";
    rep += "          <option value=\"CG\">Congo</option>";
    rep += "    <option value=\"CK\">Cook Islands</option>";
    rep += "                                        <option value=\"CR\">Costa Rica</option>";
    rep += "                                  <option value=\"CT\">Cote D\'Ivoire</option>";
    rep += "                            <option value=\"HR\">Croatia</option>";
    rep += "                      <option value=\"CU\">Cuba</option>";
    rep += "                <option value=\"CB\">Curacao</option>";
    rep += "          <option value=\"CY\">Cyprus</option>";
    rep += "    <option value=\"CZ\">Czech Republic</option>";
    rep += "<option value=\"DK\">Denmark</option>";
    rep += "                                        <option value=\"DJ\">Djibouti</option>";
    rep += "                                  <option value=\"DM\">Dominica</option>";
    rep += "                            <option value=\"DO\">Dominican Republic</option>";
    rep += "                      <option value=\"TM\">East Timor</option>";
    rep += "                <option value=\"EC\">Ecuador</option>";
    rep += "          <option value=\"EG\">Egypt</option>";
    rep += "    <option value=\"SV\">El Salvador</option>";

    rep += "                                    </select>";
    rep += "                          </div>";
    rep += "                </div>";
    rep += "          <div class=\"form-group row\">";
    rep += "        <label for=\"villeParticipant\" class=\"col-sm-2 col-form-label\">Ville</label>";
    rep += "  <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"villeParticipant\" name=\"villeParticipant\" placeholder=\"Entrer ville du participant\">";
    rep += "                          </div>";
    rep += "                </div>";
    rep += "          <div class=\"form-group row\">";
    rep += "        <label for=\"codePostalParticipant\" class=\"col-sm-2 col-form-label\">Code Postal</label>";
    rep += "  <div class=\"col-sm-10\">";
    rep += "<input type=\"text\" class=\"form-control\" id=\"codePostalParticipant\" name=\"codePostalParticipant\" placeholder=\"Entrer code postal du participant\">";
    rep += "                                </div>";
    rep += "                      </div>";

    rep += "           <div class=\"form-group row\">";
    rep += "               <label for=\"telPostalParticipant\" class=\"col-sm-2 col-form-label\">Téléphone</label>";
    rep += "               <div class=\"col-sm-10\">";
    rep += "                   <input type=\"text\" class=\"form-control\" id=\"telPostalParticipant\" name=\"telPostalParticipant\" placeholder=\"Entrer téléphone du participant\">";
    rep += "               </div>";
    rep += "           </div>";

    rep += "            </div>   ";


    rep += "                        <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
    rep += "                      <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\" style=\" width: 100%; float: left\">Informations sur le passeport</label>";
    rep += "                <br><br>";
    rep += "          <div class=\"form-group row\" >";
    rep += "        <label for=\"numeroPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Numéro</label>";
    rep += "  <div class=\"col-sm-10 contenupass\" >";
    rep += "<input type=\"text\" class=\"form-control \" id=\"numeroPasseport\" name=\"numeroPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"dateDelPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Date délivrance</label>";
    rep += "        <div class=\"col-sm-10 contenupass\" >";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"dateDelPasseport\" name=\"dateDelPasseport\" placeholder=\"Entrer Date de délivrance du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"dateExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Date expiration</label>";
    rep += "        <div class=\"col-sm-10 contenupass\">";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"dateExpPasseport\" name=\"dateExpPasseport\" placeholder=\"Entrer date dèxpération du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"delivrerAExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Délivré à</label>";
    rep += "        <div class=\"col-sm-10 contenupass\">";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"delivrerAExpPasseport\" name=\"delivrerAExpPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "             <label for=\"nationalite\" class=\"col-sm-2 col-form-label titrepass\">Nationalité</label>";
    rep += "       <div class=\"col-sm-10 contenupass\">";
    rep += "     <input type=\"text\" class=\"form-control\" id=\"nationalite\" name=\"nationalite\" placeholder=\"Entrer la nationalité\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "            </div>";

    rep += "<input type=\"button\" class=\"btn\" value=\"Ajouter participants\" onClick=\" ajouterParticipant(); formulaireR();listerParticipants();infoUser();\" style=\"float: right; \">";
    rep += "                <br>";
    rep += "                <br>";
    rep += "  </form>";

    rep += "                    </div>";
    return rep;
}