import './index.css';

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');

const inputs = [inputName, inputEmail, inputPhone];

form.addEventListener('submit', (event) => {

  event.preventDefault();

  console.log('form.checkValidity()', form.checkValidity());
  // console.log('form.reportValidity()', form.reportValidity());

  inputs.forEach(input => {
    console.log(`${input.id}.validity`, inputName.validity);
    console.log(`${input.id}.validationMessage`, inputName.validationMessage);
    console.log(`${input.id}.checkValidity`, inputName.checkValidity());
  });
}, false);
