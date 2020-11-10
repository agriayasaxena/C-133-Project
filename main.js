function preload() {
img = loadImage('dog_cat.jpg');
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Dog", 45, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}
function btn_keys() {
window.open('Keys.html', '_self');
}
function btn_laptop() {
window.open('Laptop.html', '_self');
}
function btn_marker() {
window.open('Marker.html', '_self');
}
function btn_mouse() {
window.open('Mouse.html', '_self');
}
function btn_poster_colors() {
window.open('Poster_Color.html', '_self');
}