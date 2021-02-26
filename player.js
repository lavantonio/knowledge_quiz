class Player {
  constructor(player, capitalPlayer, casePlayer, text, colorBtn) {
    this.player = player;
    this.capitalPlayer = capitalPlayer;
    this.casePlayer = casePlayer;
    this.text = text;
    this.colorBtn = colorBtn;
  }
  createPlayer() {
    let textPlayer = ``;
    textPlayer += `<div id="${this.player}" class="card" style="width: 18rem;">`
    textPlayer += `<img src="img/${this.player}.jpg" class="card-img-top" alt="${this.capitalPlayer}">`
    textPlayer += `<h5 class="card-title">${this.capitalPlayer}</h5>`
    textPlayer += `<p class="card-text">${this.text}</p>`
    textPlayer += `<button id="${this.player}Btn" class="btn btn-${this.colorBtn}">Izaberite ${this.casePlayer}</button>`
    textPlayer += `</div>`
    textPlayer += `</div>`
    return textPlayer
  }
  getPlayer() {
    let text = "#" + this.player + "Btn";
    return text
  }
}
const player = [
  new Player(`ivo`, `Ivo`, `Iva`, `Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.`, `primary`),
  new Player(`horhe`, `Horhe`, `Horhea`, `Posle 30 godina igranja nisam najpametniji ali sam najbolji.`, `warning`),
  new Player(`kristina`, `Kristina`, `Kristinu`, `Volim da igram kvizove znanja a najvise volim da pobedjujem.`, `success`),
  new Player(`lav`, `Lav`, `Lava`, `Veni, vidi vici ili pametan pametniji najpametniji.`, `secondary`),
  new Player(`vladanka`, `Vladanka`, `Vladanku`, `Mogu da oberem malinjak za 2 sata a i za 2 dana, jer sam u takvoj mogucnosti.`, `info`),
  new Player(`justina`, `Justina`, `Justinu`, `Kunem se u Nemacku. Mi Nemci smo najpametniji hahahaha.`, `danger`),
];
