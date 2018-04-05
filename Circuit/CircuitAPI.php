<?php

require_once("../includes/init.php");
require_once("../includes/modele.inc.php");
$tabRes = array();
global $tabRes;
$requete = "SELECT * FROM circuit ";
$tabRes['action'] = "afficherCircuits";
$param = "";

if (isset($_GET['idCircuit'])) {
    $_SESSION["idCircuit"]=$_GET['idCircuit'];
    $param = $_GET['idCircuit'];
    $requete=$requete." WHERE idCircuit=?";
}
else if (isset($_GET['idThem'])) {
    $param = $_GET['idThem'];
    $requete=$requete." WHERE idThematique=?";
} 

$params = array();
if ($param !== "") {
    $params = array($param);
}

try {
    $unModele = new circuitModel($requete, $params);
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

