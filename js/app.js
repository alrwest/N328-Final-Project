//Javascript file for Final Project
//libraries used - D3 & p5

//linking D3 & p5 libraries
//<script src="https://d3js.org/d3.v3.min.js"></script>
//<script src = "https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>

//drawing logo

//setting canvas size
function setup() {
    canvas = createCanvas(200, 200);
    canvas.position(175,40);
}

function draw() {

    //orange quad
    quad(38, 31, 86, 20, 69, 63, 30, 76);
    fill(245, 210, 157,50);
    stroke(237, 238, 240);

    //green quad
    quad(20, 50, 45, 40, 140, 45, 60, 90);
    fill(183, 214, 176,30);
    stroke(237, 238, 240);

    //blue quad
    quad(80, 85, 95, 55, 160, 50, 120, 105);
    fill(204,234,245,25);
    stroke(237, 238, 240);
}