//vue films
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

function formulaireT() {

    var result = "";

    result += "<div class='col-md-4 col-md-push-4'>";

    result += "<form id='formEnregthems'>";
    result += "<h3>Ajouter une thematique</h3>";
    result += "<div class='form-group'>";
    result += "<label for='nom'>nom:</label>";
    result += "<input type='text' class='form-control' id='nom' name='nom'>";
    result += "</div>";

    result += "<div class='form-group'>";
    result += "<label for='description'>description:</label>";
    result += " <input type='text' class='form-control' id='description' name='description'>";
    result += " </div>";

    result += "<div class='form-group'>";
    result += "<label for='pochette'>image:</label>";
    result += "<input type='file' class='form-control-file' id='pochette' name='pochette' aria-describedby='fileHelp'";
    result += "</div><br><br>";
    result += "<input type='button' class='btn btn-primary' value='Ajouter' onClick='enregistrerT();'><br><br>";
    result += "</form>";
    result += "</div>";

    $('#get_result').html(result);

}

function listerP(listetheme) {
    var taille;
    /*var rep="<div class='table-users' style='overflow: scroll; height: 500px;'>";
     rep+="<div class='header'>Liste des films<span style='float:right;padding-right:10px;cursor:pointer;' onClick=\"$('#contenu').hide();\">X</span></div>";
     rep+="<table cellspacing='0'>";
     rep+="<tr><th>NUMERO</th><th>TITRE</th><th>DUREE</th><th>REALISATEUR</th><th>POCHETTE</th></tr>";
     taille=listetheme.length;
     for(var i=0; i<taille; i++){
     rep+="<tr><td>"+listetheme[i].idf+"</td><td>"+listetheme[i].titre+"</td><td>"+listetheme[i].duree+"</td><td>"+listetheme[i].res+"</td><td><img src='pochettes/"+listFilms[i].pochette+"' width=80 height=80></td></tr>";		 
     }
     rep+="</table>";
     rep+="</div>";
     $('#contenu').html(rep);*/
    //**********************
    taille = listetheme.length;
    
var strVar="";

    for (var i = 0; i < taille; i++) {
       
strVar += "<form method='post' action='login.php'>\";";
strVar += "                                <div class=\"row\">";
strVar += "                                            <div class=\"col-md-2\">";
strVar += "                                                    <div class=\"btn-group\">";
strVar += "                                                            <a href=\"#\"  id=" +listetheme[i].idPanier+" class=\"btn btn-danger remove\"><span class=\"glyphicon glyphicon-trash\"><\/span><\/a>";
strVar += "";
strVar += "                                                    <\/div>";
strVar += "                                            <\/div>";
strVar += "                                            <input type=\"hidden\" name=\"product_id[]\" value=\"' . $film_id . '\"\/>";
strVar += "                                            <input type=\"hidden\" name=\"\" value=" +listetheme[i].idPanier+ "\/>";
strVar += "                                            <div class=\"col-md-2\"><img class=\"img-responsive\" src=\"pochettes\/' "+listetheme[i].imageCircuit+ " '\" style=\"width:50px; height:50px;\"><\/div>";
strVar += "                                            <div class=\"col-md-2\">"  +listetheme[i].titre+ "<\/div>								";
strVar += "                                            <div class=\"col-md-2\"><input type=\"text\" class=\"form-control price\" value="  +listetheme[i].prix+ " $\" readonly=\"readonly\"><\/div>";
strVar += "";
strVar += "                                        <\/div>';";
strVar += "										<\/form>';";

    }
    $('#get_result').html(result);
    $("a[name=afficherCircuit]").click( function(){
    AfficherCircuits($(this).prop("id"));    
});

}

/*function afficherFiche(reponse){
 var uneFiche;
 if(reponse.OK){
 uneFiche=reponse.fiche;
 $('#formFicheF h3:first-child').html("Fiche du film numero "+uneFiche.idf);
 $('#idf').val(uneFiche.idf);
 $('#titreF').val(uneFiche.titre);
 $('#dureeF').val(uneFiche.duree);
 $('#resF').val(uneFiche.res);
 $('#divFormFiche').show();
 document.getElementById('divFormFiche').style.display='block';
 }else{
 $('#messages').html("Film "+$('#numF').val()+" introuvable");
 setTimeout(function(){ $('#messages').html(""); }, 5000);
 }
 
 }
 */
var panierVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);
            break;
            
        case "listerP" :
            listerP(reponse.listetheme);
            break;
            
        case "formulaire" :
            formulaireT();
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}
