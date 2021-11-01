const assets = "assets/";

const countries = {
	china: {
		ename: "china",
		arname: "الصين",
		continent: "اسيا",
		capital: "بكين",
		population: "1.402 مليار (2020)",
		area: "9,597,000 كم²",
		language: "الصينية",
		relegion: "متعدد",
		currency: "اليوان الصيني",
		anthem: `${assets}audio/china.mp3`,
	},
	egypt: {
		ename: "egypt",
		arname: "مصر",
		continent: "افريقيا",
		capital: "القاهرة",
		population: "102.3 مليون (2020)",
		area: "1,010,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الجنيه المصري",
		anthem: `${assets}audio/egypt.mp3`,
	},
	congo: {
		ename: "congo",
		arname: "الكونغو",
		continent: "افريقيا",
		capital: "برازفيل",
		population: "89.56 مليون (2020)",
		area: "2,345,000 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "فرنك كونغولي",
		anthem: `${assets}audio/congo.mp3`,
	},
	usa: {
		ename: "usa",
		arname: "الولايات المتحدة",
		continent: "امريكا الشمالية",
		capital: "واشنطن",
		population: "329.5 مليون (2020)",
		area: "9,834,000 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "الدولار الامريكي",
		anthem: `${assets}audio/usa.mp3`,
	},
	germany: {
		ename: "germany",
		arname: "المانيا",
		continent: "اوروبا",
		capital: "برلين",
		population: "83.24 مليون (2020)",
		area: "357,386 كم²",
		language: "الالمانية",
		relegion: "المسيحية",
		currency: "اليورو",
		anthem: `${assets}audio/germany.mp3`,
	},
	saudia: {
		ename: "saudia",
		arname: "السعودية",
		continent: "اسيا",
		capital: "الرياض",
		population: "34.81 مليون (2020)",
		area: "2,150,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الريال السعودي",
		anthem: `${assets}audio/saudia.mp3`,
	},
	palestine: {
		ename: "palestine",
		arname: "فلسطين",
		continent: "اسيا",
		capital: "القدس",
		population: "4.803 مليون (2020)",
		area: "27,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الشيكل ال'اسرائيلي'",
		anthem: `${assets}audio/palestine.mp3`,
	},
	japan: {
		ename: "japan",
		arname: "اليابان",
		continent: "اسيا",
		capital: "طوكيو",
		population: "125.8 مليون (2020)",
		area: "377,975 كم²",
		language: "اليابانية",
		relegion: "الشنتو",
		currency: "ين ياباني",
		anthem: `${assets}audio/japan.mp3`,
	},
	colombia: {
		ename: "colombia",
		arname: "كولومبيا",
		continent: "امريكا الجنوبية",
		capital: "بوغوتا",
		population: "50.88 مليون (2020)",
		area: "1,143,000 كم²",
		language: "الاسبانية",
		relegion: "المسيحية",
		currency: "بيزو كولومبي",
		anthem: `${assets}audio/colombia.mp3`,
	},
	england: {
		ename: "england",
		arname: "بريطانيا",
		continent: "اوروبا",
		capital: "لندن",
		population: "67.22 مليون (2020)",
		area: "242,495 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "الجنيه الاسترليني",
		anthem: `${assets}audio/england.mp3`,
	},
	france: {
		ename: "france",
		arname: "فرنسا",
		continent: "اوروبا",
		capital: "باريس",
		population: "67.39 مليون (2020)",
		area: "632,734 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "اليورو",
		anthem: `${assets}audio/france.mp3`,
	},
	algeria: {
		ename: "algeria",
		arname: "الجزائر",
		continent: "افريقيا",
		capital: "الجزائر العاصمة",
		population: "43.85 مليون (2020)",
		area: "2,382,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الدينار الجزائري",
		anthem: `${assets}audio/algeria.mp3`,
	},
	australia: {
		ename: "australia",
		arname: "استراليا",
		continent: "الاوقيانوسية",
		capital: "كانبرا",
		population: "25.69 مليون (2020)",
		area: "7,692,000 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "دولار أسترالي",
		anthem: `${assets}audio/australia.mp3`,
	},
	canada: {
		ename: "canada",
		arname: "كندا",
		continent: "امريكا الشمالية",
		capital: "اوتاوا",
		population: "38.01 مليون (2020)",
		area: "9,985,000 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "دولار كندي",
		anthem: `${assets}audio/canada.mp3`,
	},
	venzuela: {
		ename: "venzuela",
		arname: "فنزويلا",
		continent: "امريكا الجنوبية",
		capital: "كاراكاس",
		population: "28.44 مليون (2020)",
		area: "916,445 كم²",
		language: "ايش عرفني",
		relegion: "المسيحية",
		currency: "بوليفار فنزويلي",
		anthem: `${assets}audio/venezuela.mp3`,
	},
	tunisia: {
		ename: "tunisia",
		arname: "تونس",
		continent: "افريقيا",
		capital: "تونس",
		population: "10,102,000 (2020) مليون",
		area: "163,610 كم² ",
		language: "العربية",
		relegion: "الاسلام",
		currency: "دينار تونسي",
		anthem: `${assets}audio/tunisia.mp3`,
	},
	libya: {
		ename: "libya",
		arname: "ليبيا",
		continent: "أفريقيا",
		capital: "طرابلس",
		population: "6.871 مليون (2020)",
		area: "1,760,000 كم² ",
		language: "العربية",
		relegion: "الاسلام",
		currency: "دينار ليبي",
		anthem: `${assets}audio/libya.mp3`,
	},
	angola: {
		ename: "Angola",
		arname: "انغولا",
		continent: "أفريقيا",
		capital: "لواندا",
		population: "32.87 مليون (2020)",
		area: "1,247,000 كم² ",
		language: "البرتغالية",
		relegion: "المسيحية",
		currency: " كوانزا أنغولي",
		anthem: `${assets}audio/Angola.mp3`,
	},
	benin: {
		ename: "Benin",
		arname: "بنين",
		continent: "أفريقيا",
		capital: "بورتو نوفو",
		population: "12.12 مليون (2020)",
		area: "114,763 كم² ",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: " فرنك غرب أفريقي ",
		anthem: `${assets}audio/Angola.mp3`,
	},
	argantina: {
		ename: "argantina",
		arname: "الارجنتين",
		continent: "امريكا الجنوبية",
		capital: "capital",
		population: "population",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "currency",
		anthem: `${assets}audio/argantina.mp3`,
	},
	austria: {
		ename: "austria",
		arname: "النمسا",
		continent: "اوربا",
		capital: "فيينا",
		population: "8,608,000",
		area: "area",
		language: "الألمانية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/austria.mp3`,
	},
	belgium: {
		ename: "belgium",
		arname: "بلجيكا",
		continent: "اوربا",
		capital: "بروكسيل",
		population: "11,259,000",
		area: "area",
		language: "البلجيكية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/belgium.mp3`,
	},
	bulgaria: {
		ename: "bulgaria",
		arname: "بلغاريا",
		continent: "اوربا",
		capital: "صوفيا",
		population: "7,185,000",
		area: "area",
		language: "البلغارية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/bulgaria.mp3`,
	},
	croatia: {
		ename: "croatia",
		arname: "كرواتيا",
		continent: "اوربا",
		capital: "زغرب",
		population: "4,230,000",
		area: "area",
		language: "الكرواتية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/croatia.mp3`,
	},
	czech: {
		ename: "czech",
		arname: "تشيكوسلوفاكيا",
		continent: "اوربا",
		capital: "براغ",
		population: "10,535,000",
		area: "area",
		language: "التشيكية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/czech.mp3`,
	},
	denmark: {
		ename: "denmark",
		arname: "الدنمارك",
		continent: "اوربا",
		capital: "كوبنهاغن",
		population: "5,673,000",
		area: "area",
		language: "الدنماركية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/denmark.mp3`,
	},
	estonia: {
		ename: "estonia",
		arname: "استونيا",
		continent: "اوربا",
		capital: "تالين",
		population: "1,315,000",
		area: "area",
		language: " الإستونية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/estonia.mp3`,
	},
	finland: {
		ename: "finland",
		arname: "فنلندا",
		continent: "اوربا",
		capital: "هلسنكي",
		population: "5,475,000",
		area: "area",
		language: "الفنلندية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/finland.mp3`,
	},
	georgia: {
		ename: "georgia",
		arname: "جورجيا",
		continent: "اسيا",
		capital: "تبليسي",
		population: "3,707,000",
		area: "area",
		language: "الجورجية",
		relegion: "المسيحية",
		currency: "لاري جورجي",
		anthem: `${assets}audio/georgia.mp3`,
	},
	greece: {
		ename: "greece",
		arname: "اليونان",
		continent: "اوربا",
		capital: "أثينا",
		population: "10,769,000",
		area: "area",
		language: "اليونانية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/greece.mp3`,
	},
	hungary: {
		ename: "hungary",
		arname: "المجر - هنغاريا",
		continent: "اوربا",
		capital: "بودابست",
		population: "9,835,000",
		area: "area",
		language: "المجرية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/hungary.mp3`,
	},
	ireland: {
		ename: "ireland",
		arname: "ايرلندا",
		continent: "اوربا",
		capital: "دبلن",
		population: "4,630,000",
		area: "area",
		language: "الايرلندية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/ireland.mp3`,
	},
	italy: {
		ename: "italy",
		arname: "ايطاليا",
		continent: "اوربا",
		capital: "روما",
		population: "60,963,000",
		area: "area",
		language: "الايطالية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/italy.mp3`,
	},
	lithuania: {
		ename: "lithuania",
		arname: "ليتوانيا",
		continent: "اوربا",
		capital: "فيلنوس",
		population: "2,906,000",
		area: "area",
		language: "الليتوانية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/lithuania.mp3`,
	},
	luxembourg: {
		ename: "luxembourg",
		arname: "لوكسمبورج",
		continent: "اوربا",
		capital: "لوكسمبورج",
		population: "570,000",
		area: "area",
		language: "الالمانية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/luxembourg.mp3`,
	},
	monaco: {
		ename: "monaco",
		arname: "موناكو",
		continent: "اوربا",
		capital: "موناكو",
		population: "37,000",
		area: "area",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/monaco.mp3`,
	},
	netherlands: {
		ename: "netherlands",
		arname: "هولندا",
		continent: "اوربا",
		capital: "أمستردام",
		population: "16,933,000",
		area: "area",
		language: "الهولندية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/netherlands.mp3`,
	},
	norway: {
		ename: "norway",
		arname: "النرويج",
		continent: "اوربا",
		capital: "اوسلو",
		population: "5,194,000",
		area: "area",
		language: "النرويجية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/norway.mp3`,
	},
	poland: {
		ename: "poland",
		arname: "بولندا",
		continent: "اوربا",
		capital: "وارسو",
		population: "38,494,000",
		area: "area",
		language: "البولندية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/poland.mp3`,
	},
	portugal: {
		ename: "portugal",
		arname: "البرتغال",
		continent: "اوربا",
		capital: "لشبونة",
		population: "10,311,000",
		area: "area",
		language: "البرتغالية",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/portugal.mp3`,
	},
	romania: {
		ename: "romania",
		arname: "رومانيا",
		continent: "اوربا",
		capital: "بوخارست",
		population: "19,822,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/romania.mp3`,
	},
	russia: {
		ename: "russia",
		arname: "روسيا",
		continent: "اسيا",
		capital: "موسكو",
		population: "144,031,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "روبل روسي",
		anthem: `${assets}audio/russia.mp3`,
	},
	slovakia: {
		ename: "slovakia",
		arname: "سلوفاكيا",
		continent: "اوربا",
		capital: "براتيسلافا",
		population: "5,426,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/slovakia.mp3`,
	},
	slovenia: {
		ename: "slovenia",
		arname: "سلوفينيا",
		continent: "اوربا",
		capital: "لوبلانا",
		population: "2,065,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/slovenia.mp3`,
	},
	spain: {
		ename: "spain",
		arname: "أسبانيا",
		continent: "اوربا",
		capital: "مدريد",
		population: "46,335,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/spain.mp3`,
	},
	sweden: {
		ename: "sweden",
		arname: "السويد",
		continent: "اوربا",
		capital: "ستوكهولم",
		population: "9,794,000",
		area: "area",
		language: "language",
		relegion: "المسيحية",
		currency: "يورو",
		anthem: `${assets}audio/sweden.mp3`,
	},
	switzerland: {
		ename: "switzerland",
		arname: "سويسرا",
		continent: "اوربا",
		capital: "بيرن",
		population: "8,265,000",
		area: "area",
		language: "الالمانية",
		relegion: "المسيحية",
		currency: "فرنك سويسري",
		anthem: `${assets}audio/switzerland.mp3`,
	},
	turkey: {
		ename: "turkey",
		arname: "تركيا",
		continent: "اسيا",
		capital: "أنقرة",
		population: "78,214,000",
		area: "area",
		language: "language",
		relegion: "الاسلام",
		currency: "ليرة تركية",
		anthem: `${assets}audio/turkey.mp3`,
	},
};
