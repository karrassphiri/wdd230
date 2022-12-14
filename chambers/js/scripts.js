//Script for the hamburger menu

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");

}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//script for header date

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date1");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


//script for year
const year = {
	year: 'numeric'
};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', year);

//script for date
const options = {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);
//Date for the hidden field on a form in the Join page
document.getElementById('theDate').textContent = new Date().toLocaleDateString('en-US', options);

/* ANNOUNCEMENT BANNER */

const announcementbanner = document.querySelector(".announcement");
if (now.getDay() === 1 || now.getDay() === 2) {
	//if today is Monday or Tuesday, display the announcement banner
	announcementbanner.style.display = "flex";
} else {
	//otherwise do not display it
	announcementbanner.style.display = "none";
}

/*NUMBER OF VISITS*/

const numVisits = document.querySelector('.numOfVisit');

const numOfVisits = Number(window.localStorage.getItem('visits'));
const lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

const daysBetween = Date.now() - lastVisit;

const numOfDays = Math.ceil(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {

    numVisits.textContent = 'It\'s been ' + numOfDays + ' day(s) since you last visited.'

} else {
    numVisits.textContent = 'This is your first visit on this site.'
}

numOfVisits++;

localStorage.setItem("visits", numOfVisits);




