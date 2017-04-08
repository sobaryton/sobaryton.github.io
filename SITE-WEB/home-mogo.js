//barre de navigation 
$(window).scroll(function(){
  var scroll = $( window ).scrollTop();
  var win_height = $( "header" ).height();
  var $myNavBar = $('#navigation');
  var $navElt = $('.navbar-nav a');
  var $navEltHover = $('.navbar-nav a:hover');
  var heightClient = win_height-scroll;
 if (heightClient<=0){
  	$myNavBar.css({ "background-color": "#FCB3B3" });
  	$navElt.css({ "color": "white" });
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

//Section numbers pour animer mes chiffres

// Set the date we're counting down to
var startDate = new Date("Jan 13 15:15:15 2017");

// Update the count down every 1 day
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date();

  // Find the distance between now an the count down date
  var distanceSec = (now - startDate)/1000 ;

  // Time calculations for weeks, days, hours
  var weeks = Math.floor(distanceSec/ (60 * 60 * 24 * 7));
  var days = Math.floor( distanceSec/ (60 * 60 * 24) - weeks*2);
  var hours = Math.floor(days*7);

  // Display the result in the element with id
  document.getElementById("weeks").innerHTML = weeks;
  document.getElementById("coffee").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;

  // If the count down is finished, write some text 
 /* if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }*/
}, 1000);



//animation des cercles dans la section skills

function onLoad() { 
  var circle = new ProgressBar.Circle('.cercle', {
        color: '#FCB3B3',
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 6,
        trailWidth: 1,
    });
       circle.animate(1);
};

/*
$(window).scroll(function(){
  var scroll = $( window ).scrollTop();
  var height = $( "header" ).height() + $("#intro").height() + $('#container-numbers').height() + $('#skills').height();
  var heightClient = height-scroll;
  var skillsquare = $("#skillssquare h2");
  for (var i = 0; i <)
  onLoad();
  if (heightClient>0){
    
  }
});
*/





(function(){
        emailjs.init("user_OsNgtYwXQv1DWsI0vRCnf");
     });
emailjs.sendForm("gmail","email_form_sodev","#form");




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