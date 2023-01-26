//setup is executed once at the launch

// create a global variable for the x position of the circle
var xPos;

function setup() {
  createCanvas(500, 200);
  fill(255);
  // start the variable off at zero
  xPos = 0; 
 
}

//draw is executed every frame 60 times per second
function draw() {

	background(244,132,140); 

	xPos += 4;

	// wrap it with a conditional! 
	if(xPos >= width){
		// if it is greater than the width of the canvas reset it to 0
		xPos = 0; 
	}

	// draw the circle at the given position
	ellipse(xPos, height/2, 20, 20); 
}