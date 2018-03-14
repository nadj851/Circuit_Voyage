<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Munarela</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./js/style.css">
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
                        <li><a href="#" ><span class="glyphicon glyphicon-user"></span> Devenir membre</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Se connecter</a></li>
                        </ul>

                </div>
            </nav>
            <div>
          
            <?php include './caroussel/code.php' ?>
    </body>
</html>