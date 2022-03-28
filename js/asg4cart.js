//stuff for the catalop part
let quant = document.getElementById("quantity");
quant.addEventListener("change", total);

let quant2 = document.getElementById("quantity2");
quant2.addEventListener("change", total2);

//trigger thing if yes is checked
let ship = document.getElementById("yes");
ship.addEventListener("click", grandTotal);

//do one for no
let ship2 = document.getElementById("no");
ship2.addEventListener("click", grandTotal);

let products = "";
let subtotal1 = 0;
let subtotal2 = 0;
let totalz = 0;
let qt1 = 0;
let qt2 = 0;

//this is the function to get the total of all products
function total() {
    let price = document.getElementById("price").value;

    qt1 = parseFloat(quant.value);
    if (qt1 > 0) {
        products += "<br>"
        products += "If This World were Mine ";
        products += "<br>"
    }

    subtotal1 = qt1 * parseFloat(price);
    let sub1 = subtotal1.toFixed(2);

    document.getElementById("result").textContent = "subtotal: " + sub1;
    return subtotal1;
}

function total2() {
    //get price2 value
    let price = document.getElementById("price2").value;

    //turn that into a float
    qt2 = parseFloat(quant2.value);
    quantity2 = quant2.value;

    if (qt2 > 0) {
        products += "<br>"
        products += "Waiting to Exhale";
    }

    //get the subtotal
    subtotal2 = qt2 * parseFloat(price);

    //set to two decimals
    let sub2 = subtotal2.toFixed(2);

    //print subtotal
    document.getElementById("result2").textContent = "subtotal: " + sub2;
    return subtotal2;
}

function grandTotal() {
    if (document.getElementById("yes").checked) {
        let shipping = 2.50;
        totalz = (subtotal1 + subtotal2) + shipping;
        let tot = totalz.toFixed(2);
        document.getElementById("grand").textContent = "Your total with shipping: " + tot;
    }
    else {
        totalz = subtotal1 + subtotal2;
        let tot = totalz.toFixed(2);
        document.getElementById("grand").textContent = "Your total: " + tot;
    }
}


//stuff for the receipt and validation
let obj= document.forms[0];
obj.addEventListener("submit", receipt);

function receipt(e) {
    // to stop form from submitting to new page (stays anchored on the same page so you can see the output)
    e.preventDefault();

    let len = obj.elements.length;
    let text =  "<hr><h1> Thanks for your purchase today! Your receipt is below: </h1>";


    // iterate through all of the form elements making sure there is a value entered for each element and validate zip code, and email
    for (let i=0; i < len -2; i++) {

        if ((obj.elements[i].value == "") || (obj.elements[i].value == null)) {
	        alert("Make sure to input " + obj.elements[i].name);

	        // bring focus to the element that has no value
	        obj.elements[i].focus();

	        // selects the element that has no value
	        obj.elements[i].select();

	        // highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
	        obj.elements[i].style.backgroundColor="red";

	        // return so nothing would be done as user needs to enter the missing value
	        return;
        }

        // check if email has '@'
        else if ((i == 2 ) && (obj.elements[i].value.indexOf("@") == -1)) {
	        alert("Your email should include the '@' for this " + obj.elements[i].name);
	        obj.elements[i].focus();
	        obj.elements[i].select();
	        obj.elements[i].style.backgroundColor="red";
	        return;
        }

        // check if email has a '.'
        else if ((i == 2 ) &&  (obj.elements[i].value.indexOf(".") == -1)) {
	        alert("Your email should include the '.' for this " + obj.elements[i].name);
	        obj.elements[i].focus();
	        obj.elements[i].select();
	        obj.elements[i].style.backgroundColor="red";
	        return;
        }

        // check if zipcode has five digits
        else if ((i == 3 ) && (obj.elements[i].value.length != 5)  ) {
	        alert("Make sure to input the 5 digits for " + obj.elements[i].name);
	        obj.elements[i].focus();
	        obj.elements[i].select();
	        obj.elements[i].style.backgroundColor="red";
	        return;
        }

        else {
            //print products purchased, quantity, date, subtotal, grandtotal, creditcard number like xxxxxxx1234
        }
    }
    //print products purchased
    text += "Book(s) purchased: " + products;
    text += "<p>";

    //quantity
    text += "Quantity: " + (qt1 + qt2);
    text += "<p>";

    //print current date
    var today = new Date();
    let date = today.getUTCDate();
    let month = today.getUTCMonth()+ 1;
    let year = today.getUTCFullYear();
    text += "Date purchased: " + month + "/" + date + "/" + year;
    text += "<p>";

    //subtotal
    text += "Subtotal: " + (subtotal1 + subtotal2);
    text += "<p>";

    //grand total 
    text += "Total: " + totalz;
    text += "<p>";

    //card number
    let card = hideCard(obj.elements[7].value);
    text += "Card: " + card;

    // display the output inside the element with id=demo
    document.getElementById("demo").innerHTML= text;
    console.log(text);
}

function hideCard(card) {
    return card.replace(/.(?=.{4})/g, "X");
  }
