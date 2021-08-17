let body = document.querySelector('body');
let divMain = document.createElement('div');
body.appendChild(divMain);
const userName = document.getElementById("nameinput");
let button = document.createElement('button');
button.innerHTML = "submit"
divMain.appendChild(button)

button.addEventListener('click', function(){
    let guessGender = "https://api.genderize.io?name=" + userName.value
    fetch(guessGender)
    .then(function(response){
        return response.json();
    })
    .then(function(guessGender){
        console.log(guessGender)
        display(guessGender);
    })

})

function display(element){
    let gender = document.createElement('p');
    gender.innerHTML = element.gender;
    divMain.appendChild(gender);
}
