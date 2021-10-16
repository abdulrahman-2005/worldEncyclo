let continentsSelect = document.getElementById("continent");
let countriesSelect = document.getElementById("country");
let capital = document.getElementById("capital");
let thePort = document.getElementById("the-port");
let population = document.getElementById("population");
let map = document.getElementById("map-box");
let flag = document.getElementById("flag-box");
let nationalAnthemEl = document.getElementById("anthem");
let audioStatus = document.getElementById("status");
let assets = "assets/";
let title = document.getElementById("title")

let mapPath = "assets/maps/world.jpg";
let flagpath = "assets/flags/world.svg";
let anthem;

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

let countries = {
	china: {
		ename: "china",
		arname: "الصين",
		continent: "اسيا",
		capital: "بكين",
		importantPort: "هونج كونج",
		population: "1.402 مليار (2020)",
		anthem: "assets/audio/china.mp3",
	},
	egypt: {
		ename: "egypt",
		arname: "مصر",
		continent: "افريقيا",
		capital: "القاهرة",
		importantPort: "الاسكندرية",
		population: "102.3 مليون (2020)",
		anthem: "assets/audio/egypt.mp3",
	},
	congo: {
		ename: "congo",
		arname: "الكونغو",
		continent: "اسيا",
		capital: "برازفيل",
		importantPort: "بوانت-نوار",
		population: "89.56 مليون (2020)",
		anthem: "assets/audio/congo.mp3",
	},
	usa: {
		ename: "usa",
		arname: "الولايات المتحدة",
		continent: "امريكا الشمالية",
		capital: "واشنطن",
		importantPort: "نيويورك",
		population: "329.5 مليون (2020)",
		anthem: "assets/audio/usa.mp3",
	},
	germany: {
		ename: "germany",
		arname: "المانيا",
		continent: "اوروبا",
		capital: "برلين",
		importantPort: "هامبورج",
		population: "83.24 مليون (2020)",
		anthem: "assets/audio/germany.mp3",
	},
	saudia: {
		ename: "saudia",
		arname: "السعودية",
		continent: "اسيا",
		capital: "الرياض",
		importantPort: "جدة",
		population: "34.81 مليون (2020)",
		anthem: "assets/audio/saudia.mp3",
	},
	palestine: {
		ename: "palestine",
		arname: "فلسطين",
		continent: "اسيا",
		capital: "القدس",
		importantPort: "غزة",
		population: "4.803 مليون (2020)",
		anthem: "assets/audio/palestine.mp3",
	},
	japan: {
		ename: "japan",
		arname: "اليابان",
		continent: "اسيا",
		capital: "طوكيو",
		importantPort: "نيكو",
		population: "125.8 مليون (2020)",
		anthem: "assets/audio/japan.mp3",
	},
	colombia: {
		ename: "colombia",
		arname: "كولومبيا",
		continent: "امريكا الجنوبية",
		capital: "بوغوتا",
		importantPort: "بارانكابيرميخا",
		population: "50.88 مليون (2020)",
		anthem: "assets/audio/colombia.mp3",
	},
	england: {
		ename: "england",
		arname: "بريطانيا",
		continent: "اوروبا",
		capital: "لندن",
		importantPort: "فاولي",
		population: "67.22 مليون (2020)",
		anthem: "assets/audio/england.mp3",
	},
	france: {
		ename: "france",
		arname: "فرنسا",
		continent: "اوروبا",
		capital: "باريس",
		importantPort: "دونكيرك",
		population: "67.39 مليون (2020)",
		anthem: "assets/audio/france.mp3",
	},
	algeria: {
		ename: "algeria",
		arname: "الجزائر",
		continent: "افريقيا",
		capital: "الجزائر العاصمة",
		importantPort: "بوسماعيل",
		population: "43.85 مليون (2020)",
		anthem: "assets/audio/algeria.mp3",
	},
	australia: {
		ename: "australia",
		arname: "استراليا",
		continent: "الاوقيانوسية",
		capital: "كانبرا",
		importantPort: "ابوت بوينت",
		population: "25.69 مليون (2020)",
		anthem: "assets/audio/australia.mp3",
	},
	canada: {
		ename: "canada",
		arname: "كندا",
		continent: "امريكا الشمالية",
		capital: "اوتاوا",
		importantPort: "هاليفاكس",
		population: "38.01 مليون (2020)",
		anthem: "assets/audio/canada.mp3",
	},
	venzuela: {
		ename: "venzuela",
		arname: "فنزويلا",
		continent: "امريكا الجنوبية",
		capital: "كاراكاس",
		importantPort: "بويرتو كابيلو",
		population: "28.44 مليون (2020)",
		anthem: "assets/audio/venezuela.mp3",
	},
};

function append() {
	for (i in countries) {
		if (countries[i]["continent"] === "افريقيا") {
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

countriesSelect.addEventListener(
	"change",
	myFunction || pauseAnthem
);


function myFunction() {
	mapPath = `${assets}maps/${countriesSelect.value}.jpg`;
	flagPath = `${assets}flags/${countriesSelect.value}.svg`;

	console.log(flagPath);
	flag.src = flagPath;
	map.src = mapPath;
	capital.innerText = `العاصمة : ${
		countries[countriesSelect.value]["capital"]
	}`;
	thePort.innerText = `اهم الموانئ : ${
		countries[countriesSelect.value]["importantPort"]
	}`;
	population.innerText = `عدد السكان : ${
		countries[countriesSelect.value]["population"]
	}`;
	anthemPath = countries[countriesSelect.value]["anthem"];
	nationalAnthemEl.src = anthemPath;
	nationalAnthemEl.currentTime = 13
	anthem = nationalAnthemEl;
	audioStatus.innerText = "";
	title.innerText = `${countries[countriesSelect.value]["arname"]} - الموسوعة الجغرافية`
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

let y = 1;
map.onclick = function resize() {
	if (y === 1) {
		map.style.width = "99%";
		map.style.height = "100%";
		y = 0;
	} else {
		map.style.width = "80%";
		map.style.height = "48%";
		y = 1;
	}
};
