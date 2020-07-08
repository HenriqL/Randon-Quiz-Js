const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

//Função que ira colocar as pergutas 
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

// Define o numero das questões e opções de respostas 
function getNewQuestion(){
    //Coloca o numero das questões
    questionNumber.innerHTML = "Questão " + (questionCounter +1) + ' de ' + quiz.length;
    //Coloca as questões
    //Coloca as questões aleatoriamente
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //Obtem a posição de "Questionindex" dentro do Array AvailableQuestions;
    const index1= availableQuestions.indexOf(questionIndex);
    //remove "questionIndex" de availableQuestion array, e faz   com que ela não se repita  
    availableQuestions.splice(index1,1);
    //adocionas as opções
    const optionLen = currentQuestion.options.length
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    //Adiciona as opções no html
    for(let i=0; i<optionLen; i++){
    //randomiza as opções 
    const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    //Obtem a posição de "optionIndex" dentro do Array AvailableOptions;
    const index2 =  availableOptions.indexOf(optionIndex);
    //remove "optionIndex" de availableOptions array, e faz   com que ela não se repita  
    availableOptions.splice(index2,1);

    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.className = "option";
    optionContainer.appendChild(option)

    }


    questionCounter++
    

}
//Faz o botão Next setar uma questão randomizada 
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
    }else{
        getNewQuestion();
    }
}




window.onload = function(){
    //Para definir todas as questões em etAvailableQuestions
    setAvailableQuestions();
    //Vai chamar a função getNewQueston
    getNewQuestion();
}
console.log(quiz);
// Video 2 14min