/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AjouterJour() {
    var formEtape = new FormData(document.getElementById('contenuEtape'));
    formEtape.append('action', 'enregistrerEtape');
    $.ajax({
        type: 'POST',
        url: 'Etape/EtapeControleur.php',
        data: formEtape,
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
