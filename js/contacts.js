
// Hours Generation //
const hoursStart = 8;
const hoursEnd = 16;

function returnFormattedHourString(hour, minutes = 0) {
	var h = hour.toString();
	if (hour < 10) {
		h = "0" + h;
	}
	var m = minutes.toString();
	if (minutes < 10) {
		m = "0" + m;
	}
	return h + ":" + m;
}

function generateHours() {
	var inner = "";
	for (var i = hoursStart; i <= hoursEnd; i++) {
		inner += `<option value="${i}">${returnFormattedHourString(i)}</option>`;
	}
	document.getElementById("contactInputHour").innerHTML = inner;
}

generateHours();
//////////////////////

// Days generation //

const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];

function generateDays() {
	var inner = "";
	for (var i=0; i < days.length; i++) {
		inner += `<option value="${i+1}">${days[i]}</option>`
	}
	document.getElementById("contactInputDay").innerHTML = inner;
}

generateDays();

/////////////////////