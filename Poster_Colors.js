img = "";
status = "";
function preload() {
img = loadImage('Poster_Colors.png');
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Poster Colors", 55, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, result) {
if(error) {
console.log(error);
}
console.log(result);
}