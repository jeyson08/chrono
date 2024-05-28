const start = document.querySelector("button:first-of-type");
const stopp = document.querySelector("button:nth-of-type(2)");
const restart = document.querySelector("button:nth-of-type(3)");
const chrono = document.querySelector("div.chrono");
let interval;
let minutes = 0,
  secondes = 0,
  ms = 0;

const timer = () => {
  const mili = ms < 10 ? "0" + ms : ms;
  const sec = secondes < 10 ? "0" + secondes : secondes;
  const min = minutes < 10 ? "0" + minutes : minutes;
  //   secondes++;
  ms++;
  chrono.textContent = `${min}:${sec}:${mili}`;

  if (ms > 99) {
    secondes++;
    ms = 0;
  }

  if (secondes > 59) {
    minutes++;
    secondes = 0;
  }
};

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
});

stopp.addEventListener("click", () => {
  clearInterval(interval);
});

restart.addEventListener("click", () => {
  minutes = 0;
  secondes = 0;
  ms = 0;
  timer();
});
