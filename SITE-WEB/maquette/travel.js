//création du caroussel pour les photos de voyage
var $carou1 = $('#carou1');
var $carou2 = $('#carou2');
var $flecheG = $('#fleche1');
var $flecheD = $('#fleche2');
var $fleche = $('.fleche');
$(function($) {
	$carou2.hide();
	$carou1.show();
	$fleche.on ("click", function(){
		$carou2.toggle("fast");
		$carou1.toggle("fast");
	});

});

