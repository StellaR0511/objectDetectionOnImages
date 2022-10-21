music = "";
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
    objectDetected.detect(music, gotResult);
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

music = loadImage("web5.jpg");

}

function draw(){

image(music, 0,0,640,420);


}