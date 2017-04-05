var $bouton = $('.bouton');
var $titre = $('#titre');
var $liste = $('.liste');
var $btn1 = $('#btn1');
var $message = $('.message');

function creerElement(titreNom, boutonIntitule, idbtn) {
	var cadre2 = document.createElement ("li");
	var $cadre2 = $ (cadre2);
	var ecrit = document.createElement ("h1");
	var $ecrit = $(ecrit);
	$ecrit.append (titreNom);
	var bouton2 = document.createElement ("button");
	var $bouton2 = $(bouton2);
	$bouton2.append (boutonIntitule);
	$bouton2.addClass("bouton");
	$bouton2.attr ("id", idbtn);
	$cadre2.append ($ecrit);
	$cadre2.append ($bouton2);
	$cadre2.addClass ("message");
	$liste.append($cadre2);
}

$('.bouton').on ("click", function() {
	creerElement("Tu vas recevoir le plus beau cadeau de toute ta vie", "Un peu de patience !", "btn2");
		$btn1.remove();
		var $btn2 = $('#btn2');
		$('body').css("backgroundColor", "#FF5858");
		$btn2.on("click", function (){
			creerElement("Es-tu pret ??", "Aller Hop !", "btn3");
			$('body').css("backgroundColor", "#FFC758");
			$btn2.remove();
			var $btn3 = $('#btn3');
			$(".liste .bouton:last").on("click", function (){
				$('body').css({ "background": 'url("anniversaire.jpg") top no-repeat'});
				$(".liste h1").replaceWith("Joyeux anniversaire !!!");
				$(".message:lt(2)").slideUp("slow");
				$('li').css ({"font-family": "'Indie Flower', cursive", "font-size": "2em", "height": "100px", "margin": "auto", "text-align": "center"});
				$btn3.remove ();
		});
	});


});

