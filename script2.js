let body = document.querySelector('body');
let divMain = document.createElement('div');
body.appendChild(divMain);
const userName = document.getElementById("nameinput");
let button = document.createElement('button');
button.innerHTML = "submit"
divMain.appendChild(button)

button.addEventListener('click', function(){
    let guessAge = "https://api.agify.io?name=" + userName.value;
    fetch(guessAge)
    .then(function(response){
        return response.json();
    })
    .then(function(guessAge){
        console.log(guessAge);
        display(guessAge);
    })

})

function display(element){
    let age = document.createElement('p');
    age.innerHTML = element.age;
    divMain.appendChild(age);
}
