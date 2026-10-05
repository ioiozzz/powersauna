const clock = document.getElementById("clock");
const counter = document.getElementById("counter");

function pad(n) {
  return String(n).padStart(2, "0");
}

function tick() {
  const now = new Date();
  clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

tick();
setInterval(tick, 1000);

const visits = Number(localStorage.getItem("ps-visits") || "1284") + 1;
localStorage.setItem("ps-visits", String(visits));
counter.textContent = String(visits).padStart(6, "0");
