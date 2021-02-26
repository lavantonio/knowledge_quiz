
class Quiz{
  constructor(questionsHistory, questionGeography, questionMathematics, questionTheGeneralEducation){
    this.questionsHistory = questionsHistory;
    this.questionsGeography = questionsGeography;
    this.questionsMathematics = questionsMathematics;
    this.questionsTheGeneralEducation = questionsTheGeneralEducation;
    this.index = 0;
    this.score = 0;
    this.questionNumber = 1;
  }
  getQuestionGeography(){
    return this.questionsGeography[this.index];
  }
  getQuestionHistory(){
    return this.questionsHistory[this.index];
  }
  getQuestionMathematics(){
    return this.questionsMathematics[this.index];
  }
  getQuestionTheGeneralEducation(){
    return this.questionsTheGeneralEducation[this.index];
  }
  randomizeGeography(){
    let copyArray = [].concat(this.getQuestionGeography().option);
    let rand = [];
    for (let i = 0; i < 4; i++) {
      let r = Math.floor(Math.random()*copyArray.length);
      rand.push(copyArray[r]);
      copyArray.splice(r,1);
    }
    return rand
  }
  randomizeHistory(){
    let copyArray = [].concat(this.getQuestionHistory().option);
    let rand = [];
    for (let i = 0; i < 4; i++) {
      let r = Math.floor(Math.random()*copyArray.length);
      rand.push(copyArray[r]);
      copyArray.splice(r,1);
    }
    return rand
  }
  randomizeMathematics(){
    let copyArray = [].concat(this.getQuestionMathematics().option);
    let rand = [];
    for (let i = 0; i < 4; i++) {
      let r = Math.floor(Math.random()*copyArray.length);
      rand.push(copyArray[r]);
      copyArray.splice(r,1);
    }
    return rand
  }
  randomizeTheGeneralEducation(){
    let copyArray = [].concat(this.getQuestionTheGeneralEducation().option);
    let rand = [];
    for (let i = 0; i < 4; i++) {
      let r = Math.floor(Math.random()*copyArray.length);
      rand.push(copyArray[r]);
      copyArray.splice(r,1);
    }
    return rand
  }
  userAnswerGeography(answer){
    if(answer == this.getQuestionGeography().answer){
    this.score += this.getQuestionGeography().points;
    }
    this.index++;
    this.questionNumber++;
  }
  userAnswerHistory(answer){
    if(answer == this.getQuestionHistory().answer){
    this.score += this.getQuestionHistory().points;
    }
    this.index++;
    this.questionNumber++;
  }
  userAnswerMathematics(answer){
    if(answer == this.getQuestionMathematics().answer){
    this.score += this.getQuestionMathematics().points;
    }
    this.index++;
    this.questionNumber++;
  }
  userAnswerTheGeneralEducation(answer){
    if(answer == this.getQuestionTheGeneralEducation().answer){
    this.score += this.getQuestionTheGeneralEducation().points;
    }
    this.index++;
    this.questionNumber++;
  }
  correctAnswerG(answer, thisElement){
    thisElement.classList.add('displayBorderRed');
    if (this.questionsGeography[this.index-1].answer == answer) {
      thisElement.classList.add('displayBorderBlue');
      thisElement.classList.remove('displayBorderRed');
        }
    setTimeout(function (){
    for (var i = 0; i < optionsP.length; i++) {
      if (optionsP[i].innerHTML == quiz.questionsGeography[quiz.index-1].answer) {
        optionsP[i].classList.add('displayBorderBlue');
      }
    }
  },1000)
    myH1.innerHTML = `Tacan odgovor je ${this.questionsGeography[this.index-1].answer}`;
  }
  correctAnswerHistory(answer, thisElement){
    thisElement.classList.add('displayBorderRed');
    if (this.questionsHistory[this.index-1].answer == answer) {
      thisElement.classList.add('displayBorderBlue');
      thisElement.classList.remove('displayBorderRed');
      }
      setTimeout(function (){
      for (var i = 0; i < optionsP.length; i++) {
        if (optionsP[i].innerHTML == quiz.questionsHistory[quiz.index-1].answer) {
          optionsP[i].classList.add('displayBorderBlue');
        }
      }
    },1000)
    myH1.innerHTML = `Tacan odgovor je ${this.questionsHistory[this.index-1].answer}`;
  }
  correctAnswerMathematics(answer, thisElement){
    thisElement.classList.add('displayBorderRed');
    if (this.questionsMathematics[this.index-1].answer == answer) {
      thisElement.classList.add('displayBorderBlue');
      thisElement.classList.remove('displayBorderRed');
      }
      setTimeout(function (){
      for (var i = 0; i < optionsP.length; i++) {
        if (optionsP[i].innerHTML == quiz.questionsMathematics[quiz.index-1].answer) {
          optionsP[i].classList.add('displayBorderBlue');
        }
      }
    },1000)
    myH1.innerHTML = `Tacan odgovor je ${this.questionsMathematics[this.index-1].answer}`;
  }
  correctAnswerTheGeneralEducation(answer, thisElement){
    thisElement.classList.add('displayBorderRed');
    if (this.questionsTheGeneralEducation[this.index-1].answer == answer) {
      thisElement.classList.add('displayBorderBlue');
      thisElement.classList.remove('displayBorderRed');
      }
      setTimeout(function (){
      for (var i = 0; i < optionsP.length; i++) {
        if (optionsP[i].innerHTML == quiz.questionsTheGeneralEducation[quiz.index-1].answer) {
          optionsP[i].classList.add('displayBorderBlue');
        }
      }
    },1000)
    myH1.innerHTML = `Tacan odgovor je ${this.questionsTheGeneralEducation[this.index-1].answer}`;
  }
  end(){
    if ('Geografija' == area) {
        return this.index === this.questionsGeography.length;
      }else if('Istorija' == area){
        return this.index === this.questionsHistory.length;
      }else if('Matematika' == area){
        return this.index === this.questionsMathematics.length;
      }else{
        return this.index === this.questionsTheGeneralEducation.length;
    }
  }
}

const quiz = new Quiz(questionsHistory, questionsGeography, questionsMathematics, questionsTheGeneralEducation);
