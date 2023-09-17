// Puts a handle on start game and question container
var startButton = document.getElementById("start-button")
var questionContainer = document.getElementById("question-container")

var questionIndex 

startButton.addEventListener("click", startGame)



// Begins the game with the push of a button
function startGame() {
startButton.classList.add
questions.sort(() => Math.random() - .5)
questionIndex = 0
nextQuestion() 

}
//Set function for next question
function nextQuestion() {
showQuestion
}

//set function for select answer
function selectAnswer() {

//Set up questions for quiz section?
var questions = [
{
    question: 'say whaaaaaat?'
    answers: [
        { text: 'what', correct: true },
        { text: 'why', correct: tfalse }
    ]
}

]  

}

//set up a timer?
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
    
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        display.textContent = minutes + ":" + seconds;
    
        if(--timer < 0) {
        timer = duration;
        }
      },1000);
    }
    
    window.onload = function () {
       var fiveMinutes = 60 * 5,
       display = document.querySelector('time');
       startTimer(fiveMinutes, display);
    };

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
