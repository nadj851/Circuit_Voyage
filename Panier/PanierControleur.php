<?php
session_start();
	require_once("../includes/modele.inc.php");
	$tabRes=array();
	/*function enregistrer(){
		global $tabRes;	
		$nom=$_POST['nom'];
		$description=$_POST['description'];
		
		try{
			$unModele=new filmsModele();
			$pochete=$unModele->verserFichier("pochettes", "pochette", "avatar.jpg",$nom);
			$requete="INSERT INTO thematique VALUES(0,?,?,?)";
			$unModele=new filmsModele($requete,array($nom,$description,$pochete));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrer";
			$tabRes['msg']="thamatique bien enregistrer";
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}*/
	
	function listerPanier(){
		global $tabRes;
		$tabRes['action']="listerP";
                ////////////////////////////
                
                if (isset($_SESSION["email"])) {

                            $email = $_SESSION["email"];
                            $sql = "SELECT a.idf,a.pochette,a.titre,a.prix,b.id FROM circuit a,panier b WHERE a.idf=b.idf AND b.email='$email'";


                            $query = mysqli_query($connexion, $sql);
                            echo "<form method='post' action='login.php'>";
                            $n = 0;
                            while ($row = mysqli_fetch_array($query)) {
                                $n++;
                                $film_id = $row["idf"];
                                $titre = $row["titre"];
                                $film_prix = $row["prix"];
                                $film_image = $row["pochette"];
                                $idp = $row["id"];

                                echo '<div class="row">
                                            <div class="col-md-2">
                                                    <div class="btn-group">
                                                            <a href="#"  id="' . $idp . '" class="btn btn-danger remove"><span class="glyphicon glyphicon-trash"></span></a>

                                                    </div>
                                            </div>
                                            <input type="hidden" name="product_id[]" value="' . $film_id . '"/>
                                            <input type="hidden" name="" value="' . $idp . '"/>
                                            <div class="col-md-2"><img class="img-responsive" src="pochettes/' . $film_image . '" style="width:50px; height:50px;"></div>
                                            <div class="col-md-2">' . $titre . '</div>								
                                            <div class="col-md-2"><input type="text" class="form-control price" value="' . $film_prix . '.99 $" readonly="readonly"></div>

                                        </div>';
                            }
                            ///////////////////


                            $requette = "SELECT  SUM(a.prix) AS sum_item FROM tabfilms a,panier b WHERE a.idf=b.idf AND b.email='$email'";


                            try {
                                $sum_item = mysqli_query($connexion, $requette);
                                while ($row = mysqli_fetch_array($sum_item)) {
                                    $total = $row["sum_item"];
                                }
                                mysqli_free_result($sum_item);
                            } catch (Exception $e) {
                                echo "Probleme pour le total";
                            }
                            //mysqli_close($connexion);
                            //////////////



                            echo '<div class="row">
							<div class="col-md-8"></div>
							<div class="col-md-4">
								<b class="net_total" style="font-size:20px;">Total :' . $total . '.99$</b>
					</div>';

                            if (!isset($_SESSION["email"])) {
                                echo '<input type="submit" style="float:right;" name="login_user_with_film" class="btn btn-info btn-lg" value="Payer" >
							</form>';
                            } else if (isset($_SESSION["email"])) {
                                //Paypal checkout form
                                echo '
						</form>
						<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
							<input type="hidden" name="cmd" value="_cart">
							<input type="hidden" name="business" value="FilmaTec@hotmail.com">
							<input type="hidden" name="upload" value="1">';

                                $x = 0;
                                $sql = "SELECT a.idf,a.pochette,a.titre,a.prix,b.id FROM tabfilms a,panier b WHERE a.idf=b.idf AND b.email='$email'";
                                $query = mysqli_query($connexion, $sql);
                                while ($row = mysqli_fetch_array($query)) {
                                    $x++;
                                    echo
                                    '<input type="hidden" name="item_name_' . $x . '" value="' . $row["titre"] . '">
								  	 <input type="hidden" name="item_number_' . $x . '" value="' . $x . '">
								     <input type="hidden" name="amount_' . $x . '" value="' . $row["prix"] . '">';
                                }
                                $email = $_SESSION["email"];
                                echo
                                '<input type="hidden" name="return" value="http://localhost/project1/payment_success.php"/>
					                <input type="hidden" name="notify_url" value="http://localhost/project1/payment_success.php">
									<input type="hidden" name="cancel_return" value="http://localhost/project1/cancel.php"/>
									<input type="hidden" name="currency_code" value="USD"/>
									<input type="hidden" name="custom" value="' . $email . '"/>
									<input style="float:right;margin-right:80px;" type="image" name="submit"
										src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/blue-rect-paypalcheckout-60px.png" alt="PayPal "
										alt="PayPal - The safer, easier way to pay online">
								</form>';
                            }

                            mysqli_close($connexion);
                        }
                               
                
                                                      
                
                
                
                ///////////////////////////
                
                
                
                
                
                
                
		$requete="SELECT * FROM panier p,circuit c where p.";
		try{
			 $unModele=new filmsModele($requete,array());
			 $stmt=$unModele->executer();
			 $tabRes['listetheme']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listetheme'][]=$ligne;
			}
		}catch(Exception $e){
                    echo $e;
		}finally{
			unset($unModele);
		}
	}
	
	/*function enlever(){
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
	}*/
	//******************************************************
	//Contr�leur
	$action=$_POST['action'];
	switch($action){
		case "enregistrer" :
			enregistrer();
		break;
		case "listerP" :
			listerPanier();
		break;
		
	}
    echo json_encode($tabRes);
?>