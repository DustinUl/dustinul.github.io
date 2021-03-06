//The Score of each Player in an ARRAY
Score = [0, 0];

//Backroundcolour VARIABLE
let r = 200;

//Screen VARIABLE to change between the diffrent screens
let screen = 0;

//rotation for the Winningscreen
let rotation = 1;

//Puck combined as an object
var puck = {
  x: width / 2,
  y: height / 2,
  xspeed: 0,
  yspeed: 0,
};

//Paddles combined as an object
var paddles = {
  x: 0,
  y: height / 2 - 60,
  x2: width - 15,
  y2: height / 2 - 60,
};

//Design  of the Startscreen
function Startscreen() {
  let y = 5;
  let x = 5;
  let r = 0;

  background(0);

  for (let i = 0; i < width; i = i + 25) {
    fill(r + 255, r + 255, r + 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);

    for (let i = 0; i < height; i = i + 25) {
      fill(r + 255, r + 255, r + 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }

  stroke(255, 255, 255);
  strokeWeight(4);
  textSize(90);
  textStyle(BOLD);
  fill(120);
  text("RETRO PONG", width / 2 - 310, 105);
  fill(50, 205, 50);
  text("RETRO PONG", width / 2 - 305, 100);
  fill(255, 0, 0);
  text("RETRO PONG", width / 2 - 300, 560);
  fill(120);
  text("RETRO PONG", width / 2 - 305, 555);

  fill(50, 205, 50);
  textSize(20);
  text("PLayer 1", width / 2 - 250, 200);
  fill(255, 0, 0);
  text("PLayer 2", width / 2 + 150, 200);

  fill(255, 0, 0);
  textStyle(ITALIC);
  rect(width / 2 - 108, 300, 200, 30);
  fill(0);
  text("Start", width / 2 - 30, 323);

  text("First one to get = 10 WINS!", width / 2 - 130, 280);

  fill(120);
  rect(width / 2 - 235, 250, 50, 50);
  rect(width / 2 - 235, 340, 50, 50);
  rect(500, 250, 50, 50);
  rect(500, 340, 50, 50);

  fill(50);
  textStyle(BOLD);
  textSize(40);
  strokeWeight(3);
  text("W", width / 2 - 230, 290);
  textSize(45);
  text("S", width / 2 - 225, 381);
  strokeWeight(2);
  triangle(525, 260, 510, 290, 540, 290);
  triangle(525, 380, 510, 350, 540, 350);
}

//Winscreen Player1
function WinscreenP1() {
  let y = 5;
  let x = 5;
  push();
  translate(x, y);
  rotate(rotation);
  background(0);

  //For-Loop for the small ellipses in the background for X
  for (let i = 0; i < width; i = i + 25) {
    fill(255, 255, 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);

    //For-Loop for the small ellipses in the background for Y
    for (let i = 0; i < height; i = i + 25) {
      fill(255, 255, 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }

  stroke(255, 255, 255);
  strokeWeight(4);
  fill(50, 205, 50);
  textSize(150);
  textStyle(BOLD);
  text("PLAYER1", width / 2 - 335, 300);
  text("WINS", width / 2 - 200, 450);
}

//Winscreen Player2
function WinscreenP2() {
  let y = 5;
  let x = 5;
  push();
  translate(x, y);
  rotate(rotation);
  background(0);

  //For-Loop for the small ellipses in the background for X
  for (let i = 0; i < width; i = i + 25) {
    fill(255, 255, 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);

    //For-Loop for the small ellipses in the background for Y
    for (let i = 0; i < height; i = i + 25) {
      fill(255, 255, 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }
  stroke(255, 255, 255);
  strokeWeight(4);
  fill(50, 205, 50);
  textSize(150);
  textStyle(BOLD);
  text("PLAYER2", width / 2 - 335, 300);
  text("WINS", width / 2 - 200, 450);
}

//mouseClicked for the Startbutton
function mouseClicked() {
  if (
    mouseIsPressed &&
    mouseX > 230 &&
    mouseX < 430 &&
    mouseY > 300 &&
    mouseY < 330
  ) {
    screen++;
  }
}

//Let the Puck reset if the Player don't hit with the paddle
function reset() {
  if (puck.x >= width - 20.9) {
    puck.xspeed = puck.xspeed * -1;
    puck.x = width / 2;
    puck.y = height / 2;
    Score[0]++;
    puck.xspeed = 0;
    puck.yspeed = 0;
    r = r - 10;
    paddles.y = height / 2 - 60;
    paddles.y2 = height / 2 - 60;
  }
  if (puck.x <= +20.9) {
    puck.xspeed = puck.xspeed * -1;
    puck.x = width / 2;
    puck.y = height / 2;
    Score[1]++;
    puck.xspeed = 0.000000001;
    puck.yspeed = 0;
    r = r - 10;
    paddles.y = height / 2 - 60;
    paddles.y2 = height / 2 - 60;
  }

  //Keyscape-Function -> If you press keyscape the ball will Speed Up again and the Player who get scored on got the ball-> puck.xspeed value= 0 ->Player 2 got the Ball
  if (keyIsDown(32) && puck.xspeed === 0) {
    puck.xspeed = puck.xspeed + 16;
    puck.yspeed = 0;
  }

  //Keyscape-Function -> If you press keyscape the ball will Speed Up again and the Player who get scored on got the ball-> puck.xspeed value= 0.000000001 ->Player 1 got the Ball
  if (keyIsDown(32) && puck.xspeed === 0.000000001) {
    puck.xspeed = puck.xspeed - 16;
    puck.yspeed = 0;
  }
}

//Function to give the puck his motion
function updatepuck() {
  puck.x = puck.x + puck.xspeed;
  puck.y = puck.y + puck.yspeed;
}

//Top and Bottom-Edges, so the ball bounce off
function edges() {
  if (puck.y <= 15 || puck.y >= height - 15) {
    puck.yspeed = puck.yspeed * -1;
  }
}

//Function for the Playball-> used an ellipse
function playball() {
  ellipse(puck.x, puck.y, 25);
}

//Function for the middleline
function middleline() {
  stroke(50, 205, 50);
  line(width / 2, 0, width / 2, height);
}

//Function for the left Paddle-> used an rectangle
function paddleleft() {
  rect(paddles.x, paddles.y, 15, 100);
}

//Function for the right Paddle-> used an rectangle
function paddleright() {
  rect(paddles.x2, paddles.y2, 15, 100);
}

//Function to let playball
function ballbounce() {
  if (
    (puck.x >= paddles.x2 - 30 &&
      puck.y + 15 >= paddles.y2 &&
      puck.y - 15 <= paddles.y2 + 100) ||
    (puck.x <= paddles.x + 40 &&
      puck.y + 15 >= paddles.y &&
      puck.y - 15 <= paddles.y + 100)
  ) {
    puck.xspeed = puck.xspeed * -1;
    puck.yspeed = random(-8, 8);
  }
}

//Where the magic`s happening
function draw() {
  //Design of the Playscreen
  background(0, r);
  middleline();
  fill(200);
  noStroke();
  textSize(20);
  stroke(50, 205, 50);
  strokeWeight(1.4);
  text("(PRESS KEYSCAPE TO CONTINUE THE GAME) ", width / 6, height - 20);
  noStroke();
  fill(50, 205, 50);
  textSize(70);
  textStyle(BOLD);
  text(Score[0], 140, 70);
  text(Score[1], width - 190, 70);

  //Functions
  updatepuck();
  edges();
  paddleleft();
  paddleright();
  playball();
  ballbounce();
  reset();

  //If-Functions to Flip between each screen
  //Screen=0-> Startscreen
  if (screen === 0) {
    Startscreen();
    mouseClicked();
  }

  //Screen=1-> Playscreen itself

  //Screen=2-> Winscreen for Player1
  if (screen === 2) {
    WinscreenP1();
    rotation = rotation - 0.04;
    if (rotation <= -2) {
      rotation = 1;
      screen = 0;
    }
  }

  //Screen=2-> Winscreen for Player2
  if (screen === 3) {
    WinscreenP2();
    rotation = rotation - 0.04;
    if (rotation <= -2) {
      rotation = 1;
      screen = 0;
    }
  }

  //If-Function to let the score reset if you reach 10
  if (Score[0] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
    screen = 2;
  }

  if (Score[1] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
    screen = 3;
  }

  //If-Function to move the paddles with your keys and the edges of each direction

  //Arrow up right side
  if (keyIsDown(38)) {
    paddles.y2 = paddles.y2 - 20;

    //Top-Edge Paddle right
    if (paddles.y2 <= -15) {
      paddles.y2 = paddles.y2 + 20;
    }
  }

  //Arrow down right side
  if (keyIsDown(40)) {
    paddles.y2 = paddles.y2 + 20;

    //Bottom-Edge Paddle right
    if (paddles.y2 >= height - 87) {
      paddles.y2 = paddles.y2 - 20;
    }
  }

  //Arrow up left side
  if (keyIsDown(87)) {
    paddles.y = paddles.y - 20;

    //Top-Edge Paddle left
    if (paddles.y < -15) {
      paddles.y = paddles.y + 20;
    }
  }

  //Arrow down left side
  if (keyIsDown(83)) {
    paddles.y = paddles.y + 20;
  }

  //Bottom-Edge Paddle left
  if (paddles.y >= height - 87) {
    paddles.y = paddles.y - 20;
  }
}
