let vel;
let r;
let angulo;
let a = 150;
let e = 0.017;
let sol;
let x2;
let y2;
let angulo2;
function setup() {

  for(let i = 0; i < 50; i++) {
    ellipse(random(width), random(height),20 );
  }

  angleMode(DEGREES);
  angulo2 = 0;
  x2 = 0;
  y2 = 0;
  const g = 6.67 * pow(10, -11);
  let mSol = 1.98 * pow(10, 30);
  createCanvas(window.innerWidth, window.innerHeight);
  angulo = 0;
  r = a * ((1 - e) * (1 + e) * (cos(angulo))) +  100;
  vel = (sq(g * mSol * ((2 / r) - (1 / a)))) / pow(10, 35);
  sol = createVector(width/2, height/2);
  background(0);
}

function draw() {
  translate(width/4 , height/4);
  angulo += vel;

  let d = map(angulo, 0, 360, 0, 365);
  if( angulo >= 360) {
    angulo = 0;
  }

  let cor = 0;

  if (angulo > 0 && angulo < 180) {
  cor = map(angulo, 0, 180, 0, 255);
} else if (angulo >= 180) {
  cor = map(angulo, 180, 360, 255, 0);
}

  fill(0, cor, 175);
  textSize(65);
  text(d, -500, -200);


  fill(255, 140, 0);
  scale(0.5);
  noStroke();

  ellipse(sol.x, sol.y, 400);
  x = r * 5 * sin(angulo);
  y = r * 5 * cos(angulo);
  translate(width/2, height/2 + (1 - e) * (1 + e));

  fill(0, 50, 175);
  ellipse(x, y, 20);

  translate(x, y);

  angulo2 += 3.75;
  x2 = 250 * sin(angulo2);
  y2 = 250 * cos(angulo2);


  fill(255);
  ellipse(x2, y2, 5);

  print(r);
}
