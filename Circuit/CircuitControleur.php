<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

require_once("../includes/modele.inc.php");

$tabRes = array();

function enregistrerCircuit() {
    global $tabRes;

    $nomCircuit = $_POST['nomCircuit'];
    $dateDepart = $_POST['dateDepartCircuit'];
    $dateRetour = $_POST['dateRetourCircuit'];
    $nbPersonnesMax = $_POST['nbPersonneMax'];
    $nbPersonnesMin = $_POST['nbPersonneMin'];
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

function listerLesCircuit() {
    global $tabRes;
    $tabRes['action'] = "listerLesCircuits";
    $requete = "SELECT * FROM circuit";
    try {
        $unModele = new filmsModele($requete, []);
        $stmt = $unModele->executer();
        $tabRes['listecircuit'] = [];
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listecircuit'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function ficheCircuit() {
    global $tabRes;
//    include '../Thematique/ThematiqueControleur.php';    
//    listerThematique();
    
    $id = 33;    
    $requete = "SELECT * FROM circuit WHERE idCircuit=?";
    try {
        $unModele = new filmsModele($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['ficheCircuit'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
        $tabRes['ficheCircuit'][] = $ligne;
            $tabRes['OK'] = true;
              $tabRes['action']= "afficherFiche";
             
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
    
}

if (isset($_POST['action'])) {
    $action = $_POST['action'];
//$action = "ficheCircuit";
    switch ($action) {
        case "enregistrerCircuit" :
            enregistrerCircuit();
            break;
        case "afficherFormCircuit" :
            afficherFormCircuit();
            break;
        case "listerCircuit" :
            listerLesCircuit();

        case "ficheCircuit" :
            ficheCircuit();
            break;
    }
}
echo json_encode($tabRes);
