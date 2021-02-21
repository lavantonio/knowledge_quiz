class PlayerGameLeft{
  constructor(player, capitalPlayer){
    this.player = player;
    this.capitalPlayer = capitalPlayer;
  }
  createPlayer(){
    for (var i = 0; i < this.player.length; i++) {
      if (this.player[i] == playerGame) {
        var gameCapitalPlayer = this.capitalPlayer[i];
        var gamePlayer = this.player[i];
      }
    }
    let textPlayer = ``;
    textPlayer +=`<h2>${gameCapitalPlayer}</h2>`
    textPlayer += `<img src="img/${gamePlayer}.jpg" class="card-img-top" alt="${this.capitalPlayer}">`
    textPlayer += `<div class="card-body">`
    textPlayer += `<p id="scorePlayer"class="lead">Ukupno poena : ${quiz.score}</p>`
    textPlayer += `<p id = "countRounds" class = "pt-1">Pitanje ${quiz.questionNumber}</p>`
    textPlayer += `<button id="playerBtn" class="btn btn-primary">Sledece pitanje</button>`
    textPlayer += `</div>`
    return textPlayer
  }
}
const playerGameLeft = new PlayerGameLeft ([`ivo`,`lav`, `horhe`,`justina`, `kristina`, `vladanka`], [`Ivo`,`Lav`, `Horhe`,`Justina`, `Kristina`, `Vladanka`]);
