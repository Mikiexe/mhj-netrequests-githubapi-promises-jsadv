let retrieveBtn = document.getElementById('retrieveBtn');
let userNames = document.getElementsByClassName('names');
let resultDiv = document.getElementById('queryResults');

console.log(retrieveBtn);

retrieveBtn.addEventListener('click', () => {
  // console.log(userNames);
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i].value == null || userNames[i].value == '') {
      console.log('usuario no definido');
    } else {
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
    }
  }
});
