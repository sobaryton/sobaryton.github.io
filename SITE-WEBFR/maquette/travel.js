//Management of the navbar in the small formats with the hamburger like button
/*var $boutonMenu = $('.navbar-toggle');
var $menuDeroulant = $('.navbar-nav');
$menuDeroulant.hide();
$boutonMenu.on ("click", function(){
	$menuDeroulant.toggle();
});
$(document).ready(function() {
	var sideslider = $('[data-toggle=collapse]');
	var sel = sideslider.attr('data-target');
	var navig = $('#myNavbar');

	sideslider.click(function(){
		$(sel).toggleClass('in');
		navig.css("z-index:5");
	});
});*/


//Carousel with the pictures
var $carou1 = $('#carou1');
var $carou2 = $('#carou2');
var $fleche = $('.fleche');
$(function($) {
	$carou2.hide();
	$carou1.show();
	$fleche.on ("click", function(){
		$carou2.toggle("fast");
		$carou1.toggle("fast");
	});

});

//Services pages, work on the hover for the plane, heart and star

$(function () {
  var $avionInit = $('#avionVisible');
  var $avion = $('#avion');
  var $avionHover = $('#avionHover');
  $avionHover.hide();
  $avionInit.show();

  $avion.mouseenter(function(){
    $avionInit.hide("slow");
    $avionHover.show("slow");

    $avion.mouseleave(function(){
      $avionInit.show("slow");
      $avionHover.hide("slow");
    });
  });
  
});

$(function () {
  var $coeurInit = $('#coeurVisible');
  var $coeur = $('#coeur');
  var $coeurHover = $('#coeurHover');
  
  $coeurHover.hide();
  $coeurInit.show();

  $coeur.mouseenter(function(){
    $coeurInit.hide("slow");
    $coeurHover.show("slow");

    $coeur.mouseleave(function(){
      $coeurInit.show("slow");
      $coeurHover.hide("slow");
    });
  });
  
});
$(function () {
  var $etoileInit = $('#etoileVisible');
  var $etoile = $('#etoile');
  var $etoileBis = $('#etoileHover');
  
  $etoileBis.hide();
  $etoileInit.show();

  $etoile.mouseenter(function(){
    $etoileInit.hide("slow");
    $etoileBis.show("slow");

    $etoile.mouseleave(function(){
      $etoileInit.show("slow");
      $etoileBis.hide("slow");
    });

  });
  
});

//Page About us, management of the pictures with a width smaller than 500px
var $trust = $('#trust');
var $quality = $('#quality');
var $safety = $('#safety');
var $trustimg = $('#trustimg');
var $qualityimg = $('#qualityimg');
var $safetyimg = $('#safetyimg');
var larg = (window.innerWidth);

if ( larg <500) {
  $trustimg.hide();
  $qualityimg.hide();
  $safetyimg.hide();

  $trust.css("margin-bottom:40px");
  $safety.css("margin-bottom:40px");
  $quality.css("margin-bottom:40px");
}

