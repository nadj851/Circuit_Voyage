/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var nbJour=0;
function ajouterJour() {
   
    $('#nbEtape').html(nbEtape+1);
    
     nbJour++;
      $('#nbJour').html(nbJour+1);
     
    var maxjour=$('#nbJourEtape').val();
    //var maxEtape=$('#nbEtapeCircuit').val();
    alert(" maxjour = "+maxjour+ ", maxEtape = "+maxEtape+ ", nbJour = "+nbJour+ ", nbEtape = "+nbEtape);
    
  
    
    if(nbEtape>=maxEtape && nbJour>=maxjour){
        
        register();
       // $('#messages').html("Circuit ajouté");
       // listerTT();
        //alert("id circuit = "+$('#idCircuit').val());
        AfficherDetailsCircuit($('#idCircuit').val());
        nbEtape=0;
        
        return;
    }
    
    if (nbJour>=maxjour) {
        $('#messages').html("max Jour");
        nbJour=0;
        $('#contenuJour').hide();
        $('#contenuEtape').show();
        
        return;
    }
    
register();
   
}

function register(){
   
          var formEtape = new FormData(document.getElementById('contenuJour'));
    $('#contenuJour')[0].reset();
    formEtape.append('action', 'enregistrerJour');
    $.ajax({
        type: 'POST',
        url: 'Jour/JourControleur.php',
        data: formEtape,
        dataType: 'json', //text pour le voir en format de string
        async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            //$('#messages').html(reponse.msg);
            //JourVue(reponse);
            
                       $('#idCircuit').val(reponse.idCircuit);
                        
                       
//            alert("avec jquery "+$('#idCircuit').val());
//           alert("avec reponse "+reponse.idCircuit);
        },
        fail: function (err) {

        }
    });
    
}
