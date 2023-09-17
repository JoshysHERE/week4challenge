var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById ('question-container')
var questionEl = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')

let randomQuestions, questionIndex


startButton.addEventListener('click', startGame)

// this function will start the game
function startGame() {
    console.log('started game')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()

}
// this will send the next question
function setNextQuestion() {
showQuestion(randomQuestions[questionIndex])
}    

function showQuestion(question) {
questionEl.innerText = question.question
question.answers.forEach(answer => {
var button = document.createElement('button')
button.innerText = answer.text
button.classList.add('button')
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtons.appendChild(button)
 })

}



function selectAnswer() {

}
//questions for the quiz
var questions = [
    {
        question: 'How do i open the dev tools on mac?',
        answers: [
            { text: 'CMD, Option & J', correct: true },
            { text: 'CMD, Option & I', correct: false },
            { text: 'CMD, Option & Y', correct: false },
            { text: 'CMD, Option & P', correct: false },
 
        ]
    }
]








// AS A coding boot camp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
//HEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
