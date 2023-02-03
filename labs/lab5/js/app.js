function setup() {
    createCanvas(700,500)
}

function draw() {
    drawRocket(0, 0)
}

function drawRocket(x, y) {
    rect(x + 33, y + 100, 50, 100)
    triangle(x + 30, y + 100, x + 58, y + 20 , x + 86, y + 100)
    triangle(x + 33, y + 250, x + 60, y + 200, x + 85, y + 250)
}

