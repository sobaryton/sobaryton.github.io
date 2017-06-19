// when we scroll, the navbar 1 is fixed on top, changes background color and the arrow to go on top appears.
// the navbar2 is under the 1.
var $nav1 = $('#navbar1');
var btnTop = $('#btnTop');
function checkScroll(){
	var startY = $nav1.height() * 2; //The point where the navbar changes in px
	if($(window).scrollTop() > startY){
		$nav1.addClass("scrolled");
		btnTop.show();
	}else{
		$nav1.removeClass("scrolled");
		btnTop.hide();
	}
}

function updateNav1() {
	var $work = $('#service2').offset().top;
	var $about = $('#testimonials').offset().top;
	var $contact = $('#blog').offset().top;

	var $introNav2 = $('#introNav2');
	var $workNav2 = $('#workNav2');
	var $aboutNav2 = $('#aboutNav2');
	var $contactsNav2 = $('#contactsNav2');

	if ($(window).scrollTop() < $work) {
		$introNav2.addClass("is");
		$workNav2.hasClass("is") ? $workNav2.removeClass("is") : null;
	} else if ($(window).scrollTop() >= $work && $(window).scrollTop() < $about) {
		$introNav2.removeClass("is");
		$workNav2.addClass("is");
		$aboutNav2.hasClass("is") ? $aboutNav2.removeClass("is") : null;
	} else if ($(window).scrollTop() >= $about && $(window).scrollTop() < $contact) {
		$aboutNav2.addClass("is");
		$workNav2.removeClass("is");
		$contactsNav2.hasClass("is") ? $contactsNav2.removeClass("is") : null;
	} else if ($(window).scrollTop() >= $contact) {
		$aboutNav2.removeClass("is");
		$contactsNav2.addClass("is");
	}
	btnTop.click(function () {
		$workNav2.hasClass("is") ? $workNav2.removeClass("is") : null;
		$contactsNav2.hasClass("is") ? $contactsNav2.removeClass("is") : null;
		$aboutNav2.hasClass("is") ? $aboutNav2.removeClass("is") : null;
		$introNav2.addClass("is");
	});
}


if($nav1.length > 0){
	$(window).on("scroll load resize", function(){
		checkScroll();
		updateNav1();
	});
}


//On the About us section, when we hover the thumbnail, there is a sentence appearing
var $txtT1 = $('#txtThumb1');
var $txtT2 = $('#txtThumb2');
var $txtT3 = $('#txtThumb3');

var $thumb1 = $('#thumb1');
var $thumb2 = $('#thumb2');
var $thumb3 = $('#thumb3');

$txtT1.hide();
$txtT2.hide();
$txtT3.hide();

$thumb1.hover(function(){
	$txtT1.fadeToggle("slow", "linear" );
});
$thumb2.hover(function(){
	$txtT2.fadeToggle("slow","linear");
});
$thumb3.hover(function(){
	$txtT3.fadeToggle("slow", "linear");
});
//On the team section, when we hover the thumbnail/picture of the team member, there is links to their social profiles
var $socialT1 = $('#socialT1');
var $socialT2 = $('#socialT2');
var $socialT3 = $('#socialT3');

var $teamT1 = $('#teamT1');
var $teamT2 = $('#teamT2');
var $teamT3 = $('#teamT3');
$socialT1.hide();
$socialT2.hide();
$socialT3.hide();
$teamT1.hover(function(){
	$socialT1.fadeToggle("slow", "linear" );
});
$teamT2.hover(function(){
	$socialT2.fadeToggle("slow","linear");
});
$teamT3.hover(function(){
	$socialT3.fadeToggle("slow", "linear");
});

//On service 2, when you click on the different parts, a description appears down it.
var $ser2Photo = $('#ser2Photo');
var $ser2Creativity = $('#ser2Creativity');
var $ser2Web = $('#ser2Web');
var $chevronP = $('#ser2CheP');
var $chevronC = $('#ser2CheC');
var $chevronW = $('#ser2CheW');

var $listPhoto = $('#listPhoto');
var $listCreativity = $('#listCreativity');
var $listWeb = $('#listWeb');

$ser2Photo.click(function(){
	$listPhoto.toggleClass('collapse');
	$listPhoto.toggleClass('collapse-in');
	$chevronP.toggleClass('fa-chevron-down');
	$chevronP.toggleClass('fa-chevron-up');
});
$ser2Creativity.click(function(){
	$listCreativity.toggleClass('collapse');
	$listCreativity.toggleClass('collapse-in');
	$chevronC.toggleClass('fa-chevron-down');
	$chevronC.toggleClass('fa-chevron-up');
});
$ser2Web.click(function(){
	$listWeb.toggleClass('collapse');
	$listWeb.toggleClass('collapse-in');
	$chevronW.toggleClass('fa-chevron-down');
	$chevronW.toggleClass('fa-chevron-up');
});

//On the work section, when we hover the thumbnail/picture, there is a sentence appearing
var $textWork = $('.txtWorkThumb');
$textWork.hide();
$('#bloc11').hover(function(){
	$('#txtWorkThumb11').fadeToggle("slow", "linear" );
});
$('#bloc12').hover(function(){
	$('#txtWorkThumb12').fadeToggle("slow", "linear" );
});
$('#bloc13').hover(function(){
	$('#txtWorkThumb13').fadeToggle("slow", "linear" );
});
$('#bloc14').hover(function(){
	$('#txtWorkThumb14').fadeToggle("slow", "linear" );
});
$('#bloc21').hover(function(){
	$('#txtWorkThumb21').fadeToggle("slow", "linear" );
});
$('#bloc22').hover(function(){
	$('#txtWorkThumb22').fadeToggle("slow", "linear" );
});
$('#bloc23').hover(function(){
	$('#txtWorkThumb23').fadeToggle("slow", "linear" );
});