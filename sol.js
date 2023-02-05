const sun = document.querySelector("#sun");
const sunRect = sun.getBoundingClientRect();
const sunCenterX = window.innerWidth / 2;
const sunCenterY = window.innerHeight / 2;
const planets = document.querySelectorAll(".planet");
const planetDistances = [150, 200, 250, 300, 330, 356, 400, 420]; // distances from the sun for each planet
const speeds = [1.8, 1.5, 1, 0.8, 0.6, 0.3, 0.25, 0.1]; // speeds of each planet's orbit, closest to sun should have highest speed
const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let angle = 0;

sun.style.left = `${sunCenterX - sunRect.width / 2}px`;
sun.style.top = `${sunCenterY - sunRect.height / 2}px`;


//color gen///
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
/////////
setInterval(function() {
  angle += 2;
  sun.style.transform = `rotate(${angle}deg)`;

  for (let i = 0; i < planets.length; i++) {
    let planetAngle = angle * speeds[i];
    let x = sunCenterX + planetDistances[i] * Math.cos(planetAngle * (Math.PI / 180)) - 20;
    let y = sunCenterY + planetDistances[i] * Math.sin(planetAngle * (Math.PI / 180)) - 20;
    planets[i].style.backgroundColor = getRandomColor();
    planets[i].style.transform = `translate(${x}px, ${y}px) rotate(${planetAngle}deg)`;
    planets[i].style.transformOrigin = "50% 50%";
    planets[i].textContent = planetNames[i];
  }
}, 60);

//comets///
const comets = document.querySelectorAll(".comet");
const cometSpeeds = [1, 2, 3, 4, 5, 6, 7, 8]; // speeds of each comet
const trailLength = 10; // number of trail elements
const trailOpacityStep = 10; // adjust this value to increase visibility
const maxOffset = 144; // maximum offset for each iteration

for (let i = 0; i < comets.length; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  comets[i].style.left = `${x}px`;
  comets[i].style.top = `${y}px`;

  for (let j = 0; j < trailLength; j++) {
    let cometTrail = document.createElement("div");
    cometTrail.classList.add("comet-trail");
    cometTrail.style.opacity = (trailLength - j) * trailOpacityStep;
    cometTrail.style.backgroundColor = getRandomColor();
    comets[i].appendChild(cometTrail);
  }
}

setInterval(function() {
  for (let i = 0; i < comets.length; i++) {
    let cometAngle = Math.random() * 360;
    let x = parseInt(comets[i].style.left) + (Math.random() * maxOffset * 2 - maxOffset);
    let y = parseInt(comets[i].style.top) + (Math.random() * maxOffset * 2 - maxOffset);
    
    if (x < 0) x = 0;
    if (x > window.innerWidth) x = window.innerWidth;
    if (y < 0) y = 0;
    if (y > window.innerHeight) y = window.innerHeight;
    
    comets[i].style.left = `${x}px`;
    comets[i].style.top = `${y}px`;

    let cometTrail = comets[i].querySelectorAll(".comet-trail");
    for (let j = 0; j < cometTrail.length; j++) {
      cometTrail[j].style.left = `${x}px`;
      cometTrail[j].style.top = `${y}px`;
      cometTrail[j].style.opacity = (trailLength - j) * trailOpacityStep;
    }

    comets[i].style.transform = `rotate(${cometAngle}deg)`;
    comets[i].style.transformOrigin = "50% 50%";
  }
}, 500);
//////////

//stars
const stars = document.querySelector("#star-container");
const starCount = 1000;
const starSize = "2px";
let starAngle = 0;
window.addEventListener("resize", generateStars);

generateStars();

function generateStars() {
  stars.innerHTML = "";
  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    //shade stars
    let shade = Math.floor(Math.random() * 256);
    star.style.backgroundColor = `rgb(${shade}, ${shade}, 0)`;
    star.style.width = star.style.height = starSize;
    star.style.position = "absolute";
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    stars.appendChild(star);
  }
}

function rotateStars() {
  starAngle += 0.000001; // adjust this value to increase the speed of rotation 
  const starElements = stars.querySelectorAll(".star");
  starElements.forEach(star => {
    let x = parseFloat(star.style.left) - (window.innerWidth / 2);
    let y = parseFloat(star.style.top) - (window.innerHeight / 2);
    star.style.left = `${(window.innerWidth / 2) + (x * Math.cos(starAngle) - y * Math.sin(starAngle))}px`;
    star.style.top = `${(window.innerHeight / 2) + (x * Math.sin(starAngle) + y * Math.cos(starAngle))}px`;
  });
  requestAnimationFrame(rotateStars);
}

rotateStars();
//////

//spaceship
const spaceship = document.createElement("div");
spaceship.classList.add("spaceship");
spaceship.style.backgroundColor = "white";
spaceship.style.width = "2px";
spaceship.style.height = "9px";
spaceship.style.borderRadius = "10px 10px 50% 50%";
spaceship.style.position = "absolute";
spaceship.style.left = `${window.innerWidth / 2}px`;
spaceship.style.top = `${window.innerHeight / 2 + 100}px`;
stars.appendChild(spaceship);

let spaceshipDirection = { x: 1, y: 1 };

setInterval(() => {
  let left = parseInt(spaceship.style.left);
  let top = parseInt(spaceship.style.top);
  
  if (left >= window.innerWidth || left <= 0) {
    spaceshipDirection.x *= -1;
  }
  if (top >= window.innerHeight || top <= 0) {
    spaceshipDirection.y *= -1;
  }
  
  spaceship.style.left = `${left + spaceshipDirection.x}px`;
  spaceship.style.top = `${top + spaceshipDirection.y}px`;
}, 10);

