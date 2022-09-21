var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var mars = document.getElementById("mars");
var earth = document.getElementById("earth");
var venus = document.getElementById("venus");
var mercury = document.getElementById("mercury");
var sun = document.getElementById("sun")
var around = Math.PI /2;
var speed = Math.random + 5;

// moves the planets//edge detection and reversal of objects.//Uncomment to try
//function moveSolar() {
  // two x-axis coordinates
  //var Xmin = 0;
  //var Xmax = 700;

  // two y-axis coordinates
  //var Ymin = 0;
  //var Ymax = 700;

  //if (reverse) {
    //positionX = positionX - velocity;
    //positionY = positionY - velocity;
    //mars.style.left = positionX - "px";
    //mars.style.top = positionY + "px";
    //earth.style.left = positionX + "px";
    //earth.style.top = positionY - "px";
    //venus.style.top = positionX + "px";
    //venus.style.left = positionY - "px";
    //mercury.style.left = positionX + "px";
    //mercury.style.top = positionY +"px";
  //} //else {
    //positionX = positionX + velocity;
    //positionY = positionY + velocity;
    //mars.style.left = positionX + "px";
    //mars.style.top = positionY - "px";
    //earth.style.left = positionX - "px";
    //earth.style.top = positionY + "px";
    //venus.style.top = positionY + "px";
    //venus.style.left = positionX + "px";
    //mercury.style.left = positionX - "px";
    //mercury.style.top = positionY + "px";
  //} 
  //Detecting Screen Edge on the x- and y-axes, make reverse "true" by adding "!reverse" 
  //if (
    //positionX > Xmax ||
    //positionX === Xmin ||
   //positionY > Ymax ||
    //positionY === Ymin
 //) {
    //reverse = !reverse;
  //}
  
//}
// the interval set at any ms
//setInterval(moveSolar, 1000);



// function moveMercury(){
//   var minX = 300;
//   var maxX = 430;
//   var minY = 300;
//   var maxY = 430;
//  }
//function moveVenus(venus){
  //if (venus = !reverse){
    //positionX = positionX * velocity;
    //positionY = positionY / velocity;
    //venus.style.top = positionX - "px";
    //venus.style.left = positionY + "px";
  
  //}
//}
//moveVenus();
//function moveMars(mars){
  //if (mars = !reverse){
    //positionX = positionX / velocity;
    //positionY = positionY * velocity;
    //mars.style.top = positionX - "px";
    //mars.style.left = positionY - "px";
  
  //}
//}
//moveMars();

// function timeout(){
//   if(moveSola
// }
// timeout();


//AROUND THE SUN. //Part 2//comment out to see part 1
const posEarthY = 400;
const posEarthX = 500;



function animate(time, X, Xmars, Earth) {
 
  if (X != null) {
  around += (time - X) * .0005;
  }
  mars.style.left = (Math.cos(around) * 400 )+ posEarthX + Math.random(around)*10 + "px";
  mars.style.top = (Math.sin(around) * 400) + posEarthY + Math.random(around)*10 + "px";
  earth.style.left = (Math.cos(around) * 300) + posEarthX + "px";
  earth.style.top = (Math.sin(around) * 300) + posEarthY + "px";
  venus.style.top = (Math.sin(around) * 210) + posEarthY+ "px";
  venus.style.left = (Math.cos(around) * 210) + posEarthX + "px";
  mercury.style.left = (Math.cos(around) * 150) + posEarthX+ "px";
  mercury.style.top = (Math.sin(around) * 150) + posEarthY + "px";
  sun.style.top = (Math.sin(around) * 2) + posEarthY + "px";
  sun.style.left = (Math.cos(around) * 2) + posEarthX+ "px";
  requestAnimationFrame(newTime => animate(newTime, time));
  }
requestAnimationFrame(animate);
