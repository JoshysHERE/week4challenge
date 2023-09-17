var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var questionContainer = document.getElementById("question-container")
var question = document.getElementById('answer-buttons')
let randomQuestions, questionIndex 
// start game and question container
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () =>{
questionIndex++
nextQuestion()
})


// Begins the game with the push of a button
function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  randomQuestions = question.Sort(() => Math.random() - .5)
  questionIndex = 0
  questionContainer.classList.remove('hide')
  nextQuestion() 

}

// Actually make a function to show the question
function showQuestion(question) {

}
//Set function for next question
function nextQuestion() {

}

//set function for select answer



 
//Set up questions for quiz section?
var questions = [
{
    question: 'say whaaaaaat?',
    answers: [
        { text: 'what', correct: true },
        { text: 'why', correct: false }
    ]
}

]  



//set up a timer?

 //add something to enter name for high score

















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
