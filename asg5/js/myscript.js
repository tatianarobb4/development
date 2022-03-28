$(function() {
    //for the changing element part
    $("#change").click(function() {
        $(".highlight").css("background-color", "yellow");
        $("#special").css("color","green");
        $(".highlight p").each(function() {
            $(this).css("background-color", "#573D1C");
            $(this).css("color", "white");
            $(this).css("margin", "auto");
            $(this).css("text-align", "center");
            alert($(this).text());
        });
    });

    //for the picture part
    $("#hide").click(function(){
        $(".manipulation img").hide();
    });

    $("#show").click(function(){
        $(".manipulation img").show();
    });

    $("#fade").click(function(){
        $(".manipulation img").fadeOut("slow");
    });

    //animation part
    $("#animate").on('click', function() {
        // animate the div using movement, opacity, hight and width
        $("#animation").animate({
            left: '100px',
            opacity: '0.3',
            height: '+=100px',
            width: '+=100px'
         });
    });


    text = " ";
    //username and password
    $("#submit").click(function() {
        
        $uname = document.getElementById("uname");
        if ($uname.value == "" || $uname.value == null){
            alert("Please enter value for this element");
            $("#uname").css("background-color", "yellow");
            return;
        }
  
        $pword = document.getElementById("pword");
        if ($pword.value == "" || $pword.value == null){
            alert("Please enter value for this element");
            $("#pword").css("background-color", "yellow");
            return;
        }
  
        else {
            $("#demo").text(text += ('username: ' + $uname.value));
            $("#demo").html(text += '<p>');
            $("#demo").text(text += ('password: ' + $pword.value));
            $("#demo").html(text += '<p>');
        }
       
        
    });
        
    
        
    
});