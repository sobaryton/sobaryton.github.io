let events=[];
let coordinates=[51.5818047,-0.23234880000000002];
let xUser = 51.5818047;
let yUser = -0.23234880000000002;
let topic = 'Javascript';
const sigID = 222881367;
const $events = $('#eventsNearMe');
const $eventsTable = $('.tableEvent');
const $searchBtn = $('#searchBtn');
const $targetBtn = $('#targetBtn');
const $searchLoc = $('#searchLocation');
const $searchTopic = $('#searchTopic');
const $allEventsBtn = $('#allEventsBtn');
const $eventPlace = $('#eventPlace');
const $eventTopic = $('#eventTopic');
const $sortSelect = $('#sortList');

window.onload(getEventsMeetups(xUser,yUser,50));

//get the localisation of the user and call the function, which gets the 5th nearest events from me
//only working for HTTPS
/*navigator.geolocation.getCurrentPosition(function(position) {
	xUser = position.coords.latitude;
	yUser = position.coords.longitude;
	coordinates.push(xUser);
	coordinates.push(yUser);
	console.log(coordinates);
	getEventsMeetups(xUser,yUser,50);
});*/

/*This function call the Meetup APi to get back a number of events in an area and will create an event for each meetup*/
function getEventsMeetups(latitude,longitude,radius){

	//we need a signature per request for the API
	let sigApi='';
	switch (topic){
		case 'Front-end AND development':
			sigApi='5a3c5907f8c8c2dbe81a64964f63c75e3f813490';
			break;
		case 'Javascript':
			sigApi='197aeb33817460f55c54d0006a2ff06f4550ef2a';
			break;
		case 'Coding':
			sigApi='cd0d91545537800b88757733c4e24e6b77d28d13';
			break;
		case 'React AND javascript':
			sigApi='cc7e8de5ef26374313034252e26766d6041b36c5';
			break;
		case 'Vue AND javascript':
			sigApi='dc772f771eabca2c97c54cd8056c279812129bea';
			break;
		case 'Angular':
			sigApi='c786eb9b3f2a090e0c28d547bd737e3e0d394538';
			break;
		case 'Back-end AND development':
			sigApi='294dc90d36e9cbe26194f65c4a4e7d5a427550b1';
			break;
		case 'C#':
			sigApi='cb4f4a0b38cd03b0aedb058f5a01bf7888470f86';
			break;
		case 'C++':
			sigApi='bd4b9a47e24ce318973293cbed618e33b900d8b4';
			break;
		case 'Java':
			sigApi='9c0101c96932792ebe4a74d6eb44caf9b675227d';
			break;
		case 'PHP':
			sigApi='f030896fbe43bf949f0fdf0fe8e5aefab00966ff';
			break;
		case 'Python':
			sigApi='a1abe6d444179d2b7e97813e74d0f9b20f5c6cf8';
			break;
		case 'Ruby':
			sigApi='ae85028b0e40bc390939ff8335f1c322d81fe81b';
			break;
	}

	const meetupAPI = "https://api.meetup.com/2/open_events";
	console.log(latitude, longitude);
	const parameters = {
		and_text: 'False',
		format: 'json',
		offset: events.length / 10,
		limited_events: 'False',
		desc: 'False',
		status: 'upcoming',
		lon: longitude,
		lat: latitude,
		radius: radius,
		country:'gb',
		text:topic,
		page: 10,
		order:'distance',
		sig_id: sigID,
		sig: sigApi
	};

	$.ajax({
		url: meetupAPI,
		type: "GET",
		crossDomain: true,
		data: $.param(parameters),
		dataType: "jsonp",
		jsonpCallback: "parseAPIResponse"
	});
}
//this function is called by the API
function parseAPIResponse (data) {

	if(data.results.length<=events.length && data.results.length!==10){
		$allEventsBtn.css({'display':'none'});
	}else{
		$allEventsBtn.css({'display':'block'});
	}



	const eventsAPI = createEvent(data.results, data.results.length);
	const eventList = events.concat(eventsAPI);
	events = eventList;
	updateEvents(eventList, eventList.length);
}

//This function creates an array of n events, which have an id, coordinates and tickets from the API answer.
function createEvent(array, n){
	let newListEvents=[];
	for(let i=0;i<n;i++){
		let event={
			id:array[i].id,
			name:array[i].name,
			distance:Math.floor(array[i].distance),
			status:array[i].status,
			group: array[i].group.name,
			url: array[i].event_url,
			date: array[i].time,
			fees: array[i].fee?array[i].fee.amount.toPrecision(3):'',
			currency: array[i].fee?array[i].fee.currency:''
		};
		 newListEvents.push(event);
	}
	return newListEvents;
}

//This function decides which function to call in order to display correctly the results
function updateEvents(array,n){
	console.log(array);

	//For smartphones screens
	if (window.innerWidth <= 767){
		getEventsNearMeSmallScreens(array,n);
	}
	//For screens larger than 767px
	if (window.innerWidth > 767){
		getEventsNearMeLargeScreens(array,n);
	}
	sortResults();
}

//This function returns an array of the n nearest events from the user with the event id for screens smaller or equal to 767px
function getEventsNearMeSmallScreens(events,n) {
	$("tr").remove(".event");

	//if we resize the screen from big to small we remove the thead
	let element =  document.querySelector('thead');
	let $tableHeader =  $('thead');
	if (typeof(element) !== 'undefined' && element !== null)//thead exists need to be removed
		{
			$tableHeader.remove();
		}

	//this will render the results on the page
	for (let i = 0; i < n; i++) {
		let nameE = events[i].name;
		let distanceE = events[i].distance.toPrecision(2);
		let groupE = events[i].group;
		const date = new Date(events[i].date);
		let urlE = events[i].url;
		let url = '<a class="eventLink" target="_blank" href="' + urlE + '">';
		let feesE = events[i].fees + ' ' + events[i].currency;

		let day = date.getDate();
		if (day < 10) {
			day = '0' + day;
		}
		let month = date.getMonth() + 1;
		if (month < 10) {
			month = '0' + month;
		}
		let minutes = date.getMinutes();
		if (minutes === 0) {
			minutes = '0' + minutes;
		}
		let hours = date.getHours();
		if (hours < 10) {
			hours = '0' + hours;
		}
		let dateE = day + '/' + month + '  ' + hours + ':' + minutes;

		let $eventRow = '<tr class="event" id="event' + i + '" ></tr>';
		$events.append($eventRow);
		let $rowE = $('#event' + i);
		let firstBloc = '<div class="eventSMFormatDescription"><div class="eventSMFormatTitle">'+  nameE + '</div><div>by '+groupE+'</div></div>';
		let secondBloc = '<div class="eventSMFormatInfo"><div>'+  dateE + '</div><div>'+distanceE+'km</div><div>'+feesE+'</div></div>';

		$rowE.append('<td>'+ url + '<div class="eventSMFormat">' + firstBloc + secondBloc+ '</div></a></td>');
	}
}



//This function returns an array of the n nearest events from the user with the event id for screens larger than 767px
function getEventsNearMeLargeScreens(events,n){

	//if we resize the screen from small to big we check if there is already the thead. We create a thead only once
	let element =  document.querySelector('thead');
	if (typeof(element) === 'undefined' || element === null)//thead doesn't exist and need to be added
		{
			//this will generate the head of the table
			$eventsTable.append('<thead></thead>');
			const $thead = $('thead');
			const $meetupNameThead = '<th><i class="fa fa-bolt" aria-hidden="true"></i> Meetup</th>';
			const $meetupDistanceThead = '<th><i class="fa fa-map-marker" aria-hidden="true"></i> Distance</th>';
			const $meetupGroupNameThead = '<th><i class="fa fa-child" aria-hidden="true"></i> By </th>';
			const $meetupWhenThead = '<th><i class="fa fa-handshake-o" aria-hidden="true"></i> When</th>';
			const $meetupFeesThead = '<th><i class="fa fa-hand-spock-o" aria-hidden="true"></i> Fees</th>';

			$thead.append($meetupNameThead);
			$thead.append($meetupDistanceThead);
			$thead.append($meetupGroupNameThead);
			$thead.append($meetupWhenThead);
			$thead.append($meetupFeesThead);
		}


	$( "tr" ).remove( ".event" );
	//this will render the results on the page
	for(let i=0;i<n;i++){
		let nameE = events[i].name;
		let distanceE = events[i].distance;
		let groupE = events[i].group;
		const date = new Date(events[i].date);
		let urlE = events[i].url;
		let url = '<a class="eventLink" target="_blank" href="'+urlE+'">';
		let feesE = events[i].fees + ' ' +events[i].currency;

		let day = date.getDate();
		if(day<10){
			day = '0'+day;
		}
		let month = date.getMonth()+1;
		if(month<10){
			month = '0'+month;
		}
		let minutes = date.getMinutes();
		if(minutes===0){
			minutes = '0'+minutes;
		}
		let hours = date.getHours();
		if(hours<10){
			hours = '0'+hours;
		}
		let dateE = day + '/' + month + ' '+hours+':'+minutes;

		let $eventRow = '<tr class="event" id="event'+i+'" ></tr>';
		$events.append($eventRow);
		let $rowE=$('#event'+i);


		$rowE.append('<td>'+url+nameE+'</td>');
		$rowE.append('<td>'+url+distanceE+' km</a></td>');
		$rowE.append('<td>'+url+groupE+'</a></td>');
		$rowE.append('<td>'+url+dateE+'</a></td>');
		$rowE.append('<td>'+url+feesE+'</a></td>');
	}
}

//When the user write the name of a place in the input for the location of the event, the function working with Google API will trigger.
//The API will propose places. When a place is selected, a new list of events will appear.
$searchLoc.change(function() {
	initMap();
});
//When the user write the name of a place in the input for the location of the event, the function working with Google API will trigger.
//The API will propose places. And on place selection it will generate new coordinates and update the event list.
$searchLoc.keypress(triggerSearch);
$searchTopic.keypress(triggerSearch);

function triggerSearch(e) {
	let keycode = e.keyCode || e.which;
	if(keycode === 13) {
		let location = $searchLoc.val();
		if (location) {
			$eventPlace.text(location);
		} else {
			$eventPlace.text('London');
		}
		topic = $searchTopic.val();
		if(topic.length===0){
			$eventTopic.text('anything');
		}else{
			$eventTopic.text(topic);
		}
		//this will render the 10 closest events from you on the page
		getEventsMeetups(coordinates[0],coordinates[1],50);
	}
}



// This sample uses the Place Autocomplete widget requesting only a place
// ID to allow the user to search for and locate a place. This is the Google API.
// This example requires the Places library.
function initMap() {
	const input = document.getElementById('searchLocation');
	let autocomplete = new google.maps.places.Autocomplete(
		input,
		{
			placeIdOnly: true
		}
	);

	let geocoder = new google.maps.Geocoder;
	autocomplete.addListener('place_changed', function() {
		let place = autocomplete.getPlace();

		if (!place.place_id) {
			return;
		}
		geocoder.geocode({'placeId': place.place_id}, function(results, status) {
			if (status !== 'OK') {
				window.alert('Geocoder failed due to: ' + status);
				return;
			}else{
				let latitudeTown = results[0].geometry.location.lat();
				let longitudeTown = results[0].geometry.location.lng();
				coordinates[0] = latitudeTown;
				coordinates[1] = longitudeTown;
				console.log(coordinates);
			}
		});
	});
	return coordinates;
}

//This function changes the format of the topic to be send to the API in the right format
function updateTopic() {
	let topicInput = $searchTopic.val();
	topicWords= topicInput.split(' ');
	let newTopic= topicWords.join(' AND ');
	if(newTopic !== topic){
		topic= newTopic;
		events=[];
	}

}

$searchBtn.click(function(){
	//this will change the location in coordinates with the Google API and render the 10 nearest events on the page for the location you choose and for
	//the topic you choose. If no topic, the default value will be Javascript
	updateTopic();
	let location = $searchLoc.val();
	if(location){
		initMap();
		getEventsMeetups(coordinates[0],coordinates[1],50);
		$eventPlace.text(location);
	}else{
		getEventsMeetups(xUser, yUser, 50);
		$eventPlace.text('London');
	}
	if(topic.length===0){
		$eventTopic.text('anything');
	}else{
		$eventTopic.text(topic);
	}

});
$allEventsBtn.click(function(){
	//this will render +10 events on the page for the location you choose
	let location = $searchLoc.val();
	if(location){
		$eventPlace.text(location);
	}else{
		$eventPlace.text('London');
	}
	if(topic.length===0){
		$eventTopic.text('anything');
	}else{
		$eventTopic.text(topic);
	}
	console.log(events.length+10);
	getEventsMeetups(coordinates[0],coordinates[1],50);

});

//This is the event when you click on the target button, it will get your location
$targetBtn.click(function() {
	$searchLoc.val('');
	$eventPlace.text('London');
	if (topic.length === 0) {
		$eventTopic.text('anything');
	} else {
		$eventTopic.text(topic);
	}
	//this will render the 10 closest events from you on the page
	getEventsMeetups(xUser,yUser,50);
});

//This function will change or not the style of the page when resizing the page depending on what is the size of the screen
window.onresize = function() {
	//For smartphones screens
	if (window.innerWidth <= 767){
		getEventsNearMeSmallScreens(events,events.length);
	}
	//For screens larger than 767px
	if (window.innerWidth > 767){
		getEventsNearMeLargeScreens(events,events.length);
	}
};

//This function will sort the results depending on what filter we want
$sortSelect.change(sortResults);

function sortResults(){
	let choice = $('#sortList option:selected').val();
	let newTable=events.slice();
	if(choice==='distance'){
		newTable.sort(function(a, b) {
			return (a.distance) - (b.distance);
		});
	}else if(choice==='date'){
		newTable.sort(function(a, b) {
			return (a.date) - (b.date);
		});
	}else{
		newTable.sort(function(a, b) {
			return (a.fees) - (b.fees);
		});
	}
	events=newTable;
	//For smartphones screens
	if (window.innerWidth <= 767){

		getEventsNearMeSmallScreens(events,events.length);
	}
	//For screens larger than 767px
	if (window.innerWidth > 767){
		getEventsNearMeLargeScreens(events,events.length);
	}
}