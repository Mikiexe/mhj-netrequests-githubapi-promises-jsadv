let addMoreInput = document.getElementById('addMore');
let inputDiv = document.getElementById('inputText');

console.log(addMoreInput);

addMoreInput.addEventListener('click', () => {
  console.log('añadido');
  let newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.className = 'names';
  inputDiv.appendChild(newInput);
});
