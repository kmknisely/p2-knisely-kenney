var countries = [

//0
{ "name": "Algeria",
"abbreviation": "DZ",
"capital": "Algiers",
"population": "40,400,000",
"area": "2,381,741",
"lanugage": "arabic"
},

//1
{ "name": "Chad",
"abbreviation": "TD",
"capital": "N'Djamena",
"population": "14,497,000",
"area": "1,284,000",
"language": "French"
},

//2
{ "name": "Egypt",
"abbreviation": "EG",
"capital": "Cairo",
"population": "91,290,000",
"area": "1,002,450",
"lanugage": "arabic"
},

//3
{ "name": "Libya",
"abbreviation": "LY",
"capital": "Tripoli",
"population": "6,385,000",
"area": "1,759,540",
"lanugage": "arabic"
},

//4
{"name": "Mali",
"abbreviation": "ML",
"capital": "Bamako",
"population": "18,135,000",
"area": "1,240,192",
"language": "French"
},

//5
{"name": "Mauritania",
"abbreviation": "MR",
"capital": "Nouakchott",
"population": "3,718,678",
"area": "1,030,700",
"lanugage": "arabic"
},

//6
{"name": "Morocco",
"abbreviation": "MA",
"capital": "Rabat",
"population": "33,337,529",
"area": "446,550",
"lanugage": "arabic"
},

//7
{"name": "Niger",
"abbreviation": "NE",
"capital": "Niamey",
"population": "20,715,000",
"area": "1,267,000",
"language": "French"
},

//8
{"name": "Sudan",
"abbreviation": "SD",
"capital": "Khartoum",
"population": "39,598,700",
"area": "1,886,068",
"lanugage": "arabic"
},

//9
{"name": "Tunisia",
"abbreviation": "TN",
"capital": "Tunis",
"population": "11,154,400",
"area": "163,610",
"lanugage": "arabic"
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
}

document.getElementById("dropdown").addEventListener("change", myFunction);
