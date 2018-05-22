var speed = 1;
var y = 0;
var gateCoordsx = [];
var gatespeed = 1
var xPos = 500
function setup() {
  // put setup code here
  createCanvas(1200, 800);
}
function preload() {
  savage = loadImage("21savage.png");
  hood = loadImage("hood.jpg");
}

function draw() {
  // put drawing code here
image(hood, 0, 0, 1200, 800);
drawSavage();
drawGate();
moveGates();
}
function mousePressed() {
  speed = -5;
}
function endgame() {

}
function drawSavage() {
  image(savage, 300, y, 50, 50);
  y = y + speed;
  speed = speed + 0.2;
}
function drawGate() {
for (i=0; i>20 i++);
  var yeet = random([30], [700])
  fill (0, 255, 0);
  rect (xPos, 800, 50, -yeet)
  rect (xPos, 0, 50, 800 - yeet)
  // for (var i = 0; i < 3; i++)
  // var yeet = random([30],[300]);
  // rect(gateCoordsx[i], 250, 50, -yeet);
  //
  // rect(gateCoordsx[i], 250, 50, yeet);

}
function moveGates() {
  //for (var i = 0; i < 3; i++)
    xPos = xPos - gatespeed
}
function endgame(){
  background(255)
}
