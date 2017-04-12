

//******************************************************Navigation bar on top
$(document).ready(function() {
	$(window).scroll(function () {
	    updateNavigation();
	});

	updateNavigation();
});

function updateNavigation() {
	var scroll = $(window).scrollTop();
	var win_height = $("header").height();
	var $myNavBar = $('#navigation');
	var $navElt = $('.navbar-nav a');
	var heightClient = win_height - scroll;
	if (heightClient <= 0) {
		$myNavBar.css({"background-color": "#FCB3B3"});
		$navElt.css({"color": "white"});
	} else {
		$myNavBar.css({"background-color": "transparent"});
		$navElt.css({"color": "#FCB3B3"});
	}
}

//Navigation management in xs format with the "hamburger" button
$(document).ready(function() {
	var sideslider = $('[data-toggle=collapse-side]');
	var sel = sideslider.attr('data-target');
	var navig = $('#navig');
	var $titre = $('#titre');

	sideslider.click(function(event){
		$titre.fadeToggle();
		$(sel).toggleClass('in');
		navig.removeClass('navbar-fixed-top');




	});
});

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
 var heightXsHuman = $( "header" ).height() + $("#intro").height() + $('#container-numbers').height() + $("#designskills").height() + $("#devskills").height();
 var heightClientDesign = heightXsDesign-scroll;
 var heightClientHuman = heightXsHuman-scroll;
 if (heightClientDesign <= 0){
	$animdevDes.css({"animation": "type 4s steps(60, end)"}, {"-webkit-animation": "type 4s steps(60, end)"});
 }
 if (heightXsHuman <=0){
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



/*
 function openContactForm(source)
 {
 var popup = $('.popup-overlay');
 popup.css('display','block');
 popup.find('.button-text').text('Send');
 popup.find('button.main').removeClass('done');
 popup.find('[name=source]').val(source);

 popup.find('.close-popup').click(function(){
 popup.removeClass('visible');
 setTimeout(function(){ popup.css('display','none');},200);
 });

 setTimeout(function(){ popup.addClass('visible')});
 return false;
 }

 $(document).ready(function(){
 $('.contact-us').click(function(event){
 if (typeof mixpanel != 'undefined')
 mixpanel.track('Contact form opened');

 event.preventDefault();
 openContactForm();
 });

 $('#contact-popup form').submit(function(event){
 event.preventDefault();

 var button = $(this).find('button.main');
 var button_text = button.find('.button-text');
 button_text.text('Sending...');

 emailjs.sendForm("default_service","contact_form","contact-form")
 .then(function(){
 button_text.text('Done, thank you!');
 button.addClass('done');

 if (typeof mixpanel != 'undefined')
 mixpanel.track('Contact form submitted');
 })
 return false;
 });
 })*/