/*form.addEventListener('submit', function(e){
  e.preventDefault()*/

function check() {

  document.getElementById('firstname').innerHTML = document.form.name.value;
  document.getElementById('phonenum').innerHTML = document.form.phone.value;
  document.getElementById('emailadd').innerHTML = document.form.email.value;
  document.getElementById('instruct').innerHTML = document.form.user_message.value;

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  document.getElementById('formdate').textContent = new Date().toLocaleDateString('en-US', options);
  document.getElementById('thanks').innerHTML = 'We will make your juice in due time!'
}

/****Script for displaying fruits nutritions******/
const reqtURL = ('https://karrassphiri.github.io/wdd230/bountiful/json/fruits.json')
const gridbutton = document.querySelector("#grid");
const display = document.querySelector("#cards");

function fruitDetails(info, type) {
  let data = info.fruits;
  data.forEach((fruit) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p2");

    card.setAttribute("class", "section");
    p.innerHTML = `${fruit.name}`;
    p2.innerHTML = `${fruit.nutritions}`;

    card.appendChild(p);
    card.appendChild(p2);
    

    display.classList.add(type);
    display.append(card);
  });
}

async function getFruits(type) {
  let response = await fetch(reqtURL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}
getFruits("grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
  
});

