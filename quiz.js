
class Quiz{
  constructor(questionsHistory, questionGeography, questionMathematics, questionTheGeneralEducation){
    this.questionsHistory = questionsHistory;
    this.questionsGeography = questionsGeography;
    this.questionsMathematics = questionsMathematics;
    this.questionsTheGeneralEducation = questionsTheGeneralEducation;
    this.index = 0;
    this.score = 0;
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
  userAnswer(answer){
    if(answer == this.getQuestion().answer){
    this.score += this.getQuestion().points;
    }
    this.index++;
  }
  end(){
    return this.index === this.questions.length;
  }
}

const quiz = new Quiz(questionsHistory, questionsGeography, questionsMathematics, questionsTheGeneralEducation);
