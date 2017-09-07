const keyAPI ='76581a6f73323210786c5d7bb85a7d';
let events=[];
let coordinates=[];
let xUser;
let yUser;
const $events = $('#eventsNearMe');
const $searchBtn = $('#searchBtn');
const $targetBtn = $('#targetBtn');
const $search = $('#search');
const $allEventsBtn = $('#allEventsBtn');
const $fullTableEvents = $('#fullTableEvents');
const $event = $('.event');

//get the localisation of the user and call the function, which gets the 5th nearest events from me
navigator.geolocation.getCurrentPosition(function(position) {
  const xPos = position.coords.longitude;
  const yPos = position.coords.latitude;
  xUser=xPos/9;
  yUser=yPos/18;
  const t = getEventsDistance(xUser,yUser);
  getEventsNearMe(t,5);
});

//this generates randomly coordinates between -10 and 10
function generateCoordinates(){
	let coordinate = (Math.random() * 10);
	let proba = Math.random();
	if(proba<0.5){
		coordinate=coordinate*(-1);
	}
	return coordinate;
}

function generateTicketPrices(number){
	let price=[];
	for(let i=0; i<=number;i++){
		let priceNb = Math.floor((Math.random() * 240) + 10);
		price.push(priceNb);
	}
	return price;
	
}

//this function creates a random event, which has an id, coordinates(x, y) and tickets. There is a number of tickets with randomly prices
function createEvent(){
	let xE=generateCoordinates();
	let yE=generateCoordinates();
	let id=events.length;
	let number = Math.floor((Math.random() * 200));
	let price = generateTicketPrices(number);

	let event={
		id:id, 
		xE:xE, 
		yE:yE, 
		tickets:{
			price: price,
			number:number
		}
	};
	return event;
}

//This function is the Manhattan distance formula between two coordinates
function calcDistance(xE,yE,x,y){
	return Math.abs(xE-x)+Math.abs(yE-y);
}

//this function simply calculates the distance between all the events and the user. This returns an array with the id of the events and 
//the distance with the user
function getEventsDistance(xUser,yUser){
	let tab=[];
	for(let i=0; i<events.length;i++){
		let distance = calcDistance(events[i].xE,events[i].yE,xUser,yUser);
		let event = [events[i].id, distance];
		tab.push(event);
	}
	return tab;
}

//This function returns an array of the 5th nearest events from the user with the event id 
function getEventsNearMe(t,n){
	let tSorted=t;
	if(n<=50){
		tSorted = t.sort((a,b)=> a[1]-b[1]);
	}
	let eventsNearMe =[];
	let distanceE;

	if(n<=50){
		for(let i=0;i<n;i++){
			let priceTickets = events[tSorted[i][0]].tickets.price;
			let cheapestTicket = Math.min(...priceTickets);
			let maxTicket = Math.max(...priceTickets);
			distanceE = tSorted[i][1].toPrecision(2);
			let event = [tSorted[i][0],distanceE,cheapestTicket,maxTicket];
			eventsNearMe.push(event);
		}
	}
	if(n===50){
		for(let i=0;i<n;i++){
			let priceTickets = events[i].tickets.price;
			let cheapestTicket = Math.min(...priceTickets);
			let maxTicket = Math.max(...priceTickets);
			distanceE = t[i][1].toPrecision(2);
			let event = [events[i].id,distanceE,cheapestTicket,maxTicket];
			eventsNearMe.push(event);
		}
	}
	console.log(eventsNearMe);

	//this will render the results on the page
	for(let i=0;i<n;i++){
		let $eventRow = '<tr id="event'+i+'" class="event"></tr>';
		$events.append($eventRow);
		let $rowE=$('#event'+i);
		let idE = eventsNearMe[i][0];
		let minE = eventsNearMe[i][2];
		let maxE = eventsNearMe[i][3];

		if(n<=50){
			distanceE = tSorted[i][1].toPrecision(2);
		}
		if(n===50){
			distanceE = t[i][1].toPrecision(2);
		}
	


		$rowE.append('<td>'+idE+'</td>');
		$rowE.append('<td>'+distanceE+' km</td>');
		$rowE.append('<td>$'+minE+'</td>');
		$rowE.append('<td>$'+maxE+'</td>');
	}
}

//This function creates an array of 50 random events, which have an id, coordinates and tickets.
function createEvents(){
	for(let i=0;i<50;i++){
		let event = createEvent();
		events.push(event);
	}
	console.log(events);
}

//This is to generate a list of events when the window is loaded.-
$( window ).load(function() {
	createEvents();
});


$search.change(function() {
	let location = $search.val();
	initMap();
});


// This sample uses the Place Autocomplete widget requesting only a place
// ID to allow the user to search for and locate a place. 

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
	const input = document.getElementById('search');
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
				let latitudeTown = results[0].geometry.location.lat()/18;
				let longitudeTown = results[0].geometry.location.lng()/9;
				coordinates.push(longitudeTown);
				coordinates.push(latitudeTown);
			}
		});
	});
	return(coordinates);
}
$searchBtn.click(function(){
	let t = getEventsDistance(coordinates[0],coordinates[1]);
	$( "tr" ).remove( ".event" );
	getEventsMeetups(coordinates[0],coordinates[1],50);
	//getEventsNearMe(t,10);
	coordinates=[];
});
$allEventsBtn.click(function(){
	//this will render the all the events on the page
	$( "tr" ).remove( ".event" );
	const t = getEventsDistance(xUser,yUser);
	console.log(t);
	getEventsNearMe(t,50);
		
});
$targetBtn.click(function(){
	//this will render the 5 closest events from you on the page
	$( "tr" ).remove( ".event" );
	const t = getEventsDistance(xUser,yUser);
	console.log(t);
	//getEventsNearMe(t,5);
	console.log(xUser,yUser);
	getEventsMeetups(xUser*9,yUser*18,50);
		
});
function getEventsMeetups(latitude,longitude,radius){
	/*fetch('http://api.meetup.com/2/cities?sign=true&photo-host=public&lon= '+longitude+'&radius='+radius+'&lat='+latitude+'&page=20',{
		method: 'GET',
		headers: {
			Origin: 'localhost:63342'
		},
		mode: 'cors'
	}).then(response => {
		response.json().then(meetup =>{
			console.log(meetup);
		});
	});*/
	const meetupAPI = "http://api.meetup.com/2/open_events";
	$.getJSON( meetupAPI, {
		lon: -0.2322004,
		lat:51.5818386,
		radius: radius,
		country:'gb',
		text:'javascript',
		page: 20,
		order:'distance',
		key: keyAPI,
		sign: true
	})
		.done(function( data ) {
			console.log(data);
		});

}
