/* 
Opening & closing text
  - Game title
  - Game instructions
  - "Game Over!" text screen
Sprites
  - Rocketship sprite, which follows the bottom of the canvas.
  - Enemy sprites, which fall randomly down the canvas         
    periodically.
Bullets
  - Randomly colored "bullets" which go across the canvas when       the space bar is hit.
  - Collision detection.
Health system
  - Heart health system which appears in the upper left corner, a 
    heart is lost when an enemy sprite is missed.
*/

/* 
let rocketX, rocketY
let enemyX, enemyY
let enemySpeed 
*/

function setup() {
  createCanvas(400, 400);

  /* Variables:
enemyIsFalling (detects if Enemy is falling down canvas)
enemyMissed (detects if enemy was hit or missed by Bullet)
enemyX, enemyY
enemySpeed =
enemyIsHit (detects if enemy was hit or missed by Bullet)
rocketX = 200
rocketY = 400
*/

  // bulletColors = [list of bullet colors]
}

function draw() {
  background(220);

  /* draw text box with three hearts for the health system:
textSize()
text("❤️❤️❤️", x, y)
*/

// Call both the functions and classes.
  // drawRocket(rocketX, rocketY);
  // enemy1 = new Enemy(random(0, 300), -50, random(-5, 5), "slateblue");
  // bullet1 = new Bullet(rocketX, 375, 2, bulletColors)

  /* 
enemy.show()
enemy.move()

bullet.show()
bullet.move()
*/

  /* if-else statements which signify whether or not the enemy is falling, and whether or not the rocket has come into contact with the enemies.

if (enemyIsFalling){
}
if (enemyIsHit){
}
*/
/* Distance formula for when the Enemy surpasses the canvas, making it missed, or the bullet makes contact with the Enemy, making it hit.

let d = dist(rocketX, canvasHeight, enemyX, enemyY);
// if the enemy surpasses the height of the canvas (the ground), then enemyMissed
if (d >= canvasHeight){
  enemyMissed = true;
  One heart is removed.
}
*/
}

/* function drawRocket(rocketX, rocketY){
push()
translate(x, y)

two rectangles at varying sizes, which make up the rocket sprite

fill("gray")
rect(0, 0, 10, 10)
fill("red")
rect(-5, -5, 5, 5)

pop()
}

/* class Bullet(){
  constructor(bulletX, bulletY, bulletSpeed, bulletColors){
    this.x = bulletX
    this.y = bulletY
    this.speed = bulletSpeed
    this.color = bulletColors
  }
  move(){
  this.y = this.y + this.speed
  }
  show(){
  push()
  fill(this.color)
  rect(0, 0, 5, 5)
  pop()
  }
}
*/

/* class Enemy(){
  constructor(enemyX, enemyY, enemySpeed, color){
    this.x = enemyX
    this.y = enemyY
    this.speed = enemySpeed
    this.color = color
  }
  move(){
  this.y = this.y + this.speed
  }
  show(){
  fill(this.color)
  rect(0, 0, enemySize)
  }
}
*/

/* function keyPressed(){
if LEFT arrow is pressed, rocketX = rocketX - 10
if (LEFT_ARROW){
  rocketX = rocketX - 10
}
if RIGHT arrow is pressed, rocketX = rocketX + 10
if (RIGHT_ARROW){
  rocketX = rocketX + 10
}
if SPACEBAR is pressed, two bullets get released.
if (SPACEBAR){
  drawBullets = true (?)
}
}

/* Improvements:

Gameplay:
  - Decrease enemy speed - Sometimes enemies move faster than the player is able to react, causing an unfair lose.
  - Increase rocket speed - Make the rocket move faster across the canvas.
  - Decrease space between rocket's movement, so player can reach enemies within this gap.
  
Graphics:
  - Make the rocket more visible/attractive - Make a more elaborate design, and make it larger so that it is more accessible.
  - Make the enemies more attractive - Make a more elaborate design for the enemies when flying across the canvas.
  - Add background elements/a more elaborate backdrop (ie. Tiny jittering stars, a dark blue/black bg color, etc.)
*/
