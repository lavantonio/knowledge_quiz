window.addEventListener('load', start);

const myH1 = document.querySelector('h1');
let optionsP = document.querySelectorAll('.optionP');
let options = document.querySelectorAll('.option');
let playerBtn = document.querySelector('.playerBtn');
let addPlayer = document.querySelector('#addPlayer');
let game = document.querySelector('#game');
let startAddPlayer = document.querySelector('#startAddPlayer');
let secondH1 = document.querySelector('#secondH1');
let header = document.querySelector('header');
let playerHtml = document.querySelector('.player');


let playersBtnArray = [];
let playerGame;
let area;
let playerBtnText;
let counter = 1;
let counterBtn = 1;

function start() {
  myH1.innerHTML = startGame[0].text;
  playerBtn.addEventListener('click', choosePlayer);
}

function choosePlayer() {
  game.classList.add('displayNone');
  addPlayer.classList.remove('displayNone');
  let text = "";
  let btnArray = [];
  for (let i = 0; i < player.length; i++) {
    let createPlayer = player[i].createPlayer();
    text += createPlayer;
    btnArray.push(player[i].getPlayer());
  }
  startAddPlayer.innerHTML = text;
  for (let i = 0; i < btnArray.length; i++) {
    let playerBtn = document.querySelector(btnArray[i]);
    playerBtn.addEventListener('click', readPlayer);
    playersBtnArray.push(playerBtn);
  }
}

function readPlayer() {
  for (let i = 0; i < playersBtnArray.length; i++) {
    if (playersBtnArray[i] == this) {
      playerGame = player[i].player;
      chooseArea();
    }
  }
}

function chooseArea() {
  playerBtn.classList.add('displayNone');
  game.classList.remove('displayNone');
  addPlayer.classList.add('displayNone');
  myH1.innerHTML = startGame[2].text;
  for (let i = 0; i < categories.length; i++) {
    options[i].classList.remove('displayNone');
    optionsP[i].innerHTML = categories[i].getCategory();
    optionsP[i].onclick = function() {
      area = this.innerHTML;
      run();
    }
  }
}

function run() {
  if (!quiz.end()) {
    counterBtn = 1;
    counter = 1;
    areaArray = [`Geografija`, `Istorija`, `Matematika`, 'Opste obrazovanje'];
    let getQuestionArray = [quiz.getQuestionGeography(), quiz.getQuestionHistory(), quiz.getQuestionMathematics(), quiz.getQuestionTheGeneralEducation()];
    let randomizeArray = [quiz.randomizeGeography(), quiz.randomizeHistory(), quiz.randomizeMathematics(), quiz.randomizeTheGeneralEducation()];
    for (let i = 0; i < areaArray.length; i++) {
      if (areaArray[i] == area) {
        var currentQuestion = getQuestionArray[i];
        var rand = randomizeArray[i];
      }
    }
    myH1.innerHTML = currentQuestion.text;
    myH1.style.fontSize = "1.5rem";
    secondH1.style.fontSize = "1.5rem";
    playerHtml.classList.remove('displayNone');
    leftPlayerText = playerGameLeft.createPlayer();
    playerHtml.innerHTML = leftPlayerText;
    playerBtnText = document.querySelector('#playerBtn');
    for (let i = 0; i < 4; i++) {
      optionsP[i].innerHTML = rand[i];
      optionsP[i].classList.remove('displayBorderRed');
      optionsP[i].classList.remove('displayBorderBlue');
      optionsP[i].onclick = function() {
        if ('Geografija' == area) {
          if (counter == 1) {
            quiz.userAnswerGeography(this.innerHTML);
            counter++;
            quiz.correctAnswerG(this.innerHTML, this);
            counterBtn++;
            buttonCorrector();
          }
        } else if ('Istorija' == area) {
          if (counter == 1) {
            quiz.userAnswerHistory(this.innerHTML);
            counter++;
            quiz.correctAnswerHistory(this.innerHTML, this);
            counterBtn++;
            buttonCorrector();
          }
        } else if ('Matematika' == area) {
          if (counter == 1) {
            quiz.userAnswerMathematics(this.innerHTML);
            counter++;
            quiz.correctAnswerMathematics(this.innerHTML, this);
            counterBtn++;
            buttonCorrector();
          }
        } else {
          if (counter == 1) {
            quiz.userAnswerTheGeneralEducation(this.innerHTML);
            counter++;
            quiz.correctAnswerTheGeneralEducation(this.innerHTML, this);
            counterBtn++;
            buttonCorrector();
          }
        }
      }
    }
  } else {
    if (playerGame == `ivo`) {
      myH1.innerHTML = `Ivo je osvojio ukupno ${quiz.score} poena`;
    } else if (playerGame == `lav`) {
      myH1.innerHTML = `Lav je osvojio ukupno ${quiz.score} poena`;
    } else if (playerGame == `horhe`) {
      myH1.innerHTML = `Horhe je osvojio ukupno ${quiz.score} poena`;
    } else if (playerGame == `kristina`) {
      myH1.innerHTML = `Kristina je osvojila ukupno ${quiz.score} poena`;
    } else if (playerGame == `vladanka`) {
      myH1.innerHTML = `Vladanka je osvojila ukupno ${quiz.score} poena`;
    } else {
      myH1.innerHTML = `Justina je osvojila ukupno ${quiz.score} poena`;
    }
    secondH1.classList.remove('displayNone');
    secondH1.innerHTML = `***** CESTITAMO *****`;
    header.style.display = "block";
    header.style.paddingTop = "15px";
    playerBtn.classList.remove('displayNone');
    playerBtn.innerHTML = `Izaberite ponovo oblast`;
    playerBtn.addEventListener('click', endGame);
    playerBtn.style.lineHeight = '60px';
    for (var i = 0; i < 4; i++) {
      options[i].classList.add('displayNone');
    }
  }
}

function buttonCorrector() {

  if (counterBtn == 2) {
    playerBtnText.addEventListener('click', run);
  }
}

function endGame() {
  quiz.index = 0;
  quiz.score = 0;
  myH1.innerHTML = startGame[2].text;
  secondH1.classList.add('displayNone');
  header.style.display = "flex";
  header.style.paddingTop = "0";
  myH1.style.fontSize = "2.5rem";
  for (let i = 0; i < optionsP.length; i++) {
    optionsP[i].classList.remove('displayBorderBlue');
    optionsP[i].classList.remove('displayBorderRed');
  }
  chooseArea();
}
