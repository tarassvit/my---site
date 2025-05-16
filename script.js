
const canvas = document.getElementById("globe-canvas");
const ctx = canvas.getContext("2d");
const tooltip = document.getElementById("tooltip");

let width, height;
function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Простий фоновий глобус-плейсхолдер
function drawGlobe() {
  ctx.clearRect(0, 0, width, height);
  const radius = Math.min(width, height) / 3;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#440088";
  ctx.fill();
  ctx.strokeStyle = "#8855ff";
  ctx.stroke();
}
drawGlobe();

canvas.addEventListener("mousemove", (e) => {
  tooltip.classList.remove("hidden");
  tooltip.style.top = e.clientY + 10 + "px";
  tooltip.style.left = e.clientX + 10 + "px";
});

canvas.addEventListener("mouseleave", () => {
  tooltip.classList.add("hidden");
});
