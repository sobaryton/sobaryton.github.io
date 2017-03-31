//gestion de la navbar en petit format avec le bouton
/*var $menuDeroulant = $('#myNavbar');
var $boutonMenu = $('#boutonBarres');
var $headerSection = $('header');
$menuDeroulant.hide();
$menuDeroulant.height("300px");
$(function ($){
  $boutonMenu.on("click", function(){
    $menuDeroulant.slideToggle("slow");
    

  });
});*/
var $boutonMenu = $('#boutonBarres');
var $menuDeroulant = $('#myNavbar');
$menuDeroulant.collapse()


//création du caroussel pour les photos de voyage
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

//Page services, gestion du hover pour coeur

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


