//barre de navigation 
$(window).scroll(function(){
  var scroll = $( window ).scrollTop();
  var win_height = $( "header" ).height();
  var $myNavBar = $('#navigation');
  var $navElt = $('.navbar-nav a');
  var $navEltHover = $('.navbar-nav a:hover');
  var heightClient = win_height-scroll;
 if (heightClient<=0){
  	$myNavBar.css({ "background-color": "#F3ECD9" });
  	$navElt.css({ "color": "#647277" });
  }
  if (heightClient>0){
  	$myNavBar.css({ "background-color": "transparent" });
  	$navElt.css({ "color": "#FCB3B3" });
  }
});

//gestion de la navbar en petit format avec le bouton
$(document).ready(function() {   
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var navig = $('#navig');

    sideslider.click(function(event){
    	$(sel).toggleClass('in');
    	navig.removeClass('navbar-fixed-top');

	

    });
});




