const year = {year:'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', year);

const options = {day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

