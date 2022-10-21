elephant = "";
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
    objectDetected.detect(elephant, gotResult);
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

elephant = loadImage("web2.jpg");

}

function draw(){

image(elephant, 0,0,640,420);


}