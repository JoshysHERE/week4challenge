var startButton = document.getElementById('start-button')
var nextButton = document.getElementById('next-button')
var questionContainer = document.getElementById ('question-container')
var question = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')


let randomQuestions, questionIndex

//event clicks for star/next buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion() 
})

// this function will start the game
function startGame() {
    console.log('started game')
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()

}
// this will send the next question
function nextQuestion() {
showQuestion(randomQuestions[questionIndex])
}    

function showQuestion(question) {
question.innerText = question.question
question.answers.forEach(answer => {
var button = document.createElement('button')
button.innerText = answer.text
button.classList.add('buttons')
if (answer.correct) {
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtons.appendChild(button)
 })

}


function resetPage() {
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild
        (answerButtons.firstChild)
        
    }
}

function selectAnswer(e) {
    var selectButton = e.target
    var correct = selectButton.dataset.correct
 setStatus(document.body, correct)
 Array.from(answerButtons.children).forEach(button => {
    setStatus(button, button.dataset.correct)
 })

 if (randomQuestions.length > questionIndex + 2) {
    nextButton.classList.remove('hide')
} else { 
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
 } 
}
 

function setStatus(element, correct) {
clearStatus(element)
if (correct) {
    element.classList.add('correct')
 } else {
    element.classList.add('wrong')
 }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//questions for the quiz
const questions = [
    {
      question: 'What do you use to comment in HTML?',
      answers: [
        { text: '//', correct: true },
        { text: '/**/', correct: false }
      ]
    },
    {
      question: 'What do you use to style your HTML',
      answers: [
        { text: 'CSS', correct: true },
        { text: 'Javascript', correct: false },
        { text: 'Java', correct: false },
        { text: 'Python', correct: false }
      ]
    },
    {
      question: 'How do you use the DevTools on MAC?',
      answers: [
        { text: 'CMD, Option S', correct: false },
        { text: 'CMD, Option J', correct: true },
        { text: 'CMD, Option C', correct: false },
        { text: 'CMD, Option P', correct: false }
      ]
    },
    {
      question: 'Which extension in VSCode allows you to preview your work??',
      answers: [
        { text: 'ProjectLense', correct: false },
        { text: 'LiveServer', correct: true }
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
