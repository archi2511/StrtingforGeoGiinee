var back;

function preload () {
 back = loadImage ("msp.jpg");
}

function setup(){
   createCanvas(600,700);
}

function draw(){
  background(back);
  textSize(80);    
  fill ("black")          
  text("Welcome to the",25,300); 
  text("Geo Giinee",100,400);
}