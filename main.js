
let continentsSelect = document.getElementById("continent");
let countriesSelect = document.getElementById("country");
let capital = document.getElementById("capital");
let area = document.getElementById("area");
let population = document.getElementById("population");
let language = document.getElementById("language");
let relegion = document.getElementById("relegion");
let currency = document.getElementById("currency");
let wiki = document.getElementById("wiki");
let wikiLink = document.getElementById("wiki-link")
let map = document.getElementById("map-box");
let flag = document.getElementById("flag-box");
let nationalAnthemEl = document.getElementById("anthem");
let audioStatus = document.getElementById("status");
let title = document.getElementById("title");
let settings = document.getElementById("settings-menu");
let mapPath = "assets/maps/world.jpg";
let flagpath = "assets/flags/world.svg";
let anthem;

let y = 1; // to resize the map

let anthemPath;
let continents = {
	africa: [],
	europe: [],
	asia: [],
	northAmirca: [],
	southAmirca: [],
	oceania: [],
	antaractica: ["مفيش دول"],
};

function append() {
	for (i in countries) {
		if (
			countries[i]["continent"] === "افريقيا" ||
			countries[i]["continent"] === "أفريقيا"
		) {
			continents["africa"].push(countries[i]);
		} else if (countries[i]["continent"] === "اسيا") {
			continents["asia"].push(countries[i]);
		} else if (countries[i]["continent"] === "امريكا الشمالية") {
			continents["northAmirca"].push(countries[i]);
		} else if (countries[i]["continent"] === "امريكا الجنوبية") {
			continents["southAmirca"].push(countries[i]);
		} else if (countries[i]["continent"] === "الاوقيانوسية") {
			continents["oceania"].push(countries[i]);
		} else if (
			countries[i]["continent"] === "اوروبا" ||
			countries[i]["continent"] === "اوربا"
		) {
			continents["europe"].push(countries[i]);
		}
	}
	// continents countries continentsSelect countriesSelect
}

append();

function check() {
	selection = countries[countriesSelect.value];
	if (
		selection["capital"] === undefined ||
		selection["capital"] === ""
	) {
		selection["capital"] = "لا توجد معلومات";
	}if (
		selection["area"] === undefined ||
		selection["area"] === ""
	) {
		selection["area"] = "لا توجد معلومات";
	}if (
		selection["population"] === undefined ||
		selection["population"] === ""
	) {
		selection["population"] = "لا توجد معلومات";
	}if (
		selection["language"] === undefined ||
		selection["language"] === ""
	) {
		selection["language"] = "لا توجد معلومات";
	}if (
		selection["relegion"] === undefined ||
		selection["relegion"] === ""
	) {
		selection["relegion"] = "لا توجد معلومات";
	}if (
		selection["currency"] === undefined ||
		selection["currency"] === ""
	) {
		selection["currency"] = "لا توجد معلومات";
	}if (
		selection["wiki"] === undefined ||
		selection["wiki"] === ""
	) {
		selection["wiki"] = "لا توجد معلومات";
	}
}

function run() {
	countriesSelect.innerHTML = '<option value="choose">اختر دولة</option>';

	con = continentsSelect.value;
	for (i in continents[con]) {
		newOption = `<option value="${continents[con][i]["ename"]}">${continents[con][i]["arname"]}</option>`;
		countriesSelect.innerHTML += newOption;
	}
}

countriesSelect.addEventListener("change", pauseAnthem && set);
continentsSelect.addEventListener("change", setContinent);

let continentText;
function setContinent() {
	if (continentsSelect.value === "asia") {
		continentText = "اسيا";
	} else if (continentsSelect.value === "africa") {
		continentText = "افريقيا";
	} else if (continentsSelect.value === "northAmirca") {
		continentText = "امريكا الشمالية";
	} else if (continentsSelect.value === "southAmirca") {
		continentText = "امريكا الجنوبية";
	} else if (continentsSelect.value === "europe") {
		continentText = "اوربا";
	} else if (continentsSelect.value === "oceania") {
		continentText = "الاوقيانوسية";
	}
	wiki.className = "wiki"
	wiki.innerText = `${continentText} على ويكيبيديا`
	wikiLink.className = "a"
	wikiLink.href = `https://ar.wikipedia.org/wiki/قارة ${continentText}`
	map.src = `./assets/maps/${continentsSelect.value}.jpg`
	title.innerText = `${continentText} - الموسوعة الجغرافية`;
}

function set() {
	map.style.width = "80%";
	map.style.height = "48%";
	y = 1;

	mapPath =
		`${assets}maps/${countriesSelect.value}.jpg` ||
		`${assets}maps/${countriesSelect.value}.jpg`;
	flagPath = `${assets}flags/${countriesSelect.value}.svg`;
	flag.src = flagPath;
	map.src = mapPath;

	check();

	capital.innerText = `العاصمة : ${
		countries[countriesSelect.value]["capital"]
	}`;
	area.innerText = `المساحة الكلية : ${
		countries[countriesSelect.value]["area"]
	}`;
	population.innerText = `عدد السكان : ${
		countries[countriesSelect.value]["population"]
	}`;
	language.innerText = `اللغة الأم : ${
		countries[countriesSelect.value]["language"]
	}`;
	relegion.innerText = `الديانة \\ المعتقد : ${
		countries[countriesSelect.value]["relegion"]
	}`;
	currency.innerText = `العملة : ${
		countries[countriesSelect.value]["currency"]
	}`;
	wiki.className = "wiki"
	wiki.innerText = "المزيد على ويكيبيديا"
	wikiLink.className = "a"
	wikiLink.href = `https://ar.wikipedia.org/wiki/${countries[countriesSelect.value]["arname"]}`
	anthemPath = countries[countriesSelect.value]["anthem"];
	nationalAnthemEl.src = anthemPath;
	nationalAnthemEl.currentTime = 13;
	anthem = nationalAnthemEl;
	audioStatus.innerText = "";
	title.innerText = `${
		countries[countriesSelect.value]["arname"]
	} - الموسوعة الجغرافية`;
}

function playAnthem() {
	audioStatus.textContent = "playing";
	anthem.play();
}

function pauseAnthem() {
	audioStatus.textContent = "paused";
	anthem.pause();
}

let x = 0;
function runPause() {
	if (x === 0) {
		playAnthem();

		x = 1;
	} else {
		pauseAnthem();
		x = 0;
	}
}

flag.addEventListener("click", runPause);

map.onclick = function resize() {
	if (y === 1) {
		map.style.width = "98%";
		map.style.height = "100%";
		map.style.cursor = "zoom-out";
		y = 0;
	} else {
		map.style.width = "80%";
		map.style.height = "48%";
		map.style.cursor = "zoom-in";
		y = 1;
	}
};

audioStatus.onclick = function () {
	runPause();
};

let z = 0;
function menuToggle(x) {
	x.classList.toggle("change");
	if (z === 1) {
		settings.className = "";
		settings.innerHTML = "";
		z = 0;
	} else {
		settings.className = "pop";
		settings.innerHTML = `<h1 style="margin-top: 10%;">لم يتم اضافة الاعدادات</h1>
		<h1>...</h1>`;
		z = 1;
	}
}
