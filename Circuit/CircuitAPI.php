<?php
require_once("../includes/init.php");
require_once("../includes/modele.inc.php");
$tabRes = array();
    global $tabRes;
    $idThem = $_GET['idThem'];
    $tabRes['action'] = "afficherCircuits";
    $requete = "SELECT * FROM circuit WHERE idThematique=?";
    try {
        $unModele = new filmsModele($requete, array($idThem));
        $stmt = $unModele->executer();
        $tabRes['affichageCircuits'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['affichageCircuits'][] = $ligne;
        }
    } catch (Exception $e) {
        $tabRes['affichageCircuits'][] = $e;
    } finally {
        unset($unModele);
    }
echo json_encode($tabRes);

