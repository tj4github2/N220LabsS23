function setup() {
    createCanvas(800, 600);
    background(127, 24, 213);
}

function draw() {
    fill(213, 24, 24);
    circle(150, 250, 90);
    fill(213, 24, 24);
    circle(410, 250, 90);
    fill(24, 67, 213);
    rect(80, 170, 400, 70);

    stroke(200, 20, 20);
    fill(200, 220, 20, 90);
    circle(mouseX, mouseY, 40, 50);
}

function mouseIsPressed() {
    background(220, 200, 200)
}