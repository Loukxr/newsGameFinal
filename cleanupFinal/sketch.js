var trash;
var boat;
var patrolboat;
var score = 0;
var img;
var img2;
var img3;
var island;
var shark;


function setup() {
  createCanvas(600, 600);
  patrolboat2 = loadImage("patrolBoat.png"); // loads in image of patrol boat (player controller)
  trash = new Group(); // creating the randomly generated trash to appear on the screen.
  for (var i = 0; i < 40; i++) { // we are using 40 pieces of trash
    var c = createSprite( // creates the sprite that will represent trash in the water
      random(20, width),// places the trash randomly
      random(20, height), //based on the height and width of the drawn canvas
      10, 10); // constrains the sprites to 10px by 10px
    c.shapeColor = color(0);// turns the sprite black
    trash.add(c);
  }
 
 
  patrolboat = createSprite(300,150); // initializing the player controller in the setup
  patrolboat.addImage(patrolboat2); // the image of the boat takes place of the sprite. 
  
  img = loadImage("fishy.png"); // loading in assorted .pngs that fill the display and give it color. 
  img2 = loadImage("fishy2.png");
  img3 = loadImage("starfish.png");
  island = loadImage("island.png");
  shark = loadImage("shark.png");
 
}



function draw() {
  
  background(0,128,255);
   
  patrolboat.velocity.x = 
    (mouseX-patrolboat.position.x)*0.1;
  patrolboat.velocity.y = 
    (mouseY-patrolboat.position.y)*0.1; //controller function that follows the x and y coordinates of the cursor on the canvas. 
  patrolboat.overlap(trash, getTrash);
  drawSprites(); // draw the sprites on the canvas
  fill(255,131,98);
  noStroke();
  textSize(18);
 
  if (trash.length > 0) { // if the amount trash is greater than zero, display the players score on the top right of the screen. 
    text(score, 575, 20);
  }
  else {
    text("You saved the fish! YOU WIN!", 300,350); // with no trash left to collect, the user completes the game and wins. 
  }
  image(island,210,5); //draws the images on the display based on their x & y coordinates
  image(img,200,300);
  image(img,400,300);
  image(img2,275,275);
  image(img2,30,400);
  image(img3,400,400);
  image(img3,375,150);
  image(shark,200,400);
 
  text("Collect all 40 pieces of hidden trash to save the fish!", 0, 20);
  textSize(128);
  text("CLEANUP", 0,600);
  fill(255);
  textSize(18);
  text("Score:",520,18);
  
}
function getTrash(patrolboat, trash) { // initializing the function, so that..
  trash.remove(); //when the patrol boat and the trash sprites overlap, the trash disappears
  score += 1; // each piece of trash removed from the display adds one unit to the overall score. 
}

