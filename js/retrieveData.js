let retrieveBtn = document.querySelector('#retrieveBtn'); //mejor utilizar querySelector
let userNames = document.querySelectorAll('.names'); //mejor utilizar querySelector
let resultDiv = document.querySelector('#queryResults'); //mejor utilizar querySelector

console.log(retrieveBtn);

retrieveBtn.addEventListener('click', () => {
  //Loop For necesario para recorrer cada petición
  for (let userName of userNames) {
    loading = createElement(resultDiv);

    if (userName.value == null || userName.value == '') {
      console.log('usuario no definido');
      continue;
    }
    //Fetch a la API, selección y guardado de datos y  generación de respuesta en el DOM
    fetch(`https://api.github.com/users/${userName.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.avatar_url);
        let elementAdd = data.avatar_url;
        let newLink = document.createElement('a');
        let textInside = `${userName.value} avatar url`;
        newLink.append(textInside);
        newLink.href = elementAdd;
        resultDiv.appendChild(newLink);
        loading.remove();
      });
  }
});

function createElement(element) {
  // Creación de los estados de las peticiones para cada input
  let newLoadingElmnt = document.createElement('p');
  newLoadingElmnt.innerHTML = 'loading...';
  newLoadingElmnt.className = 'loadingElement';
  resultDiv.appendChild(newLoadingElmnt);

  return newLoadingElmnt;
}
