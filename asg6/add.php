<!DOCTYPE html>
<html>
    <head>
        <title>Calculator | Assignment 6</title>

        <meta charset="utf-8" />

        <!--global css file-->
        <link rel="stylesheet" type="text/css" href="../css/main.css" />

        <!--Media query for differing browser widths-->
        <link rel="stylesheet" media="only screen and (max-width: 700px)" href="../css/small.css" />

        <!--Prevent smartphones from scaling the page-->
        <meta name="viewright" content="initial-scale=1" />
    </head>

    <body>
        <header>
            <div class="wrapper">
                <div class="title-nav">
                    <div class="mainTitle">
                        <h3>Tatiana's LLC</h3>
                    </div>
                    <!--My Links!-->
                    <div class="topnav, navi">
                        <ul>
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="index.html">Ass 6</a></li>
                            <li><a href="../contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <!--smile!-->
                <div class="logo">
                    <p>:)</p>
                </div>
            </div>    
        </header>

        <div class="back">
            <h2>Your calculations are below: </h2>
            <p class="extra">
                Thank you for ordering calculations at Tatiana's Calculator LLC. These calculations can make or break um... humanity!! 
                Please use them wisely.
            </p>

            <div class="ppp">
                <?php
                    //do two numbers and um do the math on them
                    $num1 = $_POST['num1'];
                    $num1 = floatval($num1);
                    $num2 = $_POST['num2'];
                    $num2 = floatval($num2);
                
                    $operator = $_POST['operator'];
                    $total;

                    //check to see what operator it is
                    if ($operator == '+')
                        $total = $num1 + $num2;

                    if ($operator == '-')
                        $total = $num1 - $num2;

                    if ($operator == '*')
                        $total = $num1 * $num2;

                    if ($operator == '/')
                        $total = $num1 / $num2;

                
                    //display the total and stuff
                    echo ("$num1 $operator $num2 = $total");
                ?>
            </div>
        </div>

        <!--footer-->
        <footer>
                <p>© 2021 Tatiana Robb</p>
        </footer>
    </body>
</html>