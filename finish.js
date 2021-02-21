class TheEndGame{
  constructor(ivo, lav, horhe, justina, vladanka, kristina, text){
    this.ivo = ivo;
    this.lav = lav;
    this.horhe = horhe;
    this.justina = justina;
    this.vladanka = vladanka;
    this.kristina = kristina;
    this.text = text;
  }
}

let theEndGame = new TheEndGame(`Ivo je osvojio ukupno ${quiz.score} poena`,
`Lav je osvojio ukupno ${quiz.score} poena`,
`Horhe je osvojio ukupno ${quiz.score} poena`,
`Justina je osvojila ukupno ${quiz.score} poena`,
`Vladanka je osvojila ukupno ${quiz.score} poena`,
`Kristina je osvojila ukupno ${quiz.score} poena`, `***** CESTITAMO *****`)
