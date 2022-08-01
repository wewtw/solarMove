var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var mars = document.getElementById("mars");
var earth = document.getElementById("earth");
var venus = document.getElementById("venus");
var mercury = document.getElementById("mercury");
var sun = document.getElementById("sun")


// moves the planets
function moveSolar() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 700;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 700;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    mars.style.left = positionX - "px";
    mars.style.top = positionY + "px";
    earth.style.left = positionX + "px";
    earth.style.top = positionY - "px";
    venus.style.top = positionX + "px";
    venus.style.left = positionY - "px";
    mercury.style.left = positionX + "px";
    mercury.style.top = positionY +"px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    mars.style.left = positionX + "px";
    mars.style.top = positionY - "px";
    earth.style.left = positionX - "px";
    earth.style.top = positionY + "px";
    venus.style.top = positionY + "px";
    venus.style.left = positionX + "px";
    mercury.style.left = positionX - "px";
    mercury.style.top = positionY + "px";
  } 
  //Detecting Screen Edge on the x- and y-axes, make reverse "true" by adding "!reverse" 
  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
  
}
// the interval set at any ms
setInterval(moveSolar, 1000);



// function moveMercury(){
//   var minX = 300;
//   var maxX = 430;
//   var minY = 300;
//   var maxY = 430;
//  }
function moveVenus(venus){
  if (venus = !reverse){
    positionX = positionX * velocity;
    positionY = positionY / velocity;
    venus.style.top = positionX - "px";
    venus.style.left = positionY + "px";
  
  }
}
moveVenus();
function moveMars(mars){
  if (mars = !reverse){
    positionX = positionX / velocity;
    positionY = positionY * velocity;
    mars.style.top = positionX - "px";
    mars.style.left = positionY - "px";
  
  }
}
moveMars();

// function timeout(){
//   if(moveSola
// }
// timeout();
