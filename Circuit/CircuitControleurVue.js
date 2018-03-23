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

function formulaireCircuit(reponse) {

    $taille = reponse.length;

    var input = "";
    input += " <div class=\"container-fluid\" id=\"conteneurCircuit\" >";
    input += "                                        <form id=\"contenuCircuit\"class=\"form-group row\" style=\"display: block\">";
    input += "                                            <div class=\"form-group row\">";
    input += "                                                <h2 for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Création circuit<\/h2>";
    input += "                                            <\/div>";
    input += "";
    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Nom du circuit<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nomCircuit\" name=\"nomCircuit\" placeholder=\"Entrer nom du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"themeCircuit\" class=\"col-sm-2 col-form-label\">Thématique<\/label>";
    input += "                                                    <div class=\"col-sm-10\" >";
    input += "                                                        <select class=\"form-control\" id=\"themeCircuit\" name=\"themeCircuit\" required>                                    ";
    for (var i = 0; i < $taille; i++) {
        input += "   <option value='" + reponse[i].idThematique + "'>" + reponse[i].nom + "<\/option>";

    }
    input += "                                                        <\/select>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"dateDepartCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateDepartCircuit\" name=\"dateDepartCircuit\" placeholder=\"Entrer départ date\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"dateRetourCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateRetourCircuit\" name=\"dateRetourCircuit\" placeholder=\"Entrer retour date\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbPersonneMin\" class=\"col-sm-2 col-form-label\">Nombre personnes minimum<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMin\" name=\"nbPersonneMin\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbPersonneMax\" class=\"col-sm-2 col-form-label\">Nombre personnes maximum<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMax\" name=\"nbPersonneMax\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"prixCircuit\" class=\"col-sm-2 col-form-label\">Prix<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"prixCircuit\" name=\"prixCircuit\" placeholder=\"Entrer ville du participant\">";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"descripCircuit\" class=\"col-sm-2 col-form-label\">Déscription du circuit<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <textarea class=\"form-control\" rows=\"5\" id=\"descripCircuit\" name=\"descripCircuit\"><\/textarea>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbEtapeCircuit\" class=\"col-sm-2 col-form-label\">Entrer nombre etape<\/label>";
    input += "                                                    <div class=\"col-sm-10\" >";
    input += "                                                        <select class=\"form-control\" id=\"nbEtapeCircuit\" name=\"nbEtapeCircuit\" required>";
    input += "                                                            <option>1<\/option>";
    input += "                                                            <option>2<\/option>";
    input += "                                                            <option>3<\/option>";
    input += "                                                            <option>4<\/option>";
    input += "                                                            <option>5<\/option>";
    input += "                                                            <option>6<\/option>";
    input += "                                                        <\/select>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";

    input += "                                              <div class=\"form-group\">";
    input += "                                                      <label for=\"pochette\">Pochette:<\/label>";

    input += "                                                      <input type=\"file\" class=\"form-control-file\" id=\"pochette\" name=\"pochette\" aria-describedby=\"fileHelp\">";

    input += "                                          <\/div>";



    input += "                                                <input type=\"button\" id=\"ajouterCircuit\"class=\"btn\" onclick='$(\"#contenuCircuit\").hide(); $(\"#contenuEtape\").show(); AjouterCircuit();' value=\"Sauvegarder et passer aux étapes\" >";
    input += "                                            <\/div>";
    input += "";
    input += "";
    input += "                                        <\/form>";//fin formulaire circuit


    input += "";                                                //formulaire étape
    input += "                                        <form id=\"contenuEtape\"class=\"form-group row\" style=\"display: none\">";
    input += "                                            <div class=\"form-group row\">";
    input += "                                                <h2 for=\"nomEtape\" class=\"col-sm-2 col-form-label\">Création étape<\/h2>";
    input += "                                            <\/div>";
    input += "";
    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";

    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nomEtape\" class=\"col-sm-2 col-form-label\">Nom de l'étape<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nomEtape\" name=\"nomEtape\" placeholder=\"Entrer nom du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";

    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"descripEtape\" class=\"col-sm-2 col-form-label\">Déscription étape<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <textarea class='form-control' rows='5' id='descripEtape' name='descripEtape'><\/textarea>";
    input += "";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";

    input += "                                                <input type=\"button\" class=\"btn\" value=\"Enregistrer étape\" onClick='  $(\"#contenuEtape\").hide(); $(\"#contenuJour\").show(); AjouterEtape();'><br><br>";
    input += "                                         <\/div>";

    input += "                                        <\/form>";//fin formulaire étape--------------------------------------------------
    input += "";
    input += "";
    input += "";
    input += "";                                                //formulaire Jour
    input += "                                        <form id=\"contenuJour\"class=\"form-group row\" style=\"display: none\">";
    input += "                                            <div class=\"form-group row\">";
    input += "                                                <h2 for=\"nomJour\" class=\"col-sm-2 col-form-label\">Création Jour<\/h2>";
    input += "                                            <\/div>";
    input += "";
    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";

    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"nomHotel\" class=\"col-sm-2 col-form-label\">Hotel<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"nomHotel\" name=\"nomHotel\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";

    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"UrlHotel\" class=\"col-sm-2 col-form-label\">URL(Hotel)<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"UrlHotel\" name=\"UrlHotel\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";
    input += "";
    input += "";
    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"nomRestaurant\" class=\"col-sm-2 col-form-label\">Restaurant(s)<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"nomRestaurant\" name=\"nomRestaurant\" placeholder=\"Entrer ville du participant\">";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";
    input += "";
    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"urlRestaurant\" class=\"col-sm-2 col-form-label\">URL Restaurant(s)<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"urlRestaurant\" name=\"urlRestaurant\" placeholder=\"Entrer ville du participant\">";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";
    input += "";
    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"repas\" class=\"col-sm-2 col-form-label\">Repas inclus<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <label><input type=\"checkbox\" name=\"dejeuner\" value=\"Déjeuner\">Déjeuner<\/label>";
    input += "                                                            <label><input type=\"checkbox\" name=\"diner\" value=\"Diner\">Diner<\/label>";
    input += "                                                            <label><input type=\"checkbox\" name=\"souper\" value=\"Souper\">Souper<\/label>";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";

    input += "                                                    <div class=\"form-group row\">";
    input += "                                                        <label for=\"descripJour\" class=\"col-sm-2 col-form-label\">Déscription étape<\/label>";
    input += "                                                        <div class=\"col-sm-10\">";
    input += "                                                            <textarea class=\"form-control\" rows=\"5\" id=\"descripJour\" name=\"descripJour\"><\/textarea>";
    input += "";
    input += "                                                        <\/div>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";

    input += "                                                <input type=\"button\" class=\"btn\" value=\"Enregistrer Jour\" onClick=\"ajouterJour();\"><br><br>";
    input += "                                         <\/div>";

    input += "                                        <\/form>";//fin formulaire jour-----------------------------------------------------------------------------------



    input += "                                            <\/div>";
    input += "";
    input += "";

    input += "                                    <\/div>";

    $('#get_result').html(input);




}

function afficherFicheCircuit(fiche) {


    var input = "";
    input += " <div class=\"container-fluid\" id=\"conteneurCircuit\" >";
    input += "                                        <form id=\"contenuCircuit\"class=\"form-group row\" style=\"display: block\">";
    input += "                                            <div class=\"form-group row\">";
    input += "                                                <h2 for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Modification d'un circuit<\/h2>";
    input += "                                            <\/div>";
    input += "";
    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Nom du circuit<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";

    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nomCircuit\" name=\"nomCircuit\" placeholder=\"Entrer nom du participant\"  value = " + fiche.titre + " required>";

    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"themeCircuit\" class=\"col-sm-2 col-form-label\">Thématique<\/label>";
    input += "                                                    <div class=\"col-sm-10\" >";
    input += "                                                        <select class=\"form-control\" id=\"themeCircuit\" name=\"themeCircuit\" required>                                    ";

    input += "                                                        <\/select>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"dateDepartCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateDepartCircuit\" name=\"dateDepartCircuit\" placeholder=\"Entrer départ date\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"dateRetourCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateRetourCircuit\" name=\"dateRetourCircuit\" placeholder=\"Entrer retour date\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbPersonneMin\" class=\"col-sm-2 col-form-label\">Nombre personnes minimum<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMin\" name=\"nbPersonneMin\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbPersonneMax\" class=\"col-sm-2 col-form-label\">Nombre personnes maximum<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMax\" name=\"nbPersonneMax\" placeholder=\"Entrer courriel du participant\" required>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"prixCircuit\" class=\"col-sm-2 col-form-label\">Prix<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"prixCircuit\" name=\"prixCircuit\" placeholder=\"Entrer ville du participant\">";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"descripCircuit\" class=\"col-sm-2 col-form-label\">Déscription du circuit<\/label>";
    input += "                                                    <div class=\"col-sm-10\">";
    input += "                                                        <textarea class=\"form-control\" rows=\"5\" id=\"descripCircuit\" name=\"descripCircuit\"><\/textarea>";
    input += "";
    input += "";
    input += "";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "";
    input += "                                                <div class=\"form-group row\">";
    input += "                                                    <label for=\"nbEtapeCircuit\" class=\"col-sm-2 col-form-label\">Entrer nombre etape<\/label>";
    input += "                                                    <div class=\"col-sm-10\" >";
    input += "                                                        <select class=\"form-control\" id=\"nbEtapeCircuit\" name=\"nbEtapeCircuit\" required>";
    input += "                                                            <option>1<\/option>";
    input += "                                                            <option>2<\/option>";
    input += "                                                            <option>3<\/option>";
    input += "                                                            <option>4<\/option>";
    input += "                                                            <option>5<\/option>";
    input += "                                                            <option>6<\/option>";
    input += "                                                        <\/select>";
    input += "                                                    <\/div>";
    input += "                                                <\/div>";
    input += "                                              <div class=\"form-group\">";
    input += "                                                      <label for=\"pochette\">Pochette:<\/label>";

    input += "                                                      <input type=\"file\" class=\"form-control-file\" id=\"pochette\" name=\"pochette\" aria-describedby=\"fileHelp\">";

    input += "                                          <\/div>";
    input += "                                                <input type=\"button\" id=\"modifierCircuit\"class=\"btn\" onclick='$(\"#contenuCircuit\").hide(); $(\"#contenuEtape\").show(); modifierCircuit();' value=\"Modifier Circuit\" >";
    input += "                                            <\/div>";
    input += "";
    input += "";
    input += "                                        <\/form>";//fin formulaire circuit

    $('#get_result').html(input);
}
var CircuitVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);

            break;

        case "listerCircuit" :
            listerR(reponse.listetheme);
            break;
        case "afficherFiche" :
            afficherFicheCircuit(reponse.ficheCircuit);
            break;

        case "listerParticipant" :
            listerP(reponse.listetheme);
            break;
        case "lister" ://Cette action viens de thematiques, ca nous liste les théamtiques
            formulaireCircuit(reponse.listetheme);
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}
