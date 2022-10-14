//Gets the elements from the page
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Listens for the button click and adds a list
button.addEventListener('click', function() {
    //Stores input values
    let value = input.value;
    //Stores total number of li items in ul
    let liCount = document.getElementsByTagName('li').length+1;
    //Checks that a value was entered
    if (!value.trim()) {
        console.log('Please enter a book and chapter');
    //If something is entered, this creates and adds new li
    } else {
        // creates elements to add to the list
        const newLi = document.createElement('li');
        const btnNew = document.createElement('button');
        // set values of elements
        newLi.textContent = value;
        btnNew.textContent = 'X';
        // add elements to the page
        list.appendChild(newLi).appendChild(btnNew);
        // listens for delete click and removes the related li
        btnNew.onclick = function() {
            list.removeChild(newLi);
        }
    }
    // sets the focus back to the input field
    input.focus();
    // clears the input field
    input.value = '';
});