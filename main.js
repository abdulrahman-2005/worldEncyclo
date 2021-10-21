let continentsSelect = document.getElementById("continent");
let countriesSelect = document.getElementById("country");
let capital = document.getElementById("capital");
let area = document.getElementById("area");
let population = document.getElementById("population");
let language = document.getElementById("language");
let relegion = document.getElementById("relegion");
let currency = document.getElementById("currency");
let map = document.getElementById("map-box");
let flag = document.getElementById("flag-box");
let nationalAnthemEl = document.getElementById("anthem");
let audioStatus = document.getElementById("status");
let title = document.getElementById("title");
let settings = document.getElementById("settings-menu")

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
		if (countries[i]["continent"] === "افريقيا" or countries[i]["continent"] === "أفريقيا") {
			continents["africa"].push(countries[i]);
		} else if (countries[i]["continent"] === "اسيا") {
			continents["asia"].push(countries[i]);
		} else if (countries[i]["continent"] === "امريكا الشمالية") {
			continents["northAmirca"].push(countries[i]);
		} else if (countries[i]["continent"] === "امريكا الجنوبية") {
			continents["southAmirca"].push(countries[i]);
		} else if (countries[i]["continent"] === "الاوقيانوسية") {
			continents["oceania"].push(countries[i]);
		} else if (countries[i]["continent"] === "اوروبا") {
			continents["europe"].push(countries[i]);
		}
	}
	// continents countries continentsSelect countriesSelect
}

append();

function check() {
	if (countries[countriesSelect.value]["capital"] === undefined) {
		countries[countriesSelect.value]["capital"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["area"] === undefined) {
		countries[countriesSelect.value]["area"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["population"] === undefined) {
		countries[countriesSelect.value]["population"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["language"] === undefined) {
		countries[countriesSelect.value]["language"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["relegion"] === undefined) {
		countries[countriesSelect.value]["relegion"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["currency"] === undefined) {
		countries[countriesSelect.value]["currency"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["capital"] === "") {
		countries[countriesSelect.value]["capital"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["importantPort"] === "") {
		countries[countriesSelect.value]["importantPort"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["population"] === "") {
		countries[countriesSelect.value]["population"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["language"] === "") {
		countries[countriesSelect.value]["language"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["relegion"] === "") {
		countries[countriesSelect.value]["relegion"] = "لا توجد معلومات";
	}
	if (countries[countriesSelect.value]["currency"] === "") {
		countries[countriesSelect.value]["currency"] = "لا توجد معلومات";
	}
}

function run() {
	countriesSelect.innerHTML = '<option value="choose">اختر دولة</option>';

	if (continentsSelect.value === "africa") {
		for (i in continents["africa"]) {
			countriesSelect.add(
				new Option(
					continents["africa"][i]["arname"],
					continents["africa"][i]["ename"]
				)
			);
		}
	} else if (continentsSelect.value === "asia") {
		for (i in continents["asia"]) {
			countriesSelect.add(
				new Option(
					continents["asia"][i]["arname"],
					continents["asia"][i]["ename"]
				)
			);
		}
	} else if (continentsSelect.value === "europe") {
		for (i in continents["europe"]) {
			countriesSelect.add(
				new Option(
					continents["europe"][i]["arname"],
					continents["europe"][i]["ename"]
				)
			);
		}
	} else if (continentsSelect.value === "northAmirca") {
		for (i in continents["northAmirca"]) {
			countriesSelect.add(
				new Option(
					continents["northAmirca"][i]["arname"],
					continents["northAmirca"][i]["ename"]
				)
			);
		}
	} else if (continentsSelect.value === "southAmirca") {
		for (i in continents["southAmirca"]) {
			countriesSelect.add(
				new Option(
					continents["southAmirca"][i]["arname"],
					continents["southAmirca"][i]["ename"]
				)
			);
		}
	} else if (continentsSelect.value === "oceania") {
		for (i in continents["oceania"]) {
			countriesSelect.add(
				new Option(
					continents["oceania"][i]["arname"],
					continents["oceania"][i]["ename"]
				)
			);
		}
	}
}

countriesSelect.addEventListener("change", set || pauseAnthem || set);
continentsSelect.addEventListener("change", setContinent || set);

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
	title.innerText = `${continentText} - الموسوعة الجغرافية`;
}

function set() {
	map.style.width = "80%";
	map.style.height = "48%";
	y = 1;

	mapPath = `${assets}maps/${countriesSelect.value}.jpg`;
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
	anthemPath = countries[countriesSelect.value]["anthem"];
	nationalAnthemEl.src = anthemPath;
	nationalAnthemEl.currentTime = 13;
	anthem = nationalAnthemEl;
	audioStatus.innerText = "";
	title.innerText = `${
		countries[countriesSelect.value]["arname"]
	} - الموسوعة الجغرافية`;
}

let x = 0;
function runPause() {
	if (x === 0) {
		playAnthem();
		audioStatus.innerText = "playing";
		x = 1;
	} else {
		pauseAnthem();
		audioStatus.innerText = "paused";
		x = 0;
	}
}

function playAnthem() {
	anthem.play();
}

function pauseAnthem() {
	anthem.pause();
}

map.onclick = function resize() {
	if (y === 1) {
		map.style.width = "98%";
		map.style.height = "100%";
		y = 0;
	} else {
		map.style.width = "80%";
		map.style.height = "48%";
		y = 1;
	}
};

audioStatus.onclick = function () {
	runPause();
};

let z = 0
function menuToggle(x) {
	x.classList.toggle("change");
	if (z === 1) {
		settings.className = ""
		settings.innerHTML = ""
		z = 0
	} else {
		settings.className = "pop"
		settings.innerHTML = `<h1 style="margin-top: 10%;">لم يتم اضافة الاعدادات</h1>
        <h1>...</h1>`
		z = 1
	}
}
