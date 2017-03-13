var a;
var b;
var newheight;
  //setup function executes once 
  function setup(){
    createCanvas(600,400);
    background(50);
   


//draw function loops forever
function draw(){
    //background(50);
    noStroke();
    fill(255,0,255);
    ellipse(mousex,mousey,100,newheight);
}
