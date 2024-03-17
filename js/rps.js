$(document).ready(function() {
    let userScore = 0;
    let computerScore = 0;
    let choices = ['rock', 'paper', 'scissors'];
  
    function updateScore() {
        $('#user-score').text(`User: ${userScore}`);
        $('#computer-score').text(`Computer: ${computerScore}`);
    }
  
    function getComputerChoice() {
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
  
    function compareChoices(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Tie!';
        } else if (userChoice === 'rock') {
            if (computerChoice === 'scissors') {
                return 'You Win!';
            } else {
                return 'You Lose!';
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                return 'You Win!';
            } else {
                return 'You Lose!';
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return 'You Win!';
            } else {
                return 'You Lose!';
            }
        }
    }
  
    $('.user-choice button').click(function() {
        let userChoice = $(this).text().toLowerCase();
        if (!choices.includes(userChoice)) {
            $('#message').text('Invalid Choice!');
            return;
        }
  
        let computerChoice = getComputerChoice();
  
        // Update message and scores based on comparison
        let result = compareChoices(userChoice, computerChoice);
        $('#message').text(result);
  
        if (result === 'You Win!') {
          userScore++;
        } else if (result === 'You Lose!') {
          computerScore++;
        }
  
        updateScore();
    });
  });
  