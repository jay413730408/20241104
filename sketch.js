let font;
let points = [];
let angle = 0;

function preload() {
  font = loadFont("fonts/NotoSansTC-Black.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noFill();
  angleMode(DEGREES);
  frameRate(10);
  points = font.textToPoints("jay", 0, 200, 200, {
    sampleFactor: 0.06
  });
}

function draw() {
  background(0);

  // Get the mouse position
  let mx = mouseX;
  let my = mouseY;

  // Calculate the text size based on mouse distance from center
  let textSize = map(dist(width/2, height/2, mx, my), 0, width/2, 10, 100);

  for (let x = 0; x < width; x =x+ 120) {
    for (let y = 0; y < height; y =y+120) {
      push();
      translate(x, y);
      stroke(255)
      rotate(angle);

      // ... (rest of the drawing code)
      for(let i=0;i<20;i=i+1){
        // let r=random(50,255)
         //let g=random(50,255)
         //let b=random(50,255)
         let r=map(sin(frameCount),-1,1,150,255)
         let g=map(sin(frameCount/2),-1,1,150,255)
         let b=map(sin(frameCount/4),-1,1,150,255)
         stroke(r,g,b)
         rotate(angle)
         noFill()
         rect(0,0,100-i*3,100-i*3,20)
         angle=sin(frameCount)*10
       }
      pop();
    }
  }

  // Draw the "jay" points, scaling with mouse distance
  for (let i = 0; i < points.length; i++) { let r=map(sin(frameCount),-1,1,150,255)
    fill(255);
    ellipse(mx + points[i].x - 800, my + points[i].y - 200, textSize);
  }

  angle += 0.5;
}
