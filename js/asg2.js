
//this is the function for part 1. Changes three things on the page
function change() {

    //body color
    document.body.style.backgroundColor = "#FEE8D3";

    //access object div with id = problemOne
    let design = document.getElementById("problemOne");

    //change problemOne style
    design.style.padding = "20px";

    //access object with id section1
    let section1 = document.getElementById("section1");

    //change section1 style
    section1.style.backgroundColor = "#EFCBBB";

    //access object with id section3
    let section3 = document.getElementById("section3");

    //change section2 style
    section3.style.backgroundColor = "#F3C19E";

}

//function for part 2. Randomly picks a prize
function randPrize() {

    //setting up the array of prizes
    let prize;
    prize = ["0.38 Muji pens", "monthly unlimited metrocard", "an iPad with the pen", "a real nice rug", "big mirror"];

    //variable that holds the number of prizes
    let numPrize = prize.length;

    //variable that generates our random number
    let rand = Math.floor(Math.random()* numPrize);
    
    //create string variable that holds your prize
    let content = "Your prize is " + prize[rand];

    //replaces the paragraph with the prize
    document.getElementById("prize").innerHTML = content;

}

//function for part 3. Swaps the two paragraphs continuously when clicked
function swapT() {

    //define variables that hold the paragraphs
    let paragraph1 = document.getElementById("p1");
    let paragraph2 = document.getElementById("p2");

    //create temp variable that holds paragraph1
    let temp = paragraph1.innerHTML;

    //swap the paragraphs
    paragraph1.innerHTML = paragraph2.innerHTML;
    paragraph2.innerHTML = temp;
    
}

//function for part 4. Swaps the two images continuously when clicked
function swapImg() {

    //define variables that hold the images
    let image1 = document.getElementById("img1");
    let image2 = document.getElementById("img2");

    //create temp variable that holds image1
    //we're getting the src bb
    let temp = image1.src;

    //swap the images
    image1.src = image2.src;
    image2.src = temp;

}
