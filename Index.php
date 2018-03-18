<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Munarela</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./js/style.css">
        <script src="js/main.js" type="text/javascript"></script>
        <script src="./js/global.js"></script>
        <script src="participants/participantsControleurVue.js" type="text/javascript"></script>
        <script src="participants/participantsRequetes.js" type="text/javascript"></script>
        <script src="Thematique/ThematiqueControleurVue.js" type="text/javascript"></script>
        <script src="Thematique/ThematiqueRequetes.js" type="text/javascript"></script>
        
   
    
    <link rel="stylesheet" href="Untitled_fichiers/ionicons.css">
    <link rel="stylesheet" href="Untitled_fichiers/footer-servitech.css">
    <link rel="stylesheet" href="Untitled_fichiers/aos.css">
    

    </head>

    <body onload="lister()">
        <div>
            <div style="display: inline">
                <img src="./images/logo.png" alt="logo" style="float: left">
            </div>
            <br>
            <br>
            <br>


            <nav class="navbar" style="background-color: cornflowerblue;float: left; width:80%">
                <div class="container">
                    <div class="navbar-header">
                        <div class="container-fluid" >

                            <ul class="nav navbar-nav " >
                                <li class="active" ><a href="#"><span class="glyphicon glyphicon-home" style="font-size: 25px; color: white"></span></a></li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Circuits <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Circuit-1</a></li>
                                        <li><a href="#">Circuit-2</a></li>
                                        <li><a href="#">Circuit-3</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Thémes <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Théme-1</a></li>
                                        <li><a href="#">Théme-2</a></li>
                                        <li><a href="#">Théme-3</a></li>

                                    </ul>
                                </li>
                                <li><a href="#">Nous contacter</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#" ><span class="glyphicon glyphicon-user"></span> Devenir membre</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Se connecter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <br>    <br>
                <?php include './caroussel/code.php' ?>


                <br>    <br>


                <div class="container-fluid">
                    <div class="row">

                       <div class="col-md-2 col-md-12">
                            <div id="get_cat">
                            </div>
                           <div class="nav nav-pills nav-stacked">
                                <li class="active"><a href="#"><h4>Categories</h4></a></li>
                                <li><a href="#" class='category' cid='ACTION'>Action</a></li>
                                <li><a href="#"class='category' cid='DRAME'>Drame at répertoire</a></li>
                                <li><a href="#"class='category' cid='COMEDIE'>Comédie</a></li>
                                <li><a href="#"class='category' cid='SCIENCE FICTION'>Science-ﬁction</a></li>
                                <li><a href="#"class='category' cid='HORREUR'>Horreur</a></li>
                                <li><a href="#"class='category' cid='SUSPENSE'>Suspense</a></li> 
                                <li><a href="#"class='category' cid='POUR LA FAMILLE'>Pour la famille</a></li>
                                <li><a href="#"class='category' cid='POUR LA FAMILLE'>test</a></li>  


                            </div> 
<div class="nav nav-pills nav-stacked">
                                <li class="active"><a href="#"><h4>Categories</h4></a></li>
                                <li><a href="#" class='category' cid='ACTION'>Action</a></li>
                                <li><a href="#"class='category' cid='DRAME'>Drame at répertoire</a></li>
                                <li><a href="#"class='category' cid='COMEDIE'>Comédie</a></li>
                                <li><a href="#"class='category' cid='SCIENCE FICTION'>Science-ﬁction</a></li>
                                <li><a href="#"class='category' cid='HORREUR'>Horreur</a></li>
                                <li><a href="#"class='category' cid='SUSPENSE'>Suspense</a></li> 
                                <li><a href="#"class='category' cid='POUR LA FAMILLE'>Pour la famille</a></li>
                                <li><a href="#"class='category' cid='POUR LA FAMILLE'>test</a></li>  


                            </div> 


                        </div>
                        
                       
                        <div class="col-md-10 col-md-12">
                            <div class="row">


                                <div class="col-md-12 col-md-12" id="messages">
                                </div>


                            </div>
                            <div class="panel panel-success">
                                <div class="panel-heading">Tous les Themes</div>
                                <div class="panel-body">
                                    <div id="get_result">

                           

                                        
                                        
     <!--
             <div class="col-md-4 col-md-push-4">
               
            <form id="formEnregthems">
                <h3>Ajouter une thematique</h3>
                <div class="form-group">
                    <label for="nom">nom:</label>
                    <input type="text" class="form-control" id="nom" name="nom">
                </div>

                <div class="form-group">
                    <label for="description">description:</label>
                    <input type="text" class="form-control" id="description" name="description">
                </div>
                            
                
                <div class="form-group">
                    <label for="pochette">image:</label>
                    <input type="file" class="form-control-file" id="pochette" name="pochette" aria-describedby="fileHelp">
                </div>
               <input type="button" class="btn btn-primary" value="Ajouter" onClick="enregistrer();"><br><br>
                            
            </form>
                            </div>  
                   
-->
                        
                        
                        
                        
                        <!--onload="lister()"
                                        <input type="button" class="btn" value="Ajouter participants" onClick=" $('#contenuParticpants').show();">
                                        <br>
                                        <br>
                                        <div class="container-fluid" >
                                            <form id="contenuParticpants"class="form-group row" style="display: none">
                                                <div class="container" style="width: 40% ; float: left; margin-left: 20px" >
                                                    <div class="form-group row">
                                                        <label for="nomParticipant" class="col-sm-2 col-form-label">Nom</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" id="nomParticipant" name="nomParticipant" placeholder="Entrer nom du participant" required>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="prenomParticipant" class="col-sm-2 col-form-label">Prénom</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" id="prenomParticipant" name="prenomParticipant" placeholder="Entrer prénom    du participant" required>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="sexeParticipant" class="col-sm-2 col-form-label">Sexe</label>
                                                        <div class="col-sm-10" >
                                                            <select class="form-control" id="sexeParticipant" name="sexeParticipant" required>
                                                                <option></option>
                                                                <option>Femme</option>
                                                                <option>Homme</option>
                                                                <option>Autre</option>
                                                            </select>    
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="courielParticipant" class="col-sm-2 col-form-label">Couriel</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" id="courielParticipant" name="courielParticipant" placeholder="Entrer courriel du participant" required>
                                                        </div>
                                                    </div>


                                                    <div class="form-group row">
                                                        <label for="memeAdresse" class="col-sm-2 col-form-label">Même adresse</label>
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="memeAdresse" id="oui" value="option1" checked>
                                                                <label class="form-check-label" for="exampleRadios1">Oui</label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="memeAdresse" id="non" value="option2" >
                                                                <label class="form-check-label" for="exampleRadios1">Non</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="nomParticipant" class="col-sm-2 col-form-label">Pays</label>
                                                        <div class="col-sm-10">
                                                            <select name="country" class="form-control"  id="sexeParticipant" name="paysParticipant" required>
                                                                <option value="">Pays...</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AG">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AG">Antigua &amp; Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AA">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BL">Bonaire</option>
                                                                <option value="BA">Bosnia &amp; Herzegovina</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="BC">British Indian Ocean Ter</option>
                                                                <option value="BN">Brunei</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="IC">Canary Islands</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="CD">Channel Islands</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CI">Christmas Island</option>
                                                                <option value="CS">Cocos Island</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="CC">Comoros</option>
                                                                <option value="CG">Congo</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="CT">Cote D'Ivoire</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CB">Curacao</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="TM">East Timor</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FA">Falkland Islands</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="GF">French Guiana</option>
                                                                <option value="PF">French Polynesia</option>
                                                                <option value="FS">French Southern Ter</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GB">Great Britain</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GP">Guadeloupe</option>
                                                                <option value="GU">Guam</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HW">Hawaii</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IA">Iran</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IR">Ireland</option>
                                                                <option value="IM">Isle of Man</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="NK">Korea North</option>
                                                                <option value="KS">Korea South</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KG">Kyrgyzstan</option>
                                                                <option value="LA">Laos</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MO">Macau</option>
                                                                <option value="MK">Macedonia</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MQ">Martinique</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="ME">Mayotte</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="MI">Midway Islands</option>
                                                                <option value="MD">Moldova</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="NA">Nambia</option>
                                                                <option value="NU">Nauru</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="AN">Netherland Antilles</option>
                                                                <option value="NL">Netherlands (Holland, Europe)</option>
                                                                <option value="NV">Nevis</option>
                                                                <option value="NC">New Caledonia</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NW">Niue</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PW">Palau Island</option>
                                                                <option value="PS">Palestine</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PO">Pitcairn Island</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="ME">Republic of Montenegro</option>
                                                                <option value="RS">Republic of Serbia</option>
                                                                <option value="RE">Reunion</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="NT">St Barthelemy</option>
                                                                <option value="EU">St Eustatius</option>
                                                                <option value="HE">St Helena</option>
                                                                <option value="KN">St Kitts-Nevis</option>
                                                                <option value="LC">St Lucia</option>
                                                                <option value="MB">St Maarten</option>
                                                                <option value="PM">St Pierre &amp; Miquelon</option>
                                                                <option value="VC">St Vincent &amp; Grenadines</option>
                                                                <option value="SP">Saipan</option>
                                                                <option value="SO">Samoa</option>
                                                                <option value="AS">Samoa American</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="ST">Sao Tome &amp; Principe</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="OI">Somalia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="SZ">Swaziland</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="TA">Tahiti</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TT">Trinidad &amp; Tobago</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TU">Turkmenistan</option>
                                                                <option value="TC">Turks &amp; Caicos Is</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB">United Kingdom</option>
                                                                <option value="US">United States of America</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="VS">Vatican City State</option>
                                                                <option value="VE">Venezuela</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="VB">Virgin Islands (Brit)</option>
                                                                <option value="VA">Virgin Islands (USA)</option>
                                                                <option value="WK">Wake Island</option>
                                                                <option value="WF">Wallis &amp; Futana Is</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="ZR">Zaire</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="villeParticipant" class="col-sm-2 col-form-label">Ville</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" id="villeParticipant" name="villeParticipant" placeholder="Entrer ville du participant">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="codePostalParticipant" class="col-sm-2 col-form-label">Code Postal</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" class="form-control" id="codePostalParticipant" name="codePostalParticipant" placeholder="Entrer code postal du participant">
                                                        </div>
                                                    </div>
                                                </div>   

                                                <div class="container" style="width: 40% ; float: left; margin-left: 60px" >
                                                    <label for="nomParticipant" class="col-sm-2 col-form-label" style=" width: 100%; float: left">Informations sur le passeport</label>
                                                    <br><br>
                                                    <div class="form-group row" >
                                                        <label for="numeroPasseport" class="col-sm-2 col-form-label titrepass" >Numéro</label>
                                                        <div class="col-sm-10 contenupass" >
                                                            <input type="text" class="form-control " id="numeroPasseport" name="numeroPasseport" placeholder="Entrer Numéro du passeport" required>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row" >
                                                        <label for="dateDelPasseport" class="col-sm-2 col-form-label titrepass" >Date délivrance</label>
                                                        <div class="col-sm-10 contenupass" >
                                                            <input type="text" class="form-control" id="dateDelPasseport" name="dateDelPasseport" placeholder="Entrer Date de délivrance du passeport" required>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row" >
                                                        <label for="dateExpPasseport" class="col-sm-2 col-form-label titrepass">Date expiration</label>
                                                        <div class="col-sm-10 contenupass">
                                                            <input type="text" class="form-control" id="dateExpPasseport" name="dateExpPasseport" placeholder="Entrer date dèxpération du passeport" required>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row" >
                                                        <label for="delivrerAExpPasseport" class="col-sm-2 col-form-label titrepass">Délivré à</label>
                                                        <div class="col-sm-10 contenupass">
                                                            <input type="text" class="form-control" id="delivrerAExpPasseport" name="delivrerAExpPasseport" placeholder="Entrer Numéro du passeport" required>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row" >
                                                        <label for="nationalite" class="col-sm-2 col-form-label titrepass">Nationalité</label>
                                                        <div class="col-sm-10 contenupass">
                                                            <input type="text" class="form-control" id="nationalite" name="nationalite" placeholder="Entrer la nationalité" required>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>













                                        </div>
-->
                                    </div>
                                   
                                </div>
                                 <div class="panel-footer">&copy; 2018</div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>







<div data-aos="zoom-in" class="footer-dark degra-azul aos-init aos-animate">
 <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-3 item" style="font-family:Lato, sans-serif;">
                        <h3>Servitech </h3>
                        <h3><img src="Untitled_fichiers/separa_34.png" id="imagen-separa"> </h3>
                        <ul>
                            <li><a href="#">Somos una empresa que&nbsp;brinda soluciones integralesen el área de tecnología.&nbsp; </a></li>
                            <li><a href="#">Reparación, mantenimiento&nbsp;de computadores, celularestablets, impresoras , soporte&nbsp;técnico, cableado estructurado. </a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item" style="font-family:Lato, sans-serif;">
                        <h3>Donde estamos</h3>
                        <h3><img src="Untitled_fichiers/separa_34.png" id="imagen-separa"> </h3>
                        <ul>
                            <li><i class="fa fa-map-marker espacio-ico-01"></i><a href="#">Dirección Carrera&nbsp;48 # 16 Sur 43 Int 102,, Cerca al ropmpoi la Aguacatala, Medellin -Poblado.</a></li>
                            <li><i class="fa fa-phone espacio-ico-01"></i><a href="#">Teléfono: 3224993Movil: 310-3736281 </a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item" style="font-family:Lato, sans-serif;">
                        <h3>Servitech </h3>
                        <h3><img src="Untitled_fichiers/separa_34.png" id="imagen-separa"> </h3>
                        <ul>
                            <li><a href="#">Mantenimiento <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                            <li><a href="#">ReparaciónPC - portatiles <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                            <li><a href="#">Reparación Impresoras <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                            <li><a href="#">Redes <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                            <li><a href="#">Reparación Celulares <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                            <li><a href="#">MantenimInsta. Cámaras Seguridad <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item" style="font-family:Lato, sans-serif;">
                        <h3>Boletines </h3>
                        <h3><img src="Untitled_fichiers/separa_34.png" id="imagen-separa"> </h3>
                        <ul>
                            <li><a href="#">Mantenimiento <i class="fa fa-arrow-circle-right espacio-ico-01"></i></a></li>
                        </ul>
                        <form class="form-inline" method="post" style="margin-top:19px;">
                            <div class="form-group"><input class="form-control" name="email" placeholder="Your Email" type="email"></div>
                            <div class="form-group"><button class="btn btn-primary" type="submit">Subscribe </button></div>
                        </form>
                    </div>
                    <div class="col-sm-4 col-md-12 item social" style="padding-top:30px;"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">By Monarela© 2018</p>
            </div>
        </footer>
    
</div>




    <script src="Untitled_fichiers/jquery-3.js"></script>
    <script src="Untitled_fichiers/bootstrap.js"></script>
    <script src="Untitled_fichiers/bs-animation.js"></script>
    <script src="Untitled_fichiers/aos.js"></script>
    <script id="bs-live-reload" data-sseport="3478" data-lastchange="1521367081176" src="Untitled_fichiers/livereload.js"></script>


<script src="Untitled_fichiers/analytics.htm"></script>

                    </body>
                    </html>