function holidayCalendar() {

    //set variables for the beginning and end of school year
    var schoolStart = new Date("09/01/2021");
    var schoolEnd = new Date("08/31/2022");

    //get date from input
    let user = document.getElementById("holiday").value;

    //create date object of user input
    var holiday = new Date(user);

    //extract the day, month, and year
    let date = holiday.getUTCDate();
    let month = holiday.getUTCMonth() + 1;
    let year = holiday.getUTCFullYear();

    //create new date object with UTC things
    var trueDate = new Date("'" + month + "/" + date + "/" + year + "'");

    //check if user date is within the school year
    if (trueDate >= schoolStart && trueDate <= schoolEnd) {
        isHoliday(trueDate);
    }
    else {
        document.getElementById("output").textContent = "this date is not within the 2021-2022 school year";
    }
}

function isHoliday(holi) {
    //set variables for nyu holidays
    var labor = new Date("09/06/2021");
    var fall = new Date("10/11/2021");
    var thanksStart = new Date("11/25/2021");
    var thanksEnd = new Date("11/26/2021");
    var christStart = new Date("12/23/2021");
    var christEnd = new Date("01/23/2022");
    var president = new Date("02/21/2022");
    var springStart = new Date("03/14/2022");
    var springEnd = new Date("03/20/2022");

    //extract day, month, and year again
    let day = holi.getUTCDate();
    let month = holi.getUTCMonth() + 1; 
    let year = holi.getUTCFullYear();

    let images;
    images = ["labor.jpg", "indigenous.jpg", "thanksgiving.jpg", "winter.jpg", "president.jpg", "spring.jpeg", "sad.jpg"];

    if (holi.getTime() == labor.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's Labor Day!";
        document.getElementById("pic").src = "images/" + images[0];
        document.getElementById("caption").textContent = "Image found on: https://happyeventday.com/happy-labor-day-quotes/";
    }

    else if (holi.getTime() == fall.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's Indigenous Peoples Day!";
        document.getElementById("pic").src = "images/" + images[1];
        document.getElementById("caption").textContent = "Image found on: https://www.isd623.org/news/archive/202010/celebrating-indigenous-peoples-day";
    }

    else if (holi.getTime() == thanksStart.getTime() || holi.getTime() == thanksEnd.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's Thanksgiving Break!";
        document.getElementById("pic").src = "images/" + images[2];
        document.getElementById("caption").textContent = "Image found on: https://www.spoonflower.com/en/fabric/5613360-pies-baking-thanksgiving-autumn-food-kitchen-pumpkin-pie-holiday-by-andrea_lauren";
    }

    else if (holi.getTime() >= christStart.getTime() && holi.getTime() <= christEnd.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's Winter Break! Merry Chrysler and Happy New Year";
        document.getElementById("pic").src = "images/" + images[3];
        document.getElementById("caption").textContent = "Image found on: https://www.wattpad.com/";
    }

    else if (holi.getTime() == president.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's President's Day! That's cool I guess";
        document.getElementById("pic").src = "images/" + images[4];
        document.getElementById("caption").textContent = "Image found on: https://weheartit.com/entry/320505972";
    }

    else if (holi.getTime() >= springStart.getTime() && holi.getTime() <= springEnd.getTime()) {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is a NYU holiday. It's Spring Break! Glad we have one this year";
        document.getElementById("pic").src = "images/" + images[5];
        document.getElementById("caption").textContent = "Image found on: https://careerservices.upenn.edu/blog/2020/03/06/enjoy-your-spring-break/";
    }

    else {
        document.getElementById("output").textContent = month + "/" + day + "/" + year + " is NOT a NYU holiday. I wish it was...";
        document.getElementById("pic").src = "images/" + images[6];
        document.getElementById("caption").textContent = "Image found on: https://www.pinterest.com/pin/331788697556669381/";
    }

}

