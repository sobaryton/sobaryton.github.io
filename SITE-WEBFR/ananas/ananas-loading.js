function progress (){
	var ananas = document.getElementById("ananas");
	var prg = document.getElementById ("progress");
	var percent = document.getElementById("percentCount");
	var counter = 0;
	var progress = 0;
	var id = setInterval (frame, 30);

	function frame (){
		if (progress === 100 && counter === 100) {
			clearInterval (id);
		} else {
			progress += 1;
			counter += 1;
			prg.style.width = progress + "%";
			percent.innerHTML = counter + "%";
			
			if (progress % 10 === 0) {
				ananas.style.background = "url('Fichier " + (progress/10 + 1) + "@4x.png') no-repeat center";
			}
		}
	}
}

progress();
/*while (progress < 10)
				{
					ananas.style.background = "url (\"ananas_entier.png\") fixed no repeat";

				} var ananas = document.getElementById("ananas");*/



