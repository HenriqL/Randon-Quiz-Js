const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

//Função que ira colocar as pergutas 
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

// Define o numero das questões e opções de respostas 
function getNewQuestion(){

}

window.onload = function(){
    //Para definir todas as questões em etAvailableQuestions
    setAvailableQuestions();
    //Vai chamar a função getNewQueston
    getNewQuestion();
}
console.log(quiz);
// Video 2 14min