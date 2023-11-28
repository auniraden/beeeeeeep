let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let gameOver;
let fart;
let breath;
let sweep;
let futureBell;
let bite;
let thanks;
let horn;
let notify;


function setup() {
  canvas = createCanvas (width, height);

  //load sounds
  gameOver = loadSound('game-over.wav');
  fart = loadSound('fart.wav');
  breath = loadSound('child-breath.wav');
  sweep = loadSound('sweep.wav');
  futureBell = loadSound('f-doorbell.wav');
  bite = loadSound('juicyBite.wav');
  thanks = loadSound('thank-you.wav');
  horn = loadSound('horn.wav');
  notify = loadSound('notification.wav');

  //create Buttons
  let b1 = new Button(width/3, height/3, 200, 80, color(226, 132, 19), color(244, 190, 124), gameOver);
  let b2 = new Button(width/2, height/3, 200, 80, color(0, 159, 183), color(153, 241, 255), breath);
  let b3 = new Button(2*width/3, height/3, 200, 80, color(145, 145, 233), color(204, 204, 245), sweep);

  let b4 = new Button(width/3, height/2, 200, 80, color(205, 92, 92), color(240, 128, 128), futureBell);
  let b5 = new Button(width/2, height/2, 200, 80, color(72, 209, 204), color(175, 238,238), fart);
  let b6 = new Button(2*width/3, height/2, 200, 80, color(255, 215, 0), color(255, 255, 0), bite);

  let b7 = new Button(width/3, 2*height/3, 200, 80, color(255, 163, 175), color(255, 214, 220), thanks);
  let b8 = new Button(width/2, 2*height/3, 200, 80, color(143, 45, 86), color(216, 131, 166), horn);
  let b9 = new Button(2*width/3, 2*height/3, 200, 80, color(236, 78, 32), color(234, 162, 133), notify);

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);

}

function mousePressed() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].clicked(mouseX, mouseY);
    buttons_middle[i].clicked(mouseX, mouseY);
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].y = height/3;
    buttons_middle[i].y = height/2;
    buttons_bottom[i].y = 2*height/3;
  }
}


function draw() {
  background(50, 23,48);
  noStroke();

  for(let i = 0; i < buttons_top.length; i++){
    buttons_top[i].show(); //using show() function from Button class
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button{
  constructor(x, y, w, h, color, accent, song){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
  }

  show() {
    noStroke();

    fill(this.color);
    rect((this.x - 100), this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, (this.y + 50), this.w, this.h, TWO_PI, PI);
 }

 clicked(px, py) {
  let d = dist(px, py, this.x, this.y);
  if (d < this.w / 2) { // if the distance is less than half of the width of the button
    this.y = this.y + 10; // add 10 units to the y position of the button
    this.song.play(); // play the sound
  }

}


}


/**NOTES
 * // Rectangle
rect(x, y, w, h);

// Ellipse
ellipse(x, y, w, h);

// Arc
arc(x, y, w, h, start, stop, [mode]);

 */
