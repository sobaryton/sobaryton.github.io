//création du caroussel pour les photos de voyage
/*jQuery(function($) { 

  // settings
  var $slider = $('#pays-list'); // class or id of carousel slider
  var $slide = 'li'; 
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 3000; // 3 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  $('li: lt(6)').slides().addClass('active');


  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});*/

//elle ajoute une classe aux slides qui sont visibles
//elle set un intervalle et quand fini, elle enleve cette classe, ce qui cache les slides et les remplace
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

