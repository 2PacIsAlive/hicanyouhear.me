var random = 0;
var song;
var color = 0;
var color2 = 0;
var color3 = 0;
var dir;

//function preload() {  
  //song = loadSound('assets/newb.mp3');
//}

function preload(){
    song = loadSound('assets/ontherooftopwithyogirl.mp3'); 
}

function setup(){
  reverb = new p5.Reverb();
  reverb.process(song, 6, 0.2);
  reverb.amp(0);
//createCanvas(windowWidth, windowHeight, WEBGL);
  canvas = createCanvas(windowWidth, windowHeight)
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
    window.open ('https://soundcloud.com/beatsbychophaus')
  } else {
    song.play();
  }
}

function draw(){
 background(0);
 textSize(32);
 var xpos = map(mouseX, 0, width, 0, 255);
 var ypos = map(mouseY, 0, height, 0, 255);
 if (song.isPlaying()) {
    color = xpos;
    color2 = ypos;
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
 //fill(random);
 fill(random,color,color2);
 stroke(0);
 ellipse(mouseX, mouseY, 10+vol*200, 10+vol*200);
 if (song.isPlaying){
    // Set the volume to a range between 0 and 1.0
    var volume = map(mouseX, width, 0, 1, 0);
    volume = constrain(volume, 0, 1);
    reverb.amp(volume)
    //song.amp(volume);

    // Set the rate to a range between 0.1 and 1
    // Changing the rate alters the pitch
    var speed = map(mouseY, 0.1, height, 0, 2);
    speed = constrain(speed, 0.01, 1);
    song.rate(speed);
  } 
}
