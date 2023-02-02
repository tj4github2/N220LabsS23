let wheel = {
    radiusOuter: 10,
    radiusInner: 5,
    color: "#00F00",
    draw: function(){
        fill(this.color);
        circle(200,200, this.radiusOuter);
        fill(0);
        circle(200,200, this.radiusInner);
    }
}
function draw() {
    wheel.draw()
}
let sandwich = {
    meatType: "robf",
    meatWeight: 12,
    breadType: "ciabatta",
    toasted: true,
    cheeseType: "American",
    gooeyQuotient: .6

}