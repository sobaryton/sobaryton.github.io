

//******************************************************Navigation bar on top

$(document).ready(function() {
	$(window).scroll(function () {
		var larg = (window.innerWidth);
		if(larg>767){
			updateNavigation();
		}
	});
	var larg = (window.innerWidth);
	if(larg>767){
		updateNavigation();
	}

});

function updateNavigation() {
	var scroll = $(window).scrollTop();
	var win_height = $("header").height();
	var $myNavBar = $('.navbar');
	var $navElt = $('.navbar-left a');
	var heightClient = win_height - scroll;
	if (heightClient <= 0) {
		$myNavBar.css({"background-color": "#FCB3B3"});
		$navElt.css({"color": "white"});
	} else {
		$myNavBar.css({"background-color": "transparent"});
		$navElt.css({"color": "#FCB3B3"});
	}
}

//******************************************************Animation of the numbers in numbers section

// Set the date we're counting down to
var startDate = new Date("Jan 13 15:15:15 2017");

// Update the count down every 1 day


	// Get todays date and time
	var now = new Date();

	// Find the distance between now an the count down date
	var distanceSec = (now - startDate)/1000 ;

	// Time calculations for weeks, days, hours
	var weeks = Math.floor(distanceSec / (60 * 60 * 24 * 7));
	var days = Math.floor(distanceSec / (60 * 60 * 24) - weeks * 2);
	var hours = Math.floor(days * 7);

	// Display the result in the element with id
	document.getElementById("weeks").innerHTML = weeks;
	document.getElementById("coffee").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;



//***********************************************************************Animation in the skills section
 $(window).scroll(function(){
 var scroll = $( window ).scrollTop();
 var height = $( "header" ).height() + $("#intro").height() + $('#container-numbers').height();
 var heightClient = height-scroll;
 var $animdevDev = $(".animdevDev");
 var $animdevDes = $("#animdevDes");
 var $animdevHum = $("#animdevHum");

 //for xs format
 var heightXsDesign = $( "header" ).height() + $("#intro").height() + $('#container-numbers').height() + $("#devskills").height();
 var heightXsHuman = heightXsDesign + $("#designskills").height();
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
 });




//*****************************************************************Management of the comments in the contact section
var $nom = $('#nom');
var $mail = $('#mail');
var $company = $('#company');
var $message = $('#message');
var $envoi = $("#envoi");

$(document).ready(function(){
	emailjs.init("user_OsNgtYwXQv1DWsI0vRCnf");

	var formContact = $("#form");
	formContact.submit(function(event){
		event.preventDefault();

		// Change to your service ID, or keep using the default service
		var service_id = "default_service";
		var template_id = "email_form_sodev";

		$envoi.val("Sending...");
		emailjs.sendForm(service_id,template_id,"form")
        /*(new Promise(function (resolve, reject){
            setTimeout(
                resolve,
                5000
            );
        }))*/
			.then(function(){
				alert("Your comment is sent. Thank you for that I will answer you as soon as possible.");
				formContact.find("button").text("Send");

				$nom.val("");
				$mail.val("");
				$company.val("");
				$message.val("");

				$envoi.val("Send");
			}, function(err) {
				alert("Send email failed!\r\n Please contact me directly at solene.bary@gmail.com \n Thank you\n Error:\n " + JSON.stringify(err));
				formContact.find("button").text("Send");

				$nom.val("");
				$mail.val("");
				$company.val("");
				$message.val("");
			});
		return false;
	})
});


/***** On the CV page, click to open education, skills and experience*****/
var $cvexp = $('#cvexp');
var $cvskills = $('#cvskills');
var $cveduc = $('#cveduc');
var $education = $('#education');
var $skillscv = $('#skillscv');
var $experiencecv = $('#experiencecv');

$education.hide();
$skillscv.hide();
$experiencecv.hide();

$cvexp.click(function(){
	$experiencecv.toggle('slow');
});

$cvskills.click(function(){
	$skillscvcv.show('slow');
});

$cveduc.click(function(){
	$education.toggle('slow');
});


