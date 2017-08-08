
//******************************************************Navigation bar on top

function updateNavigation() {
	var btnTop = $('#btnTop');
	var dropDownMenu = $('.dropdown-menu');
	var scroll = $(window).scrollTop();
	var win_height = $("header").height();
	var $myNavBar = $(".navbar");
	var $navElt = $(".navbar-left a");
	var heightClient = win_height - scroll;

	if (heightClient <= 0) {
		$myNavBar.css({"background-color": "#FFA1B5"});
		$navElt.css({"color": "white"});
		dropDownMenu.css({"width": "100%"}, {"background-color": "#FFA1B5 !important"});
		btnTop.show();
	} else {
		$myNavBar.css({"background-color": "transparent"});
		dropDownMenu.css({"background-color": "#FFA1B5 !important"});
		$navElt.css({"color": "white"});
		btnTop.hide();
	}
}

//******************************************************Count the number of wave to put on bottom header

function createWave() {
	var $crans = $('#crans');
	var $windowwidth = $("header").width();
	var $cranswidth = 0;

	while ($cranswidth <= $windowwidth) {
		var wave = document.createElement("div");
		var $wave = $(wave);
		$wave.addClass("triangle-up");
		$crans.append($wave);
		var $wavewidth = 40;
		$cranswidth = $cranswidth + $wavewidth;
	}
}



//******************************************************Animation of the numbers in numbers section

function updateStats() {
	// Set the date we're counting down to
	var startDate = new Date("Jan 13 15:15:15 2017");

	// Update the count down every 1 day

	// Get today's date and time
	var now = new Date();

	// Find the distance between now an the count down date
	var distanceSec = (now - startDate)/1000 ;

	// Time calculations for weeks, days, hours
	var weeks = Math.floor(distanceSec / (60 * 60 * 24 * 7));
	var days = Math.floor(distanceSec / (60 * 60 * 24) - weeks * 2);
	var hours = Math.floor(days * 7);

	// Display the result in the element with id
	document.getElementById("weeks").innerHTML = String(weeks);
	document.getElementById("coffee").innerHTML = String(days);
	document.getElementById("hours").innerHTML = String(hours);
}


//***********************************************************************Animation in the skills section

function animateSkills() {
	var scroll = $(window).scrollTop();
	var height = $("header").height() + $("#intro").height() + $("#container-numbers").height();
	var heightClient = height-scroll;
	var $animdevDev = $(".animDevDev");
	var $animdevDes = $("#animDevDes");
	var $animdevHum = $("#animDevHum");

	//for xs format
	var heightXsDesign = $("header").height() + $("#intro").height() + $("#container-numbers").height() + $("#devSkills").height();
	var heightXsHuman = heightXsDesign + $("#designSkills").height();
	var heightClientDesign = heightXsDesign-scroll;
	var heightClientHuman = heightXsHuman-scroll;
	if (heightClientDesign <= 0){
		$animdevDes.css({"animation": "type 4s steps(60, end)"}, {"-webkit-animation": "type 4s steps(60, end)"});
	}
	if (heightClientHuman <=0){
		$animdevHum.css({"animation": "type 4s steps(60, end)"}, {"-webkit-animation": "type 4s steps(60, end)"});
	}
	// for the other formats (sm, md, lg)
	if (heightClient <= 0){
		$animdevDev.css({"animation": "type 4s steps(60, end)"}, {"-webkit-animation": "type 4s steps(60, end)"});
	}
}

//*****************************************************************Management of the comments in the contact section

function initEmailJS() {
	emailjs.init("user_OsNgtYwXQv1DWsI0vRCnf");

	var $nom = $("#nom");
	var $mail = $("#mail");
	var $company = $("#company");
	var $message = $("#message");
	var $envoi = $("#envoiForm");
	var formContact = $("#form");

	formContact.submit(function(event){
		event.preventDefault();

		// Change to your service ID, or keep using the default service
		var service_id = "default_service";
		var template_id = "email_form_sodev";

		$envoi.val("Sending...");
		emailjs.sendForm(service_id,template_id,"form")
			.then(function(){
				alert("Your comment is sent. Thank you for that I will answer you as soon as possible.");

				formContact.find("button").text("Send");

				$nom.val("");
				$mail.val("");
				$company.val("");
				$message.val("");

				$envoi.val("Send");
			}, function(err) {
				alert("Send email failed!\r\nPlease contact me directly at solene.bary@gmail.com\nThank you\n");
				console.log("Error: " + JSON.stringify(err));

				formContact.find("button").text("Send");

				$nom.val("");
				$mail.val("");
				$company.val("");
				$message.val("");
			});
		return false;
	})
}

//*****************************************************************Management of the progress bar hover in CV-skills
function animateProgressBars(){
	//var $window = $(window);
	var $progressFrontEnd = $('.progressFrontEnd');
	var $progressDesign = $('.progressDesign');
	var $progressHuman = $('.progressHuman');

//Function which draws the progress-bars for a kind of skill (front-end, design and human)
	function drawProgressBar(skill) {
		var $progressSkill = $(skill);
		$.each($progressSkill, function () {
			$progressbar = $($(this).children()[0]);
			$progressbar.addClass('barhover');
			$progressbar.css({"width": $progressbar.data('value') + '%'});
			$progressbar.css({"background": $progressbar.data('color')});
		});
	}
	//for small and XS formats, need to click on the skills
	if(window.innerWidth <= 992){

		$progressFrontEnd.click(function(){
			drawProgressBar('.progressFrontEnd');
		});
		$progressDesign.click(function(){
			drawProgressBar('.progressDesign');
		});
		$progressHuman.click(function(){
			drawProgressBar('.progressHuman');
		});

	}
//for medium and large formats, need to hover the skills
	if(window.innerWidth > 992){

		$progressFrontEnd.hover(function(){
			drawProgressBar('.progressFrontEnd');
		});
		$progressDesign.hover(function(){
			drawProgressBar('.progressDesign');
		});
		$progressHuman.hover(function(){
			drawProgressBar('.progressHuman');
		});

	}
}

// in the work section, when you hover the screens there are labels appearing
function hoverWork(){
	var $paragraphs = $('.hoverProject');
	var $projects = $('.project');
	$paragraphs.hide();
	$projects.hover(function(){
		var $thisProject = $($(this).children()[0]);
		$thisProject.slideToggle("slow");
	});

}


//**********************************************************************Check what the current page is

function isHome() {
	var regex = /\/(index.html)?$/i;
	return regex.test(window.location.pathname);
}
function isCV() {
	var regex = /cv.html/i;
	return regex.test(window.location.pathname);
}

function isWork(){
	var regex = /work.html/i;
	return regex.test(window.location.pathname);
}

//******************************************************************Finally load all functions at the right moment

$(document).ready(function() {
	if(window.innerWidth > 767) {
		updateNavigation();
	}

	if (isHome()) {
		initEmailJS();
		updateStats();

		if(window.innerWidth > 1200) {
			hoverWork();
		}
	}
	if (isCV()) {
		createWave();
		animateProgressBars();
	}
	if (isWork()){
		createWave();
		if(window.innerWidth > 1200) {
			hoverWork();
		}
	}

});

$(window).scroll(function() {
	if(window.innerWidth > 767) {
		updateNavigation();
	}

	if (isHome()) {
		animateSkills();
	}
});
