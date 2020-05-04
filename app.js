//тоглоом дууссан эсэрийг хадгалах
var isNewGame;

//
var activePLayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
//togloom ehluulne
initGame();
function initGame() {
  //Тоглоом эхэллэнн гэдэг төлөвт орно
  isNewGame = true;
  //Тоглогчийн ээлжийг хадгалах хувьсагч,нэгдүгээр тоглогчийг 0,хоёрдугаар тоглогчийг 1 гэе
  activePLayer = 0;

  //Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  //Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //<div class="player-score" id="score-0">43</div>

  // programmr start ready
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // toglogchiin ner zub bolgo

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  //
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  //
  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

//
//Шоог шидэх event
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame !== false) {
    //1-6 dotorh neg toog avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    // buusan toond hargalzah shoog gargah
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan toon ni 1ees ylgaatai bol onoog nemne
    if (diceNumber !== 1) {
      // 1-ees ylgaatai too buuna
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePLayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  }
});

// hold tovchnii event
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // ug toglogchiin tsugluulsan onoog global onoon deer nemne
    // if (activePLayer === 0) {
    //   scores[0] = scores[0] + roundScore;
    // } else {
    //   scores[1] = scores[1] + roundScore;
    // }
    scores[activePLayer] = scores[activePLayer] + roundScore;
    //delgets deer onoog uurcgilnu
    document.getElementById("score-" + activePLayer).textContent =
      scores[activePLayer];
    //ug toglogch hojson ecehiig shalgash
    if (scores[activePLayer] >= 50) {
      //Togloom duusgah
      isNewGame = false;
      // Yalagchgesen text bichnee
      document.getElementById("name-" + activePLayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePLayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePLayer + "-panel")
        .classList.remove("active");
    } else {
      //elljiin onog 0 bolgono
      switchToNextPlayer();
    }
  }
});

function switchToNextPlayer() {
  //ene toglogchiin eeljindee tsugluulsan onoog  0 bolgono.
  document.getElementById("current-" + activePLayer).textContent = 0;
  // herev idevhtai toglogch in 0 baival idevhtai toglogchiig 1 boldo
  //ugui bol 0 bolgo
  roundScore = 0;
  activePLayer === 0 ? (activePLayer = 1) : (activePLayer = 0);
  //ulaan tseg shiljuulne
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // dhoog tur alga bolgoh
  diceDom.style.display = "none";
  //toglogchiin ellj solino
}

// new game

document.querySelector(".btn-new").addEventListener("click", initGame);
