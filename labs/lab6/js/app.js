function setup() {
    createCanvas(500,400)
}

function removeRed(removeColor) {
    removeColor.setRed(0) 
    return removeColor
}

function draw() {
    let noRed = removeRed(color(170, 200, 150))
    fill(noRed); 
    circle(150, 250, 90);
}


