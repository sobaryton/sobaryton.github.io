/***Change randomly the background image of the section*****/
var totalCount = 2;
function ChangeIt()
	{
		var $section = $('#sec');
		var num = Math.ceil( Math.random() * totalCount );
		var url = "url: 'pictures/'"+num;
		$section.css({'background-image': 'url(pictures/' + images[num] + ')'});
	}
$(document).ready(function() {

	if (window.innerWidth < 992) {
		images = ['', 'mobile1.png', 'mobile2.png'];
		ChangeIt();
	}
	if (window.innerWidth >= 992) {
		images = ['', '1.JPG', '2.JPG'];
		ChangeIt();
	}

});
