$(function() {

	$('.topnav').hide().delay(500).fadeIn(1000);
	//$("header").animate({"down": "15%"}, 6000);
	

	$('.links').eq(1).click(function() {
		//shows the video
		$("iframe").fadeIn();

		//hides everything else
		$("img").hide();
		$("#p1").hide();
		$("#p2").hide();

		//moves video over by 30%
		//$("iframe").animate({"left": "30%"}, 6000);
	})

	$('.links').eq(2).click(function() {
		//shows image
		$("img").fadeIn();

		//hides everything else
		$("iframe").hide();
		$("#p1").hide();
		$("#p2").hide();
		
	})

	$('.links').eq(3).click(function() {
		//shows the paragraphs
		$("p").each(function() {
			$(this).show();
		})

		//hides everything else
		$("iframe").hide();
		$("img").hide();

		//changes text when mouse over
		$("#p1").mouseover(function() {
			$(this).text("Oh yeah. Yeah it still us :(");
		})
		$("#p2").mouseover(function() {
			$(this).text("And an Aries sun");
		})

		//changes text to original when mouse out
		$("#p1").mouseout(function() {
			$(this).text("These fixed transits are kicking my ass. Hover over to discover if I'm still going through it");
		})
		$("#p2").mouseout(function() {
			$(this).text("If you didn't know, I have a Leo rising");
		})
	})

});