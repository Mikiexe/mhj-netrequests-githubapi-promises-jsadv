let retrieveBtn = document.getElementById('retrieveBtn');
let userNames = document.getElementsByClassName('names');
let resultDiv = document.getElementById('queryResults');

console.log(retrieveBtn);

retrieveBtn.addEventListener('click', () => {
  //Loop For necesario para recorrer cada petición
  for (let i = 0; i < userNames.length; i++) {
    // Creación de los estados de las peticiones para cada input
    let newLoadingElmnt = document.createElement('p');
    newLoadingElmnt.innerHTML = 'loading...';
    newLoadingElmnt.className = 'loadingElement';
    resultDiv.appendChild(newLoadingElmnt);

    if (userNames[i].value == null || userNames[i].value == '') {
      console.log('usuario no definido');
    } else {
      let promiseLoading = new Promise((resolve, myReject) => {
        //Fetch a la API, selección y guardado de datos y  generación de respuesta en el DOM
        fetch(`https://api.github.com/users/${userNames[i].value}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.avatar_url);
            let elementAdd = data.avatar_url;
            let newLink = document.createElement('a');
            let textInside = `${userNames[i].value} avatar url`;
            newLink.append(textInside);
            newLink.href = elementAdd;
            resultDiv.appendChild(newLink);
          });
      });
      promiseLoading.then(function (result) {
        console.log('hey');
        newLoadingElmnt.remove();
      });
    }
  }
});
