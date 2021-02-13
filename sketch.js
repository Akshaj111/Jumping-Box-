var canvas;
var music;
var s1;
var s2;
var s3;
var s4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
s1.createSprite(100,100,50,50);
s1.shapeColor = "cyan";
s2.createSprite(300,100,50,50);
s2.shapeColor = "green";
s3.createSprite(500,100,50,50);
s3.shapeColor = "red";
s4.createSprite(700,100,50,50);
s4.shapeColor = "brown";

    //create box sprite and give velocity
box.createSprite(400,300,20,20);
box.shapeColor = "orange";
box.velocityY = 6;
box.velocityX = 4; 

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
box.bounceOff(edges);
if(box.isTouching(s1)){
    playSound("music.mp3");
    box.shapeColor = "cyan";
    box.bounceOff(s1);
}
if(box.isTouching(s2)){
    playSound("music.mp3");
    box.shapeColor = "green";
    box.bounceOff(s2);
}
if(box.isTouching(s3)){
    playSound("music.mp3");
    box.shapeColor = "red";
    box.bounceOff(s3);
}
if(box.isTouching(s4)){
    playSound("music.mp3");
    box.shapeColor = "brown";
    box.bounceOff(s4);
}



    //add condition to check if box touching surface and make it box
}
