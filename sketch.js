
  function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220, 200, 0);
  translate(200, 200)
  
  function circleExpansion (xPos, yPos, xSize, ySize) {
    fill (0, 0, 0, 1);
    circle(xPos, yPos, 200, 200);
    rotate (random(1,80));
  }
  //rotate and size determine density/spacing
  
for ( i = 0; i < random (200, 300); i += 1) {
   circleExpansion (50, 50) }
  // i = number of repeats, higher range increases overall density
  //Xpos and Ypos determine size
  //

  }