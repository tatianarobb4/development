<!DOCTYPE html>
<html>
    <head>
        <title>MadLibs | Assignment 6</title>

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
            <h2>Your MadLibs Madam, Madsir, or Madthem</h2>
            <p class="extra">Here is your MadLibs story thing? I'm not sure what to call it. I hope it's funny. Probably not :(</p>

            <div class="ppp">
                <?php
                    $noun1 = $_POST['noun1'];
                    $noun2 = $_POST['noun2'];
                    $noun3 = $_POST['noun3'];
                
                    $adj1 = $_POST['adj1'];
                    $adj2 = $_POST['adj2'];
                
                    $verb1 = $_POST['verb1'];
                    $verb2 = $_POST['verb2'];
                
                    $num = $_POST['num'];
                    //do float value in seperate line
                
                    echo ("A $num year old $adj1 $noun1 was $verb1 down the street. They encountered a $noun2 on their way to the $noun3. The $adj2 $noun2 was $verb2 in the club! Just sad.");
                ?>
            </div>
        </div>

        <!--footer-->
        <footer>
                <p>© 2021 Tatiana Robb</p>
        </footer>
    </body>
</html>

