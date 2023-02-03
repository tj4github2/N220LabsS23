function setup() {
    createCanvas(500,400)
}

function draw() {
    res = polarPoint(10)
    translate(100,100);
    circle(res.x, res.y, 10)
}


function polarPoint(r) {
    x = r * Math.sin(mouseX);
    y = r * Math.cos(mouseX);
    return createVector(x,y); 
}