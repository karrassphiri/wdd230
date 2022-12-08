/*const form = document.getElementById('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const payload = new FormData(form);

  console.log([...payload]);
  fetch("https://fruityvice.com/api/fruit", {
    method: "POST",
    body: data,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
})*/
function check() {
  document.getElementById('firstname').innerHTML = document.form.name.value;
  document.getElementById('phonenum').innerHTML = document.form.phone.value;
  document.getElementById('emailadd').innerHTML = document.form.email.value;
  document.getElementById('fr1').innerHTML = document.form.fruit1.value;
  document.getElementById('fr2').innerHTML = document.form.fruit2.value;
  document.getElementById('fr3').innerHTML = document.form.fruit3.value;
  document.getElementById('instruct').innerHTML = document.form.user_message.value;
}



