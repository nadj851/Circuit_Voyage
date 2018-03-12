<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./js/style.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/js/bootstrap-select.min.js"></script>
        <script src="./js/global.js"></script>
    </head>
    <body >
        <div>
            <div>
                <img src="./images/logo.png" alt="logo" style="float: left">
            </div>
            <br>
            <br>
            <br>

            <nav class="navbar navbar-default" style="background-color: cornflowerblue;float: left; width: inherit">

                <div class="container-fluid" >

                    <ul class="nav navbar-nav" >
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
                        <li><a id="modal_trigger" href="#modal" class="btn"><span class="glyphicon glyphicon-user"></span> Devenir membre</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Se connecter</a></li>
                        <li></li>
                    </ul>

                </div>
            </nav>
            <div>
                <select class="selectpicker" data-width="fit">
                    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                    <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                </select>


                
                <a id="modal_trigger" href="#modal" class="btn">Click here to Login or register</a>

                <div id="modal" class="popupContainer" style="display:none;">
                    <header class="popupHeader">
                        <span class="header_title">Login</span>
                        <span class="modal_close"><i class="fa fa-times"></i></span>
                    </header>

                    <section class="popupBody">
                        <!-- Social Login -->
                        <div class="social_login">
                            <div class="">
                                <a href="#" class="social_box fb">
                                    <span class="icon"><i class="fa fa-facebook"></i></span>
                                    <span class="icon_title">Connect with Facebook</span>

                                </a>

                                <a href="#" class="social_box google">
                                    <span class="icon"><i class="fa fa-google-plus"></i></span>
                                    <span class="icon_title">Connect with Google</span>
                                </a>
                            </div>

                            <div class="centeredText">
                                <span>Or use your Email address</span>
                            </div>

                            <div class="action_btns">
                                <div class="one_half"><a href="#" id="login_form" class="btn">Login</a></div>
                                <div class="one_half last"><a href="#" id="register_form" class="btn">Sign up</a></div>
                            </div>
                        </div>

                        <!-- Username & Password Login form -->
                        <div class="user_login">
                            <form>
                                <label>Email / Username</label>
                                <input type="text" />
                                <br />

                                <label>Password</label>
                                <input type="password" />
                                <br />

                                <div class="checkbox">
                                    <input id="remember" type="checkbox" />
                                    <label for="remember">Remember me on this computer</label>
                                </div>

                                <div class="action_btns">
                                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                                    <div class="one_half last"><a href="#" class="btn btn_red">Login</a></div>
                                </div>
                            </form>

                            <a href="#" class="forgot_password">Forgot password?</a>
                        </div>

                        <!-- Register Form -->
                        <div class="user_register">
                            <form>
                                <label>Full Name</label>
                                <input type="text" />
                                <br />

                                <label>Email Address</label>
                                <input type="email" />
                                <br />

                                <label>Password</label>
                                <input type="password" />
                                <br />

                                <div class="checkbox">
                                    <input id="send_updates" type="checkbox" />
                                    <label for="send_updates">Send me occasional email updates</label>
                                </div>

                                <div class="action_btns">
                                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                                    <div class="one_half last"><a href="#" class="btn btn_red">Register</a></div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

            <?php include './caroussel/code.php' ?>
    </body>
</html>