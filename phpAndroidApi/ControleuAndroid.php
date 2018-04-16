<?php
	require_once("../includes/modele.inc.php");
require_once("../includes/init.php");


$tabRes = array();
///////////////////////utilisateur/////////////////////////////////////
function login() {
    global $tabRes;
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    try {
        $unModele = new circuitModel();
        $requete = "SELECT email, idUtilisateur, password FROM utilisateur WHERE email =? AND password =? ";

        $unModele = new circuitModel($requete, array($email, $password));
        $stmt = $unModele->executer();
        $count = $stmt->rowCount();
        
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $_SESSION['idUtilisateur'] = $ligne->idUtilisateur;
        }
        
        if ($count == 1) {
            if (isset($_POST['remember'])) {
                setcookie('email', $email, time() + 86400);
            }

            $_SESSION['email'] = $email;
           
            //redirect("index.php");
            $tabRes['msg'] = "utilisateur authentifier avec success";
        } else {
            $tabRes['msg'] = "username ou Mot de passe errone.";
        }

        $tabRes['action'] = "login";
    } catch (Exception $e) {
        
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
}

function register() {
    global $tabRes;
    $tabRes['action'] = "register";
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $display_name = $_POST['display_name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $active= 1;
    //$confirm_password= $_POST['confirm_password'];




    try {
        $unModele = new circuitModel();

        $requete = "INSERT INTO utilisateur VALUES(0,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($first_name, $last_name, $display_name, $email, $password,$active));
        $stmt = $unModele->executer();       
        
        $tabRes['action'] = "register";
        $tabRes['msg'] = "utilisateur bien enregistrer";
    } catch (Exception $e) {

        echo $e;
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
  }

function logout() {
    global $tabRes;
    $tabRes['action'] = "logout";

    try {
        session_destroy();

        if (isset($_COOKIE['email'])) {
            unset($_COOKIE['email']);

            setcookie('email', '', time() - 86400);
        }

        $tabRes['msg'] = "deconnecter";
    } catch (Exception $e) {
        echo $e;
    } finally {
        echo json_encode($tabRes);  
       unset($unModele);
    }
}

//information user connecter
function information() {
    global $tabRes;
    $tabRes['action'] = "infouser";


    if (isset($_SESSION["email"])) {
        $email = $_SESSION["email"];
    } else {
        $email = "";
    }

    $requete = "SELECT idUtilisateur,last_name,first_name,email FROM utilisateur where email=?";
    try {
        $unModele = new circuitModel($requete, array($email));
        $stmt = $unModele->executer();
        $tabRes['information'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['information'][] = $ligne;
            $_SESSION['idUtilisateur']=$ligne->idUtilisateur;
           
        }
    } catch (Exception $e) {
        
    } finally {
        echo json_encode($tabRes);  
        unset($unModele);
    }
}

//////////////////////////////thematique///////////////////////////////////
function enregistrer() {
    global $tabRes;
    $nom = $_POST['nom'];
    $description = $_POST['desc'];

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
         echo json_encode($tabRes);
        unset($unModele);
    }
}

function listerThematique() {
    global $tabRes;
    $tabRes['action'] = "lister";
    
    $requete = "SELECT * FROM thematique";
    
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme']= array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
}
function getListThematique(){
    global $tabRes;
    listerThematique();
    return $tabRes['listetheme'];
}

 ////////////////Circuit///////////////////////   



//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
  ///////utilisateur/////////////////////
    case "loginU" :
        login();
        break;
    case "registerU" :
        register();
        break;
    case "logoutU" :
        logout();
        break;
    case "infouserU" :
        information();
        break;
   ////////////////thematique///////////////////////
    
     case "enregistrerT" :
            enregistrer();
            echo json_encode($tabRes);
            break;
        case "listerT" :
            listerThematique();
            echo json_encode($tabRes);
            break;
 ////////////////Circuit///////////////////////    
        
         case "enregistrerCircuitC":
            enregistrerCircuit();
           
            break;
        case "afficherFormCircuitC":
            afficherFormCircuit();
            
            break;
        case "listerCircuitC":
            listerLesCircuit();
            
            break;
        case "ficheCircuitC":
            ficheCircuit();

            break;
        case "modifierC":
            modifierCircuit();
          
            break;
    }
        
        
    
    
    

   
        
        
               
        
        
        
	?>
