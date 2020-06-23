var startButton = document.querySelector("#start");
var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");

startButton.addEventListener("click", function (event) {
    event.preventDefault();
})

function renderLastRegistered() {
    var name = localStorage.getItem("name");
    if (name === null) {
        return;
    }
    userEmailSpan.textContent = name;
}

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var name = window.localStorage.getItem('name');
    userNameSpan.textContent = name;
};

    

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.querySelector('#name').value;

window.localStorage.setItem('name', name);

renderLastRegistered();
})