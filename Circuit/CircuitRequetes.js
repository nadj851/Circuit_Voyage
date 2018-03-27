//Requetes Circuit
function AjouterCircuit() {
    var formCircuit = new FormData(document.getElementById('contenuCircuit'));
    formCircuit.append('action', 'enregistrerCircuit');
    $.ajax({
        type: 'POST',
        url: 'Circuit/CircuitControleur.php',
        data: formCircuit,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            CircuitVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function listerCircuit() {
    var formListerCircuit = new FormData();
    formListerCircuit.append('action', 'listerCircuit');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Circuit/CircuitControleur.php',
        data: formListerCircuit,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            CircuitVue(reponse);
        },
        fail: function (err) {
        }
    });
}

function SupprimerCircuit() {
    var leForm = document.getElementById('formEnleverThem');
    var formthem = new FormData(leForm);
    formthem.append('action', 'enlever');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: formthem, //leForm.serialize(),
        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            //alert(reponse);
            thematiqueVue(reponse);
        },
        fail: function (err) {
        }
    });
}

function obtenirFicheCircuit() {

    var formCircuit = new FormData();
    formCircuit.append('action', 'ficheCircuit');

    $.ajax({
        type: 'POST',
        url: 'Circuit/CircuitControleur.php',
        data: formCircuit,
        contentType: false,
        processData: false,
        dataType: 'text',
        success: function (reponse) { alert(reponse);
           

           // CircuitVue(reponse);
        },
        fail: function (err) {
           
        }

    });

}

function modifierCircuit() {

    var form = new FormData();
    form.append('action', 'modifier');
    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: form,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {
            //alert(reponse);            
            CircuitVue(reponse);
        },
        fail: function (err) {
        }
    });
}

//Appel ajax pour chercher les differents thématique pour loader le drop down list
function FormulaireCircuit() {
    
    var formFilm = new FormData();
    formFilm.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            //alert(reponse);
            CircuitVue(reponse);
        },
        fail: function (err) {
        }
    });
}
