function setup() {
   createCanvas(680, 480);
   noFill();
   stroke(255, 350, 26);
}

function draw() {
   background(150);
   ellipse(340, 220, mouseX, mouseY);
   // draw function
if (mouseX < 100) {
  ellipse(50, 200, 50, 50);
} else if (mouseX < 200){
  ellipse(150, 200, 70, 70);
} else if (mouseX < 300){
  ellipse(250, 200, 80, 80);
} else if (mouseX < 400){
  ellipse(350, 200, 90, 90);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 150, 150);
}

}