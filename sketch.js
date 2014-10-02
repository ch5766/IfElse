function setup() {
   createCanvas(680, 480);
   noFill();
   stroke(255, 350, 26);
}

function draw() {
   background(50);
   ellipse(340, 220, mouseX, mouseY);
}