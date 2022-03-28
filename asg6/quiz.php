<!DOCTYPE html>
<html>
    <head>
        <title>Quiz of Favorites | Assignment 6</title>

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
            <h2>Quiz of Favorites Results: </h2>
            <p class="extra">
                Thank you for participating in my quiz of favorites! Not all of my favorites of course, just some. How do you think you did?
            </p>

            <div class="ppp">
                <?php
                    //array of answers
                    $answers = array("vanilla", "css", "sims");

                    //variable to store correct number of answers
                    $correct = 0;

                    //variables to store the questions
                    $question1 = $_POST['q1'];
                    $question2 = $_POST['q2'];
                    $question3 = $_POST['q3'];

                    //check to see if q1 is correct
                    if ($question1 == $answers[0]) {
                        echo("<p>Question 1: $question1, correct");
                        $correct++;
                    }else {
                        echo("<p>Question 1: $question1, incorrect, $answers[0]");
                    }

                    //check to see if q2 is correct
                    if ($question2 == $answers[1]) {
                        echo("<p>Question 2: $question2, correct");
                        $correct++;
                    }else {
                        echo("<p>Question 2: $question2, incorrect, $answers[1]");
                    }

                    //check to see if q3 is correct
                    if ($question3 == $answers[2]) {
                        echo("<p>Question 3: $question3, correct");
                        $correct++;
                    }else {
                        echo("<p>Question 3: $question3, incorrect, $answers[2]");
                    }
                    

                    //variable to hold the score
                    $score = 100 * ($correct / 3);
                    $score = number_format($score, 2, '.', ' ');
                    
                    //display score
                    echo("<p>Your score is: $score%");
                ?>
            </div>
        </div>

        <!--footer-->
        <footer>
                <p>© 2021 Tatiana Robb</p>
        </footer>
    </body>
</html>