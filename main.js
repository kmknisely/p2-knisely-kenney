//Homepage slideshow

//variables
var i = 0;
var images = [];
var forwardButton = document.getElementById('forward');
var backwardButton = document.getElementById('backward');
var slide = document.getElementById('container');

//Image List
images[0] = 'imgs/image1.jpg';
images[1] = 'imgs/image2.jpg';
images[2] = 'imgs/image3.jpg';
images[3] = 'imgs/image4.jpg';
images[4] = 'imgs/image5.jpg';


//Set the slide forward one image, reset if reached the end of the array
function forward (){
  if(i < images.length - 1 ){
    i++;
  } else {
    i = 0;
  }
};

//Set the slide backward one image, reset if reached a negative value for i
function backward (){
  if(i > 0){
    i--;
  } else
    i = 4;
};

//Tell the page which image to show when it is first loaded
function setImage() {
  i = 0;
  document.slide.src=images[i];
};

//Fade Out the image container
function fadeOut() {
  slide.classList.remove('fade-in');
  slide.classList.add('fade-out');
};

//Fade In the image container
function fadeIn (){
slide.classList.remove('fade-out');
slide.classList.add('fade-in');
};

window.onload = setImage();

forwardButton.addEventListener('click', function(){
  fadeOut();
  forward();
  setTimeout(fadeIn, 2000);

  document.slide.src=images[i];

  console.log(i);
}
);

backwardButton.addEventListener('click', function(){
  fadeOut();
  backward();
  setTimeout(fadeIn, 2000);
  document.slide.src=images[i];

  console.log(i);

}
);
