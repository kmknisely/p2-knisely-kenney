var slide = document.getElementById('country-image');

var countries = [

//0
{ "name": "Algeria",
"abbreviation": "DZ",
"capital": "Algiers",
"population": "40,400,000",
"area": "2,381,741",
"language": "Arabic",
"image":"imgs/algeria.jpg",
"blurb":"Algeria, a gateway between Africa and Europe, has been battered by violence over the past half-century."
},

//1
{ "name": "Chad",
"abbreviation": "TD",
"capital": "N'Djamena",
"population": "14,497,000",
"area": "1,284,000",
"language": "French",
"image":"imgs/chad.jpg",
"blurb":"A largely semi-desert country, Chad is rich in gold and uranium and stands to benefit from its recently-acquired status as an oil-exporting state."
},

//2
{ "name": "Egypt",
"abbreviation": "EG",
"capital": "Cairo",
"population": "91,290,000",
"area": "1,002,450",
"language": "Arabic",
"image":"imgs/egypt.jpg",
"blurb":"Long known for its ancient civilisation, Egypt is the largest Arab country and has played a central role in Middle Eastern politics in modern times."

},

//3
{ "name": "Libya",
"abbreviation": "LY",
"capital": "Tripoli",
"population": "6,385,000",
"area": "1,759,540",
"language": "Arabic",
"image":"imgs/libya.jpg",
"blurb":"Libya, a mostly desert and oil-rich country with an ancient history, has more recently been known for the 42-year rule of the mercurial Colonel Muammar Gaddafi - and the chaos that has followed his departure."
},

//4
{"name": "Mali",
"abbreviation": "ML",
"capital": "Bamako",
"population": "18,135,000",
"area": "1,240,192",
"language": "French",
"image":"imgs/mali.jpeg",
"blurb":"Once home to several pre-colonial empires, the landlocked, arid West African country of Mali is one of the largest on the continent. For centuries, its northern city of Timbuktu was a key regional trading post and centre of Islamic culture."
},

//5
{"name": "Mauritania",
"abbreviation": "MR",
"capital": "Nouakchott",
"population": "3,718,678",
"area": "1,030,700",
"language": "Arabic",
"image":"imgs/mauritania.jpg",
"blurb":"One of Africa's newest oil producers, the Islamic Republic of Mauritania bridges the Arab Maghreb and western sub-Saharan Africa."
},

//6
{"name": "Morocco",
"abbreviation": "MA",
"capital": "Rabat",
"population": "33,337,529",
"area": "446,550",
"language": "Arabic",
"image":"imgs/morocco.jpg",
"blurb":"The Kingdom of Morocco is the most westerly of the North African countries known as the Maghreb - the Arab West. It has Atlantic and Mediterranean coastlines, a rugged mountain interior and a history of independence not shared by its neighbours."
},

//7
{"name": "Niger",
"abbreviation": "NE",
"capital": "Niamey",
"population": "20,715,000",
"area": "1,267,000",
"language": "French",
"image":"imgs/niger.jpg",
"blurb":"A vast, arid state on the edge of the Sahara desert, Niger is rated by the UN as one of the world's least-developed nations."
},

//8
{"name": "Sudan",
"abbreviation": "SD",
"capital": "Khartoum",
"population": "39,598,700",
"area": "1,886,068",
"language": "Arabic",
"image":"imgs/sudan.jpg",
"blurb":"Sudan, once the largest and one of the most geographically diverse states in Africa, split into two countries in July 2011 after the people of the south voted for independence."
},

//9
{"name": "Tunisia",
"abbreviation": "TN",
"capital": "Tunis",
"population": "11,154,400",
"area": "163,610",
"language": "Arabic",
"image":"imgs/tunisia.jpg",
"blurb":"Home of the ancient city of Carthage, Tunisia was once an important player in the Mediterranean, thanks to its location in the centre of North Africa, close to vital shipping routes."
}

];

//Functions

function countryDisplay(){
  var x = document.getElementsByClassName("info");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 1;
}
};

function fadeOut() {
  slide.classList.remove('fade-in');
  slide.classList.add('fade-out');
};

function fadeIn (){
slide.classList.remove('fade-out');
slide.classList.add('fade-in');
};


function countryFunction() {
  var x = document.getElementById("dropdown");
  //Country Name
  document.getElementById('name').innerHTML = countries[Number(x.value)].name;
  //abbreviation
  document.getElementById('abbr').innerHTML = countries[Number(x.value)].abbreviation;
  //capital
  document.getElementById('cap').innerHTML = countries[Number(x.value)].capital;
  //population
  document.getElementById('pop').innerHTML = countries[Number(x.value)].population;
  //area
  document.getElementById('area').innerHTML = countries[Number(x.value)].area;
  //language
  document.getElementById('language').innerHTML = countries[Number(x.value)].language;
  document.getElementById('blurb').innerHTML = countries[Number(x.value)].blurb;
  //image
  document.getElementById('country-image').src = countries[Number(x.value)].image;

  countryDisplay();
}

function setDelay() {
  fadeOut();
  setTimeout(countryFunction, 800);
  setTimeout(fadeIn, 1000);

}

document.getElementById("dropdown").addEventListener("change", setDelay);
