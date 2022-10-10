bedroom = "";
status = "";

function preload(){
    bedroom = loadImage("web1.jpg");
}

function setup(){
    canvas = createCanvas(800,500);
    canvas.center();
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

} 

function modelLoaded(){
    status=true;
    objectDetected.detect(bedroom, gotResult);

}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
