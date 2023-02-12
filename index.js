// Draw arc,Circle
let width = window.innerWidth;
let canvasCircle = document.getElementById("myCanvasCircle");
canvasCircle.width = window.innerWidth;
canvasCircle.height = window.innerHeight;
let x = Math.floor(Math.random() * 900);
let y = Math.floor(Math.random() * 900);
console.log(x);
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 50;

let circle = canvasCircle.getContext("2d");

function animate() {
  let cX = Math.floor(Math.random() * 256);
  let cY = Math.floor(Math.random() * 256);
  let cZ = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + cX + "," + cY + "," + cZ + ")";

  circle.beginPath();
  circle.arc(x + 1, y + 1, radius, 0, Math.PI * 2);
  circle.fillStyle = RGBColor;
  circle.fill();
  circle.strokeStyle = RGBColor;
  circle.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(animate);
}
animate();
