const mapIMG = document.getElementById("map-box");
const mapContainer = document.getElementById("map-container");
const flagContainer = document.getElementById("flag-box");
const infoContainer = document.getElementById("info");
const info = document.getElementById("info");
const countryList = document.getElementById("country-list");
const countryPickButton = document.getElementById("country-pick-button");
const continentPickButton = document.getElementById("continent-pick-button");


let currentContinent;
let firstTime = true;

function pickContinent(continent) {
	countryList.innerHTML = "";
	continentPickButton.innerHTML = conts[continent].arname
	countryPickButton.innerHTML = "اختر دولة";
	for (let i = 0; i < COUNTRIES[continent].length; i++) {
		country = COUNTRIES[continent][i];
		countryList.innerHTML += `<button onclick="pickCountry(${i})">${country["arname"]}</button>`;
	}
	currentContinent = continent;
	
	let pickedContinent = conts[continent];
	info.innerHTML = `
	<article class="info-article-continent">
	<p class="title-continent">عدد الدول</p>
	<p>${pickedContinent.countries}</p>
	</article>
	<article class="info-article-continent">
	<p class="title-continent">عدد السكان</p>
	<p>${pickedContinent.population}</p>
	</article>
	<article class="info-article-continent">
	<p class="title-continent">أكبر دولة</p>
	<p>${pickedContinent.bigCountry}</p>
	</article>
	<article class="info-article-continent">
	<p class="title-continent">اكبر عاصمة</p>
	<p>${pickedContinent.bigCapital}</p>
	</article>
	<article class="info-article-continent">
	<p class="title-continent">المساحة الكلية</p>
	<p>${pickedContinent.area}</p>
	</article>
	`

	mapIMG.src = `assets/maps/${continent}.jpg`;
	toggleModal("continent-picker");

}

function pickCountry(country) {
	toggleModal("country-picker");

	if (firstTime) {
		alert(
			"يبدأ تشغيل النشيد الرسمي بمجرد اختيار الدولة، يمكنك الضغط على العلم لايقاف النشيد"
		);
		firstTime = false;
	}
	country = COUNTRIES[currentContinent][country];
	countryPickButton.innerHTML = country.arname;
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
	document.getElementById(
		"title"
	).innerHTML = `الموسوعة الجغرافية - ${country["arname"]}`;
	flagContainer.src = `assets/flags/${country["ename"]}.svg`;
	mapIMG.src = `assets/maps/${country["ename"]}.jpg`;
	anthemPlayer(anthemPlayerRunning, country["anthem"]);
}

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

let zooming = false;
let old;
function zoom() {
	mapContainer.classList.toggle("zoom");
}

mapIMG.addEventListener("click", zoom);