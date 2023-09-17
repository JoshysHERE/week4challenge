var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById ('question-container')
startButton.addEventListener('click', startGame)

// this function will start the game
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()

}
// this will send the next question
function setNextQuestion() {

}    

function selectAnswer() {

}
//questions for the quiz
var questions = [
    {
        question: 'what is this?',
        answers: [
            { text: 'you know what it is', correct: true },
            { text: 'da other thang', correct: false}
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
