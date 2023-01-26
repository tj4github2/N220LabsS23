let r = 5;

function setup() {
    createCanvas(800, 600)
}

// make it so circle can't grow over radius 50
function draw(){
    //draw circle at mouse location
    circle(mouseX, mouseY, r);
    if (mouseIsPressed){
        r++
    }

    if(r==50){
        mouseIsPressed = false
    }
    
    console.log(r)

}
