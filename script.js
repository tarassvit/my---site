// Простий обертальний ефект для демонстрації
const canvas = document.getElementById("globe");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let angle = 0;
function drawGlobe() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "#4b8bbe";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    ctx.restore();
    angle += 0.01;
    requestAnimationFrame(drawGlobe);
}
drawGlobe();
