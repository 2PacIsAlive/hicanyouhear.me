var random = 0;
var song;
var color = 0;
var color2 = 0;
var color3 = 0;
var dir;

//function preload() {  
  //song = loadSound('assets/newb.mp3');
//}

function setup(){
  song = loadSound('assets/newb.mp3');  
//createCanvas(windowWidth, windowHeight, WEBGL);
  createCanvas(windowWidth, windowHeight)
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  //song.play();
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function mousePressed() {
  if ( song.isPlaying() ) { 
    song.pause();
  } else {
    song.play();
  }
}

function draw(){
 background(0);
 textSize(32);
 if (song.isPlaying()) {
    color = 255;
    color2 = 270;
    color3 = 80;
 } else {
   color = 255;
   color2 = 255;
   color3 = 255;
 }
 fill(color,color2,color3);
 text("chophaus.", windowWidth/2-55, windowHeight/2);
 //ambientLight(100);
 //pointLight(250, 250, 250, 100, 100, 0);
 //specularMaterial(56);
 //sphere(200, 128);
 if (song.isPlaying()) {
 var vol = analyzer.getLevel();
 } else {
 var vol = 0;
 }
 random = getRandom(0,250);
 fill(random);
 stroke(0);
 ellipse(mouseX, mouseY, 10+vol*200, 10+vol*200);
 //sphere(width/2, height/2, 10+vol*200, 10+vol*200);
}
