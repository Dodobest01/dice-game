//Тоглогчийн ээлжийг хадгалах хувьсагч,нэгдүгээр тоглогчийг 0,хоёрдугаар тоглогчийг 1 гэе
var activePLayer = 1;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>

// window.document.querySelector("#score-0").textContent = dice;
// window.document.querySelector("#score-1").innerHTML = "<em> Yes </em>";
// programmr start ready
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Шоо :" + dice);
