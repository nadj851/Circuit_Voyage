<?php
session_start();
require_once("../includes/modele.inc.php");
$tabRes = array();

function enregistrer() {
    global $tabRes;
    $nom = $_POST['nom'];
    $description = $_POST['description'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nom);
        $requete = "INSERT INTO thematique VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nom, $description, $pochete));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "thamatique bien enregistrer";
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function lister() {
    global $tabRes;
    $tabRes['action'] = "lister";
    $requete = "SELECT * FROM thematique";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

/* function enlever(){
  global $tabRes;
  $idf=$_POST['numE'];
  try{
  $requete="SELECT * FROM films WHERE idf=?";
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
  $unModele->enleverFichier("pochettes",$ligne->pochette);
  $requete="DELETE FROM films WHERE idf=?";
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." bien enleve";
  }
  else{
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." introuvable";
  }
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  }

  function fiche(){
  global $tabRes;
  $idf=$_POST['numF'];
  $tabRes['action']="fiche";
  $requete="SELECT * FROM films WHERE idf=?";
  try{
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  $tabRes['fiche']=array();
  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
  $tabRes['fiche']=$ligne;
  $tabRes['OK']=true;
  }
  else{
  $tabRes['OK']=false;
  }
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  }

  function modifier(){
  global $tabRes;
  $titre=$_POST['titreF'];
  $duree=$_POST['dureeF'];
  $res=$_POST['resF'];
  $idf=$_POST['idf'];
  try{
  //Recuperer ancienne pochette
  $requette="SELECT pochette FROM films WHERE idf=?";
  $unModele=new filmsModele($requette,array($idf));
  $stmt=$unModele->executer();
  $ligne=$stmt->fetch(PDO::FETCH_OBJ);
  $anciennePochette=$ligne->pochette;
  $pochette=$unModele->verserFichier("pochettes", "pochette",$anciennePochette,$titre);

  $requete="UPDATE films SET titre=?,duree=?, res=?, pochette=? WHERE idf=?";
  $unModele=new filmsModele($requete,array($titre,$duree,$res,$pochette,$idf));
  $stmt=$unModele->executer();
  $tabRes['action']="modifier";
  $tabRes['msg']="Film $idf bien modifie";
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  } */

//lister les particpants
function listerParticipant() {
    global $tabRes;
    $tabRes['action'] = "listerParticpants";
    $requete = "SELECT * FROM participants";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listeParticpants'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeParticpants'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

 
 
 //lister les circuit par id
function  circuitparid() {
    global $tabRes;
    $id = $_POST['idc'];
    
    $tabRes['action'] = "ramener";
    $requete = "SELECT * FROM circuit where idCircuit=?";
    try {
        $unModele = new circuitModel($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['circuitid'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['circuitid'][] = $ligne;
        }
        
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}



//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
    case "enregistrer" :
        enregistrer();
        break;
    case "lister" :
        lister();
        break;

    case "listerParticipant" :
        listerParticipant();
        break;
    
    
    case "ramener" :
        circuitparid();
        break;
    
    
    
}
echo json_encode($tabRes);
?>