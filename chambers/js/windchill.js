
//select output elements
const windspeed = document.querySelector ('#speed');
const temperature = document.querySelector('#temp');
const description = document.querySelector ('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');

//Get the weather data from the API- openweathermap.org
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Lilongwe,Mw&units=metric&appid=910d98e020c88d4ac0c19f9874cb1e2e';

async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);//this is for testing the call
      displayResults(data);
    } else {
      console.log('Response not OK ${await response.text()}');
    }
  } catch(error) {
    console.log(`Error: ${error.message}`);
  }
}
apiFetch();

//capitalize

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

//display the results

function displayResults(data) {
  temperature.textContent = data.main.temp.toFixed(0);
  windspeed.textContent =data.wind.speed.toFixed(0);
  let desc = capitalize(data.weather[0].description)
  description.textContent = desc;
  caption.textContent = desc;
  weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weathericon.alt = `Icon of current weather condition of Lilongwe which is ${desc}`;
}

//Output results to calculate the wind Chill

const f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

if (temp <= 50 && speed > 3) {
    windchill= f.toFixed(1);
} 
else {
    windchill= "N/A";
}
document.getElementById("windchill").innerHTML = windchill