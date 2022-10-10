//Script for the hamburger menu

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//script for header date

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date1");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;






//script for year
const year = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', year);

//script for date
const options = {day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

