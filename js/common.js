$(document).ready(function() {

	$(".category").mouseover(function(){
			$(".submenu").show();
		})
	$(".category").mouseout(function(){
		$(".submenu").hide();
	})

//Кнопка button menu
     $(".main_menu_button").click(function() {
    	$(".main_menu ul").slideToggle();
    	return false;
    });

//Sticky header
	// Options
	var options = {
	  offset: 180
	}

	// Create a new instance of Headhesive.js and pass in some options
	var header = new Headhesive('.wr-menu', options);

	//WoW.js

	new WOW().init();

// Accordion
	
	$(".active").click(function(){
		$(".sub_menu li").show();
	
		

	})
	
		
	

});
