import { getUserFromGitHub2, isValidUser } from './logicaNegocio.js';

let retrieveBtn = document.querySelector('#rButton');
let userNames = document.querySelectorAll('.names');
let resultDiv = document.querySelector('#queryResults');

console.log(retrieveBtn);

retrieveBtn.addEventListener('click', () => {
  //Loop For necesario para recorrer cada petición
  for (let userName of userNames) {
    const loading = createLoading(resultDiv);

    if (!isValidUser(userName.value)) {
      console.log('usuario no definido');
      continue;
    }

    getUserFromGitHub2(
      userName.value,
      (texto, avatarUrl) => {
        let newLink = document.createElement('a');
        newLink.append(texto);
        newLink.href = avatarUrl;
        resultDiv.appendChild(newLink);
      },
      () => loading.remove()
    );
  }
});

function createLoading(element) {
  // Creación de los estados de las peticiones para cada input
  let newLoadingElmnt = document.createElement('p');
  newLoadingElmnt.innerHTML = 'loading...';
  newLoadingElmnt.className = 'loadingElement';
  element.appendChild(newLoadingElmnt);

  return newLoadingElmnt;
}
