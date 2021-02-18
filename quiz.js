
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
  userAnswerGeography(answer){
    if(answer == this.getQuestionGeography().answer){
    this.score += this.getQuestionGeography().points;
    }
    this.index++;
  }
  userAnswerHistory(answer){
    if(answer == this.getQuestionHistory().answer){
    this.score += this.getQuestionHistory().points;
    }
    this.index++;
  }
  userAnswerMathematics(answer){
    if(answer == this.getQuestionMathematics().answer){
    this.score += this.getQuestionMathematics().points;
    }
    this.index++;
  }
  userAnswerTheGeneralEducation(answer){
    if(answer == this.getQuestionTheGeneralEducation().answer){
    this.score += this.getQuestionTheGeneralEducation().points;
    }
    this.index++;

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
