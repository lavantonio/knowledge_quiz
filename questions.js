class Question {
  constructor(text, option, answer, points, category) {
    this.text = text;
    this.option = option;
    this.answer = answer;
    this.points = points;
    this.category = category;
  }
}

const questionsGeography = [
  new Question("Dunav nastaje u Crnoj šumi, a koja reka izvire u Valdajskoj gori?", ['Volga', 'Don', 'Ural', 'Dnjepar'], 'Volga', 5, 'Geografija'),
  new Question('SAD čini 50 saveznih država. Od koliko saveznih država se sastoji Indija?', ['34', '29', '16', '8'], '29', 5, 'Geografija'),
  new Question('Najviši vrh kog kontineta je Denali?', ['Severne Amerike', 'Australije', 'Južne Amerike', 'Afrike'], 'Severne Amerike', 5, 'Geografija'),
  new Question('Koji norveški grad se smatra najsevernijim gradom na svetu?', ['Harstad', 'Bode', 'Vardo', 'Hamerfest'], 'Hamerfest', 5, 'Geografija'),
  new Question('U kojoj afričkoj državi se nalazi vodopad Tugela, drugi najviši vodopad na svetu posle Anđeoskog vodopada u Venecueli?', ['U Mozambiku', 'U Južnoafričkoj Republici', 'U Zambiji', 'U Čadu'], 'U Južnoafričkoj Republici', 5, 'Geografija')
];

const questionsHistory = [
  new Question("Prvi svetski rat je poceo?", ['1814', '1914', '1815', '1915'], '1914', 5, 'Istorija'),
  new Question('Kad je bio Kosovski boj?', ['1388', '1489', '1489', '1389'], '1389', 5, 'Istorija'),
  new Question('Za vreme drugog svetskog rata ko je bio premijer Italije?', ['Musolini', 'Hitler', 'Djovani', 'Cercil'], 'Musolini', 5, 'Istorija'),
  new Question('Kad je poceo prvi srpski ustanak?', ['1804', '1805', '1803', '1806'], '1804', 5, 'Istorija'),
  new Question('Kad je poceo drugi srpski ustanak?', ['1813', '1814', '1815', '1816'], '1815', 5, 'Istorija')
];

const questionsMathematics = [
  new Question(" Četiri čoveka igrala su šah 4 sata. Koliko je sati igrao svaki od učesnika?", ['4 sata', '2 sata', '1 sat', '6 sata'], '4 sata', 5, 'Matematika'),
  new Question('Svaki štap ima dva kraja. Koliko krajeva ima štap i po?', ['2 kraja', '3 kraja', '4 kraja', '1 kraj'], '4 kraja', 5, 'Matematika'),
  new Question('Svaka od tri sestre ima brata. Koliko u toj porodici ima dece?', ['3 dece', '2 dece', '4 dece', '5 dece'], '4 dece', 5, 'Matematika'),
  new Question('Kada je pešak prešao polovinu puta i još 2 km, ostalo muje da pređe još četvrtinu puta i 6 km. Koliko je dužina puta?', ['16 km', '18 km', '32 km', '34 km'], '32 km', 5, 'Matematika'),
  new Question('Jedan radnik može završiti posao za 4 sata, a drugi za 12 sati. Za koje vreme bi obavili taj posao radeći zajedno?', ['2 sata', '3 sata', '4 sata', 'pola sata'], 'za tri sata', 5, 'Matematika')
];

const questionsTheGeneralEducation = [
  new Question("Velika Černobiljska katastrofa u Ukrajini izazvana je:", ['zemljotresom', 'padom aviona', 'kvarom u nuklearnoj elektrani', 'sirenjem otrovnog gasa'], 'kvarom u nuklearnoj elektrani', 5, 'Opste obrazovanje'),
  new Question('Kako se zove aktuelni predsednik Turske?', ['Mustafa Kemal Ataturk', 'Melih Mahmutoglu', 'Redžep Tajip Erdogan', 'Redžep Melih Mahmutoglu'], 'Redžep Tajip Erdogan', 5, 'Opste obrazovanje'),
  new Question('Reakcija između jedne baze i jedne kiseline naziva se:', ['oksidacija', 'neutralizacija', 'resorbcija', 'redukcija'], 'neutralizacija', 5, 'Opste obrazovanje'),
  new Question('Kipar je podeljen na:', ['Grčki i Izraelski deo.', 'Turski i Kurdski deo', 'Grčki i Turski deo.', 'Turski i Ruski deo.'], 'Grčki i Turski deo.', 5, 'Opste obrazovanje'),
  new Question('Koliko ima Jevanđelja u Bibliji:', ['4', '10', '12', '8'], '4', 5, 'Opste obrazovanje')
];
