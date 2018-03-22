/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ajouterJour() {
    var formEtape = new FormData(document.getElementById('contenuJour'));
    formEtape.append('action', 'enregistrerJour');
    $.ajax({
        type: 'POST',
        url: 'Jour/JourControleur.php',
        data: formEtape,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            JourVue(reponse);
        },
        fail: function (err) {

        }
    });
}
