bedroom = "";
status = "";
object = [];

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetected = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetected.detect(bedroom, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function preload(){

bedroom = loadImage("web1.jpg");

}

function draw(){

image(bedroom, 0,0,640,420);

}