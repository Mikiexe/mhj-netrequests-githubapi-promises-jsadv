export function getUserFromGitHub(user, writeToDOM, removeLoading) {
  //Fetch a la API, selección y guardado de datos y  generación de respuesta en el DOM
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.avatar_url);
      writeToDOM(`${user} avatar url`, data.avatar_url);
      removeLoading();
    });
}

export async function getUserFromGitHub2(user, writeToDOM, removeLoading) {
  //Fetch a la API, selección y guardado de datos y  generación de respuesta en el DOM
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  console.log(data.avatar_url);
  writeToDOM(`${user} avatar url`, data.avatar_url);
  removeLoading();
}

export function isValidUser(user) {
  return !(user == null || user == '');
}
