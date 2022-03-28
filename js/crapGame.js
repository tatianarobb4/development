function crapGame() {
    //get id thing for die1, die2, and result
    let bet = document.getElementById("bet").value;

    // rolling each die randomelly 
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // sum of rolling 2 dice
    let total = die1 + die2;

    //array with the die pictures
    let die;
    die = ["dice_1.gif", "dice_2.gif", "dice_3.gif", "dice_4.gif", "dice_5.gif", "dice_6.gif"];

    //display die 1 and 2
    document.getElementById("die1").textContent = "Die 1: " + die1;
    document.getElementById("pic1").src = "images/" + die[die1 - 1];

    document.getElementById("die2").textContent = "Die 2: " + die2;
    document.getElementById("pic2").src = "images/" + die[die2 - 1];

    //display total
    document.getElementById("result").textContent = "The total is: " + total;

    //win or lose?
    if (total == 7 || total == 11) {
        document.getElementById("winning").textContent = "You won!"
    }
    else if (total == 2 || total == 3 || total == 12) {
        document.getElementById("winning").textContent = "You crapped out AND lost $" + bet;
    }
    else {
        document.getElementById("winning").textContent = "You win some, you lose some"
    }
}

