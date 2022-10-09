//Script for the hamburger menu

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//script for year
const year = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', year);

//script for date
const options = {day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

