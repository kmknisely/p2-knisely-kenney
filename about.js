//About page slideshow

//variables

var i = 0;
var images = [];
var time = 3000;
var slide = document.getElementById('slide');
var slide2 = document.getElementById('slide2');


//Image List
images[0] = 'imgs/oryx.jpg';
images[1] = 'imgs/people.jpg';
images[2] = 'imgs/addax.jpg';
images[3] = 'imgs/ostrich.jpg';
images[4] = 'imgs/tuareg.jpg';


function fadeOut() {
  slide.classList.remove('fade-in');
  slide.classList.add('fade-out');
};

function fadeIn (){
slide.classList.remove('fade-out');
slide.classList.add('fade-in');
};

function changeImg (){
  slide.src=images[i];

  if(i < images.length - 1 ){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()",time);

};

function changeImg2 (){
  slide2.src=images[i];

  if(i < images.length - 1 ){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg2()",time);

};

window.onload= changeImg();
window.onload= changeImg2();
