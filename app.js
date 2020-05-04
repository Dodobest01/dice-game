//Тоглогчийн ээлжийг хадгалах хувьсагч,нэгдүгээр тоглогчийг 0,хоёрдугаар тоглогчийг 1 гэе
var activePLayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>

// programmr start ready
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//
//Шоог шидэх event
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePLayer).textContent = roundScore;
  } else {
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
    diceDom.style.display = none;
    // if (activePLayer === 0) {
    //   activePLayer = 1;
    // } else {
    //   activePLayer = 0;
    // }
  }
});
