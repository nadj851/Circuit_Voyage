<?php

require_once("modele.inc.php");

function email_exists($email) 
{
	global $connexion;

	$sql = "SELECT id FROM utilisateur WHERE email = '$email'";

	$result = $connexion->query($sql);

	if($result->num_rows == 1 ) {
		return true;
	} else {
		return false;
	}
}

function get_name($email) {
    
    
	/*global $connexion;

	$sql = "SELECT first_name FROM utilisateur WHERE email = '$email'";
       
	$result = $connexion->query($sql);
        
        $row = $result->etch_object();
              
	echo $row["first_name"];  */     
    
    $requete = "SELECT first_name FROM utilisateur WHERE email=?";
    try {
        $unModele = new circuitModel($requete, array($email));
        $stmt = $unModele->executer();
        
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
                      $_SESSION['firstname']=$ligne->first_name ;
           
        }
    } catch (Exception $e) {
        
    } finally {
        return $_SESSION['firstname'] ;
        unset($unModele);
    }
           
      
    
    
}

function set_message($message) 
{
	if(!empty($message)){
		return $_SESSION['message'] = $message;
	}else {
		return $message = "";
	}
}

function display_message()
{
	if(isset($_SESSION['message'])) {
		echo $_SESSION['message'];

		unset($_SESSION['message']);
	}
}

function redirect($location){
	return header("Location: {$location}");
}

function validation_errors($error_message) 
{
$error_message = <<<DELIMITER

<div class="alert alert-danger alert-dismissible" role="alert">
  	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  	<strong>Warning!</strong> $error_message
 </div>
DELIMITER;

set_message($error_message);
}

function logged_in(){
	if(isset($_SESSION['email']) || isset($_COOKIE['email'])){
		return true;
	} else {
		return false;
	}
}

?>