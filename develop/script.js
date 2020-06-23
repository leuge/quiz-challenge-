var quizContainer = document.querySelector('quiz');
var startButton = document.querySelector('start');
var submitButton = document.querySelector('submit');
var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");

startButton.addEventListener('click', buildQuiz);

function buildQuiz(){
    //variable to store the HTML output
    var output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            var answers = [];

            for(number in currentQuestion.answers){

                //..add an html radio button
                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="{number}"></input>
                        ${number} :
                        ${currentQuestion.answers[number]}
                    </label>
                );
            }
            //add question and output answers
            output.push(
                <div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join('')}</div>
            );
        }
    );
    //combine output list into string of HTML
    quizContainer.innerHTML = output.join('');
}

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
        correctAnswer: "4"
    },
    {
        question: "Commonly used data types do NOT include",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers", 
        },
        correctAnswer: "3"
    },
    {
    question: "The condition in an if / else statement is enclosed with ___.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets", 
        },
        correctAnswer: "3"
    },
    {
    question: "Arrays in JavaScript can be used to store ___.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above", 
        },
        correctAnswer: "4"
    },
    {
    question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis", 
        },
        correctAnswer: "3"
    },
]