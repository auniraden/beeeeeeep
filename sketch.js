let width = window.innerWidth;
let height = window.innerHeight;
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
}

function draw() {
  background(255, 255, 255);
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
  rect(this.x, this.y, this.w, this.h);

  fill(this.accent);
  ellipse(this.x, this.y, this.w, this.h);

  fill(this.color);
  arc(this.x, this.y, this.w, this.h, TWO_PI, PI);
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
