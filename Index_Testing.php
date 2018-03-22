<?php
include_once 'includes/init.php';
?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta http-equiv='content-type' content='text/html; charset=UTF-8'>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Munarela</title>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <link rel='stylesheet' href='./js/style.css'>
        <script src='js/main.js' type='text/javascript'></script>
        <script src='./js/global.js'></script>
        <link rel='stylesheet' href='css/style.css'>

        <script src='participants/participantsControleurVue.js' type='text/javascript'></script>
        <script src='participants/participantsRequetes.js' type='text/javascript'></script>

        <script src='Thematique/ThematiqueControleurVue.js' type='text/javascript'></script>
        <script src='Thematique/ThematiqueRequetes.js' type='text/javascript'></script>

        <script src='Reservation/ReservationControleurVue.js' type='text/javascript'></script>
        <script src='Reservation/ReservationRequetes.js' type='text/javascript'></script>

        <script src='Utilisateur/UtilisateurControleurVue.js' type='text/javascript'></script>
        <script src='Utilisateur/UtilistauerRequetes.js' type='text/javascript'></script>
        
        <script src='Circuit/CircuitControleurVue.js' type='text/javascript'></script>
        <script src='Circuit/CircuitRequetes.js' type='text/javascript'></script>
        
        <script src='Etape/EtapeControleurVue.js' type='text/javascript'></script>
        <script src='Etape/EtapeRequetes.js' type='text/javascript'></script>
        
        <link rel='stylesheet' href='Untitled_fichiers/ionicons.css'>
        <link rel='stylesheet' href='Untitled_fichiers/footer-servitech.css'>
        <link rel='stylesheet' href='Untitled_fichiers/aos.css'>
        
        <script src='Circuit/CircuitAPIJQuery.js' type='text/javascript'></script>


    </head>

    <body>
        <div>
            <div style='display: inline'>
                <img src='./images/logo.png' alt='logo' style='float: left'>
            </div>
            <br>
            <br>
            <br>


            <nav class='navbar' style='background-color: cornflowerblue;float: left; width:80%'>
                <div class='container'>
                    <div class='navbar-header'>
                        <div class='container-fluid' >
                            <ul class='nav navbar-nav ' >
                                <li class='active' ><a href='#'><span class='glyphicon glyphicon-home' style='font-size: 25px; color: white'></span></a></li>
                                <li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Circuits <span class='caret'></span></a>
                                    <ul class='dropdown-menu'>
                                        <li><a href='#'>Circuit-1</a></li>
                                        <li><a href='#'>Circuit-2</a></li>
                                        <li><a href='#'>Circuit-3</a></li>
                                    </ul>
                                </li>
                                <li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Thémes <span class='caret'></span></a>
                                    <ul class='dropdown-menu'>
                                        <li><a href='#'>Théme-1</a></li>
                                        <li><a href='#'>Théme-2</a></li>
                                        <li><a href='#'>Théme-3</a></li>

                                    </ul>
                                </li>
                                <li><a href='#'>Nous contacter</a></li>
                            </ul>

                            <ul id='devenirMembre' class='nav navbar-nav navbar-right' >
                                <li><a href='#' onClick='formulaireregister();'><span class='glyphicon glyphicon-user'></span> Devenir membre</a></li>

                                <?php if (!logged_in()) : ?>
                                    <li><a href='#' onClick='formulairelogin();'><span class='glyphicon glyphicon-log-in'></span> Se connecter</a></li>
                                <?php else : ?>
                                    <li><a href='#' onClick='logoutU();'>Deconnecter</a></li>
                                    <li><a href=''><?php echo 'Bonjour ' . $_SESSION['email']; ?></a></li>

                                <?php endif; ?>




                                <li> <a href='login.php'><span class='glyphicon glyphicon-shopping-cart'></span>Panier<span class='badge'>0</span></a>  </li>		



                            </ul>


                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <br>    <br>
                <?php include './caroussel/code.php' ?>
                <br>    
                <?php if (logged_in() && $_SESSION['email'] == 'admin@admin.com') : ?>

                    <div style='margin-left:30px;margin-top: 5px;background-color: yellow;font-size: 15px;float:left'><span class='glyphicon glyphicon-cog'></span><a href='lister.php' >Dashboard</a>    </div>							                         


                <?php endif; ?>

                <br>    <br>


                <div class='container-fluid'>
                    <div class='row'>

                        <div class='col-md-2 col-md-12'>
                            <div id='get_cat'>

                                <div class='nav nav-pills nav-stacked'>
                                    <li class='active'><a href='#'><h4>Categories</h4></a></li>
                                    <li><a href='#' class='category' cid='ACTION' onclick='FormulaireR();listerParticipants();infoUser();'>Reservation </a></li>
                                    <li><a href='#' class='category' cid='DRAME' onclick='FormulaireT();'>Thematique</a></li>
                                    <li><a href='#' class='category' cid='COMEDIE'  id='circuitDepart'>Participant</a></li>
                                    <li><a href='#'class='category' cid='SCIENCE FICTION' onclick='lister();'>lister participant</a></li>
                                    <li><a href='#'class='category' cid='HORREUR' onclick='FormulaireCircuit();'>Créer un circuit</a></li>
                                    <li><a href='#'class='category' cid='SUSPENSE'>Suspense</a></li>
                                    <li><a href='#'class='category' cid='POUR LA FAMILLE'>Pour la famille</a></li>
                                    <li><a href='#'class='category' cid='POUR LA FAMILLE'>test</a></li>


                                </div>
                            </div>
                            <div id='get_cat1'>         
                                <div class='nav nav-pills nav-stacked'>
                                    <li class='active'><a href='#'><h4>Categories</h4></a></li>
                                    <li><a href='#' class='category' cid='ACTION'>Action</a></li>
                                    <li><a href='#'class='category' cid='DRAME'>Drame at répertoire</a></li>
                                    <li><a href='#'class='category' cid='COMEDIE'>Comédie</a></li>
                                    <li><a href='#'class='category' cid='SCIENCE FICTION'>Science-?ction</a></li>
                                    <li><a href='#'class='category' cid='HORREUR'>Horreur</a></li>
                                    <li><a href='#'class='category' cid='SUSPENSE'>Suspense</a></li>
                                    <li><a href='#'class='category' cid='POUR LA FAMILLE'>Pour la famille</a></li>
                                    <li><a href='#'class='category' cid='POUR LA FAMILLE'>test</a></li>


                                </div>
                            </div>

                        </div>


                        <div class='col-md-10 col-md-12'>
                            <div class='row'>


                                <div class='col-md-12 col-md-12' id='messages'>
                                </div>


                            </div>
                            <div class='panel panel-success'>
                                <div class='panel-heading'>Tous les Themes</div>
                                <div id='conteneur' class='panel-body'>
                                    <div id='get_result'>


                                        <!--  ici les amis tous  nos resultats  -->        


                                    </div>





                                    

                                </div>
                                <div class='panel-footer'>&copy; 2018</div>
                            </div>
                            <div class='col-md-1'></div>
                        </div>
                    </div>

                    <div data-aos='zoom-in' class='footer-dark degra-azul aos-init aos-animate'>
                        <footer>
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-sm-4 col-md-3 item' style='font-family:Lato, sans-serif;'>
                                        <h3>Servitech </h3>
                                        <h3><img src='Untitled_fichiers/separa_34.png' id='imagen-separa'> </h3>
                                        <ul>
                                            <li><a href='#'>Somos una empresa que&nbsp;brinda soluciones integralesen el área de tecnología.&nbsp; </a></li>
                                            <li><a href='#'>Reparación, mantenimiento&nbsp;de computadores, celularestablets, impresoras , soporte&nbsp;técnico, cableado estructurado. </a></li>
                                        </ul>
                                    </div>
                                    <div class='col-sm-4 col-md-3 item' style='font-family:Lato, sans-serif;'>
                                        <h3>Donde estamos</h3>
                                        <h3><img src='Untitled_fichiers/separa_34.png' id='imagen-separa'> </h3>
                                        <ul>
                                            <li><i class='fa fa-map-marker espacio-ico-01'></i><a href='#'>Dirección Carrera&nbsp;48 # 16 Sur 43 Int 102,, Cerca al ropmpoi la Aguacatala, Medellin -Poblado.</a></li>
                                            <li><i class='fa fa-phone espacio-ico-01'></i><a href='#'>Teléfono: 3224993Movil: 310-3736281 </a></li>
                                        </ul>
                                    </div>
                                    <div class='col-sm-4 col-md-3 item' style='font-family:Lato, sans-serif;'>
                                        <h3>Servitech </h3>
                                        <h3><img src='Untitled_fichiers/separa_34.png' id='imagen-separa'> </h3>
                                        <ul>
                                            <li><a href='#'>Mantenimiento <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                            <li><a href='#'>ReparaciónPC - portatiles <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                            <li><a href='#'>Reparación Impresoras <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                            <li><a href='#'>Redes <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                            <li><a href='#'>Reparación Celulares <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                            <li><a href='#'>MantenimInsta. Cámaras Seguridad <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class='col-sm-4 col-md-3 item' style='font-family:Lato, sans-serif;'>
                                        <h3>Boletines </h3>
                                        <h3><img src='Untitled_fichiers/separa_34.png' id='imagen-separa'> </h3>
                                        <ul>
                                            <li><a href='#'>Mantenimiento <i class='fa fa-arrow-circle-right espacio-ico-01'></i></a></li>
                                        </ul>
                                        <form class='form-inline' method='post' style='margin-top:19px;'>
                                            <div class='form-group'><input class='form-control' name='email' placeholder='Your Email' type='email'></div>
                                            <div class='form-group'><button class='btn btn-primary' type='submit'>Subscribe </button></div>
                                        </form>
                                    </div>
                                    <div class='col-sm-4 col-md-12 item social' style='padding-top:30px;'><a href='#'><i class='icon ion-social-facebook'></i></a><a href='#'><i class='icon ion-social-twitter'></i></a><a href='#'><i class='icon ion-social-snapchat'></i></a><a href='#'><i class='icon ion-social-instagram'></i></a></div>
                                </div>
                                <p class='copyright'>By Monarela© 2018</p>
                            </div>
                        </footer>

                    </div>


<!--    <script src='Untitled_fichiers/jquery-3.js'></script>
    <script src='Untitled_fichiers/bootstrap.js'></script>
    <script src='Untitled_fichiers/bs-animation.js'></script>
    <script src='Untitled_fichiers/aos.js'></script>
    <script id='bs-live-reload' data-sseport='3478' data-lastchange='1521367081176' src='Untitled_fichiers/livereload.js'></script>-->


                    <script src='Untitled_fichiers/analytics.htm'></script>

                    </body>
                    </html>