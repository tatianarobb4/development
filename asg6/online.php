<!DOCTYPE html>
<html>
    <head>
        <title>Tatiana's Online Shop | Assignment 6</title>

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
            <h2>Tatiana's Online Shop LLC Receipt: </h2>
            <p class="extra">
                Thank you for shopping with Tatiana's Online Shop LLC! We have now expanded our merchandise to more than used books!
                Let your friends know we sell headphones now. Thanl you :) A confirmation of your order has been sent to your email.
            </p>

            <div class="ppp">
                <?php
                    //variables with prices
                    $headphones_price = 40;
                    $cards_price = 15.35;

                    //extract all of the info
                    $name = $_POST["name"];
                    $email = $_POST["email"];
                    $product = $_POST["products"];
                    $quan = $_POST["quantity"];

                    //variable for total
                    $total = 0;

                    //calculate total depending on product and quantity
                    if ($product == "headphones"){
                        $total = $headphones_price * $quan;
                    } else {
                        $total = $cards_price * $quan;
                    }

                    foreach($_POST as $key => $value) {
                        print (" <li> $key : $value ");
                    }

                    echo("<li>Your total is: $$total");
                ?>
            </div>
        </div>

        <!--footer-->
        <footer>
                <p>© 2021 Tatiana Robb</p>
            </footer>
    </body>
</html>