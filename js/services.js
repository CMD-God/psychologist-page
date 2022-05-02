
var servicesTexts = [
	"Pszihologia Test",
	"Coaching Test",
	"[Insert things here]",
	"Legyen azert a teszt szoveg is valtozatos",
	"Na, meg mennyi van?",
	"Yoloooooo!",
	"This is completely unprofessional of me, isn't it?"
]

var servicesCarousel = $('#servicesCarousel').carousel({ // The return value is simply the carousel element. You will have to call the carousel method on this every single time still.
	interval: false,
	keyboard: false,
	pause: false,
	ride: false,
	wrap: true
});
//console.log(servicesCarousel);

const textElement = document.getElementById("servicesText");
const ghostElement = document.getElementById("servicesGhostText");

// TODO: Rework this entire system, because I misunderstood what I was supposed to do!

function returnServiceButtonFunction(i) {
	const id = i;
	return function() {
		ghostElement.innerHTML = textElement.innerHTML;
		textElement.innerHTML = servicesTexts[id] || "ERROR: Not enough services texts!";
		servicesCarousel.carousel(id);
		$(textElement).css("opacity", "0").stop().animate({opacity: "1"});
		$(ghostElement).css("opacity", "1").stop().animate({opacity: "0"});
		
		$("#servicesListGroup .list-group-item").removeClass("selected");
		$(this).addClass("selected");
	}
}

function setUpServices() {
	var p = document.getElementById("servicesListGroup");
	for (var i=0; i < p.children.length; i++) {
		var item = p.children[i];
		item.onclick = returnServiceButtonFunction(i);
	}
	p.firstElementChild.click();
}

setUpServices();

