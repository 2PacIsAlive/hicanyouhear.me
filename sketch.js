var random = 0;
var song;

function preload() {  
  song = loadSound('assets/newb.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function mousePressed() {
  if ( song.isPlaying() ) { 
    song.stop();
  } else {
    song.play();
  }
}

function draw(){
 random = getRandom(0,250);
 background(random);
 ambientLight(100);
 pointLight(250, 250, 250, 100, 100, 0);
 specularMaterial(56);
 //sphere(200, 128);
 var vol = analyzer.getLevel();
 fill(127);
 stroke(0);
 sphere(10+vol*200, 10+vol*200);
 //sphere(width/2, height/2, 10+vol*200, 10+vol*200);
}
