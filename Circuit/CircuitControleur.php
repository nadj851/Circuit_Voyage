<?php

session_start();
require_once("../includes/modele.inc.php");
$tabRes = array();

function enregistrerCircuit() {
    global $tabRes;

    $nomCircuit = $_POST['nomCircuit'];
    $dateDepart = $_POST['dateDepartCircuit'];
    $dateRetour = $_POST['dateRetourCircuit'];
    $nbPersonnesMax = $_POST['nbPersonnesMax'];
    $nbPersonnesMin = $_POST['nbPersonnesMin'];
    $description = $_POST['descripCircuit'];
    $prix = $_POST['prixCircuit'];
    $idthematique = $_POST['themeCircuit'];
    $imageCircuit = $_POST['imageCircuit'];
    $guide = $_POST['guide'];
    $idPromo = $_POST['idPromo'];


    try {
        $unModele = new filmsModele();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO circuit VALUES(0,?,?,?,?,?,?,?,?,?,?,?)";
        $unModele = new filmsModele($requete, array($nomCircuit, $dateDepart, $dateRetour, $nbPersonnesMax, $nbPersonnesMin, $description, $prix, $pochete, null, null, $idthematique));
        $stmt = $unModele->executer();
        $_SESSION["idCircuit"] = $unModele->lastID;
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "circuit bien enregistrer";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

//function lister() {
//    global $tabRes;
//    $tabRes['action'] = "lister";
//    $requete = "SELECT * FROM thematique";
//    try {
//        $unModele = new filmsModele($requete, array());
//        $stmt = $unModele->executer();
//        $tabRes['listetheme'] = array();
//        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
//            $tabRes['listetheme'][] = $ligne;
//        }
//    } catch (Exception $e) {
//        
//    } finally {
//        unset($unModele);
//    }
//}
//
///* function enlever(){
//  global $tabRes;
//  $idf=$_POST['numE'];
//  try{
//  $requete="SELECT * FROM films WHERE idf=?";
//  $unModele=new filmsModele($requete,array($idf));
//  $stmt=$unModele->executer();
//  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
//  $unModele->enleverFichier("pochettes",$ligne->pochette);
//  $requete="DELETE FROM films WHERE idf=?";
//  $unModele=new filmsModele($requete,array($idf));
//  $stmt=$unModele->executer();
//  $tabRes['action']="enlever";
//  $tabRes['msg']="Film ".$idf." bien enleve";
//  }
//  else{
//  $tabRes['action']="enlever";
//  $tabRes['msg']="Film ".$idf." introuvable";
//  }
//  }catch(Exception $e){
//  }finally{
//  unset($unModele);
//  }
//  }
//
function ficheCircuit() {
   
    global $tabRes;
    $id = 33;
    $tabRes['action'] = "afficherFiche";
    $requete = "SELECT * FROM circuit WHERE idCircuit=?";
    try {
        $unModele = new filmsModele($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['ficheCircuit'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['ficheCircuit'] = $ligne;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
        
    } finally {
        unset($unModele);
       
    }
}

//
//  function modifier(){
//  global $tabRes;
//  $titre=$_POST['titreF'];
//  $duree=$_POST['dureeF'];
//  $res=$_POST['resF'];
//  $idf=$_POST['idf'];
//  try{
//  //Recuperer ancienne pochette
//  $requette="SELECT pochette FROM films WHERE idf=?";
//  $unModele=new filmsModele($requette,array($idf));
//  $stmt=$unModele->executer();
//  $ligne=$stmt->fetch(PDO::FETCH_OBJ);
//  $anciennePochette=$ligne->pochette;
//  $pochette=$unModele->verserFichier("pochettes", "pochette",$anciennePochette,$titre);
//
//  $requete="UPDATE films SET titre=?,duree=?, res=?, pochette=? WHERE idf=?";
//  $unModele=new filmsModele($requete,array($titre,$duree,$res,$pochette,$idf));
//  $stmt=$unModele->executer();
//  $tabRes['action']="modifier";
//  $tabRes['msg']="Film $idf bien modifie";
//  }catch(Exception $e){
//  }finally{
//  unset($unModele);
//  }
//  } */
//
////lister les particpants
//function listerParticipant() {
//    global $tabRes;
//    $tabRes['action'] = "listerParticpants";
//    $requete = "SELECT * FROM participants";
//    try {
//        $unModele = new filmsModele($requete, array());
//        $stmt = $unModele->executer();
//        $tabRes['listeParticpants'] = array();
//        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
//            $tabRes['listeParticpants'][] = $ligne;
//        }
//    } catch (Exception $e) {
//        
//    } finally {
//        unset($unModele);
//    }
//}
//******************************************************
//Contr�leur
$action = $_POST['action'];

switch ($action) {
    case "enregistrerCircuit" :
        enregistrerCircuit();
        break;
    case "afficherFormCircuit" :
        afficherFormCircuit();
        break;

    case "ficheCircuit" :
        ficheCircuit();
        break;
}
echo json_encode($tabRes);