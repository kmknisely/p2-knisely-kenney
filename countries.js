var countries = [

//0
{ "name": "Algeria",
"abbreviation": "DZ",
"capital": "Algiers",
"population": "40,400,000",
"area": "2,381,741",
"language": "Arabic",
"image":"imgs/algeria.jpg"
},

//1
{ "name": "Chad",
"abbreviation": "TD",
"capital": "N'Djamena",
"population": "14,497,000",
"area": "1,284,000",
"language": "French",
"image":"imgs/chad.jpg"
},

//2
{ "name": "Egypt",
"abbreviation": "EG",
"capital": "Cairo",
"population": "91,290,000",
"area": "1,002,450",
"language": "Arabic",
"image":"imgs/egypt.jpg"
},

//3
{ "name": "Libya",
"abbreviation": "LY",
"capital": "Tripoli",
"population": "6,385,000",
"area": "1,759,540",
"language": "Arabic",
"image":"imgs/libya.jpg"
},

//4
{"name": "Mali",
"abbreviation": "ML",
"capital": "Bamako",
"population": "18,135,000",
"area": "1,240,192",
"language": "French",
"image":"imgs/mali.jpeg"
},

//5
{"name": "Mauritania",
"abbreviation": "MR",
"capital": "Nouakchott",
"population": "3,718,678",
"area": "1,030,700",
"language": "Arabic",
"image":"imgs/mauritania.jpg"
},

//6
{"name": "Morocco",
"abbreviation": "MA",
"capital": "Rabat",
"population": "33,337,529",
"area": "446,550",
"language": "Arabic",
"image":"imgs/morocco.jpg"
},

//7
{"name": "Niger",
"abbreviation": "NE",
"capital": "Niamey",
"population": "20,715,000",
"area": "1,267,000",
"language": "French",
"image":"imgs/niger.jpg"
},

//8
{"name": "Sudan",
"abbreviation": "SD",
"capital": "Khartoum",
"population": "39,598,700",
"area": "1,886,068",
"language": "Arabic",
"image":"imgs/sudan.jpg"
},

//9
{"name": "Tunisia",
"abbreviation": "TN",
"capital": "Tunis",
"population": "11,154,400",
"area": "163,610",
"language": "Arabic",
"image":"imgs/tunisia.jpg"
}

];


function myFunction() {
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
  //image
  document.getElementById('country-image').src = countries[Number(x.value)].image;
}

document.getElementById("dropdown").addEventListener("change", myFunction);
