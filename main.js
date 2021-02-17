
window.addEventListener('load', start);

const myH1 = document.querySelector('h1');
let optionsP = document.querySelectorAll('.optionP');
let options = document.querySelectorAll('.option');
let playerBtn = document.querySelector('.playerBtn');
let addPlayer = document.querySelector('#addPlayer');
let game = document.querySelector('#game');
let startAddPlayer = document.querySelector('#startAddPlayer');

let playersBtnArray = [];
let playerGame;
let area;

function start(){
  myH1.innerHTML = startGame[0].text;
  playerBtn.addEventListener('click',choosePlayer);
  }

function choosePlayer(){
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
    playerBtn.addEventListener('click',readPlayer);
    playersBtnArray.push(playerBtn);
  }
}
function readPlayer(){
  for (let i = 0; i < playersBtnArray.length; i++) {
    if (playersBtnArray[i] == this) {
      playerGame = player[i].player;
      chooseArea();
    }
  }
}
function chooseArea(){
  playerBtn.classList.add('displayNone');
  game.classList.remove('displayNone');
  addPlayer.classList.add('displayNone');
  for (let i = 0; i < categories.length; i++) {
    options[i].classList.remove('displayNone');
    optionsP[i].innerHTML = categories[i].getCategory();
    optionsP[i].onclick = function(){
      area = this.innerHTML;
      run();
  }
}

function run(){
  let currentQuestion;
  if (area == `Geografija`) {
    currentQuestion = quiz.getQuestionGeography();
    var rand = quiz.randomizeGeography();
  }else if (area == `Istorija`){
    currentQuestion = quiz.getQuestionHistory();
    var rand = quiz.randomizeHistory();
  }else if (area == `Matematika`){
    currentQuestion = quiz.getQuestionMathematics();
    var rand = quiz.randomizeMathematics();
  }else{
    currentQuestion = quiz.getQuestionTheGeneralEducation();
    var rand = quiz.randomizeTheGeneralEducation();
  }
  myH1.innerHTML = currentQuestion.text;
  myH1.style.fontSize = "1.5rem";
  for (let i = 0; i < 4; i++) {
  optionsP[i].innerHTML = rand[i];
  optionsP[i].onclick = function(){

    run();
  }

  // if (!quiz.end()){
  //   let currentQuestion = quiz.getQuestion();
  //   myH1.innerHTML = currentQuestion.text;
  //   let rand = quiz.randomize();
  //   for (let i = 0; i < 4; i++) {
  //     options[i].innerHTML = rand[i];
  //     options[i].onclick = function(){
  //       quiz.userAnswer(this.innerHTML);
  //       run();
  //     }
  //   }
  // }else{
  //   alert(`Kraj
  //     vas rezultat je ${quiz.score}`)
  // }

}
}
}
