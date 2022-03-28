//window.onload = fortuneC();

//function that generates a random fortune and background picture to match
function fortuneC() {

    //setting up the array of fortunes and images
    let fortune;
    let image;
    fortune = ["Happiness may be right under your nose", "A gathering of friends will bring you luck", "A very attractive person has a message for you", "It's better to be alone sometimes", "A dream you have will come true"];
    image = ["happiness.jpg", "friends.jpg", "green_heart.jpg", "alone.jpg", "dream.jpg"];

    //variable that generates our random number
    let rand = Math.floor(Math.random()* fortune.length);
    
    //create string variable that holds your fortune
    let words = fortune[rand];
    let images = image[rand];

    //create variable to hold picture
    let obj = document.getElementById("cookiez");
    //change backgroundImage
    obj.style.backgroundImage = "url('images/" +images+ "')";

    //replaces the paragraph with the fortune
    document.getElementById("cookieWords").innerHTML = words;

}

fortuneC()