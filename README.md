NMD 105 Lab #11
Sketch Link: https://editor.p5js.org/averyhas/sketches/D43RdQylH
Create a psuedocode breakdown for a premade game.

During this lab period, I was only able to finish one of the pseudocode breakdowns out of the two games given to us. I completed the Space Invaders game breakdown.

For this assignment, I simply made sure to list every step that I believed to be done in the process of crafting this game. I began by listing all of the obvious components seen in the game, and how they would be incorporated into the code. 

```Javascript
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
```

I then began to add my basic functions and classes, including show and move methods within each Class. I also called these functions and classes within draw.

```Javascript
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
```

I also created a ```function keyPressed()``` function, which housed the instructions pertaining to both the arrow keys and the spacebar. In this function, I set the Rocketship to move according to the LEFT and RIGHT arrow keys, and the SPACEBAR according to the Bullet class.

I added various variables into and before setup, which were to be used when detecting collisions. I also created an array for bullet colors:

```Javascript
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
```

In addition to this, I also added the outlines to a distance formula, in order to detect whether the Enemy has surpassed the canvas, which would cause the player to lose a life, or if the bullet makes contact with the Enemy.

Lastly, I added the outlines for basic cosmetic compenents, such a the text for the heart health system/scoreboard, which was added in draw.
