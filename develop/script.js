var quizContainer = document.getElementById('quiz');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");

startButton.addEventListener("click", function (event) {
    event.preventDefault();
})

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showresults);
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

var myQuestions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log", 
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log", 
        },
        correctAnswer: "3"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log", 
        },
        correctAnswer: "3"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log", 
        },
        correctAnswer: "3"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "Javascript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log", 
        },
        correctAnswer: "3"
    },
]