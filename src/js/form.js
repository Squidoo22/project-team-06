const inputs = document.querySelectorAll('input[name^="user-"]');
const textarea = document.querySelectorAll('textarea[name^="user-"]');
const radios = document.querySelectorAll('[name="teacher"]');
const form = document.querySelector('.leave__feedback');

form.addEventListener('input', () => {
  const feedbackState = {};
  inputs.forEach(input => {
    feedbackState[input.name.split('-')[1]] = input.value;  });
});

inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value.length > 0) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    }
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  let isValid = true;
  inputs.forEach(input => {
    if (input.value === '') {
      input.classList.add('invalid');
      isValid = false;
    } else {
      input.classList.remove('invalid');
      input.classList.remove('valid');
    }
  });
  if (isValid) {
    getValue()
    clearFields()
  }});

const getValue = () => {
  const data = {}
  const selectedRadio = document.querySelector('[name="teacher"]:checked');

  inputs.forEach(input => {
    data[input.name] = input.value;
  });
  data[textarea[0].name] = textarea[0].value;
  data.teacher = selectedRadio ? selectedRadio.value : null;

  // return data
  console.log(data)
}

const clearFields = () => {
  inputs.forEach(input => {
    input.value = '';
  });
  textarea[0].value = '';
  radios.forEach(radio => {
    radio.checked = false;
  });
  radios[0].checked = true;
}

