let mapContainer = document.getElementById("map-box");
let flagContainer = document.getElementById("flag-box");
const infoContainer = document.getElementById("info");

let info = document.getElementById("info");

const zoomContainer = document.getElementById("full");

let mapPath;
let flagpath;
let anthem;
let anthemPath;

let countryList = document.getElementById("country-list");

let currentContinent;

let firstTime = true;

function pickContinent(continent) {
	for (let i = 0; i < COUNTRIES[continent].length; i++) {
		country = COUNTRIES[continent][i];
		countryList.innerHTML += `<li><button onclick="pickCountry(${i})">${country["arname"]}</button></li>`;
	}
	currentContinent = continent;
}

function pickCountry(country) {
	if (firstTime) {
		alert(
			"يبدأ تشغيل النشيد الرسمي بمجرد اختيار الدولة، يمكنك الضغط على العلم لايقاف النشيد"
		);
		firstTime = false;
	}
	country = COUNTRIES[currentContinent][country];
	infoContainer.innerHTML = `
	<article class="info-article">
	<p class="title">العاصمة</p>
	<p>${country["capital"]}</p>
	</article>
	<article class="info-article">
	<p class="title">عدد السكان</p>
	<p> ${country["population"]}</p>
	</article>
	<article class="info-article">
	<p class="title">المساحة</p>
	<p>${country["area"]}</p>
	
	</article>
	<article class="info-article">
	<p class="title">اللغة</p>
	<p>${country["language"]}</p>
	
	</article>
	<article class="info-article">
	<p class="title">الديانة</p>
	<p>${country["relegion"]}</p>
	</article>
	<article class="info-article">
	<p class="title">العملة</p>
	<p>${country["currency"]}</p>
	</article>
	`;
	document.getElementsByTagName(
		"title"
	).innerHTML = `الموسوعة الجغرافية - ${country["arname"]}`;
	flagContainer.src = `assets/flags/${country["ename"]}.svg`;
	anthemPlayer(anthemPlayerRunning, country["anthem"]);
}

mapContainer.onclick = function resize() {
	zoomContainer.classList.toggle("zoomIt");
};

flagContainer.onclick = () => {
	runPauseAnthem();
};

let anthemPlayerRunning;
let anthemPlaying = false;
function anthemPlayer(oldPlayer = anthemPlayerRunning, anthemFilePath) {
	if (oldPlayer) {
		oldPlayer.pause();
		oldPlayer.currentTime = 0;
		oldPlayer.src = "";
		anthemPlaying = false;
	}
	player = document.getElementById("AnthemPlayer");
	player.src = anthemFilePath;
	player.play();
	anthemPlaying = true;

	anthemPlayerRunning = player;
}

function runPauseAnthem() {
	if (anthemPlaying) {
		anthemPlayerRunning.pause();
		anthemPlaying = false;
	} else {
		anthemPlayerRunning.play();
		anthemPlaying = true;
	}
}
