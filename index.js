let timers = {};

function startClock(clockId) {
  if (!timers[clockId]) {
    let startTime = Date.now();
    timers[clockId] = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      updateClock(clockId, elapsedTime);
    }, 100);
  }
}

function stopClock(clockId) {
  clearInterval(timers[clockId]);
  document.getElementById(clockId).textContent = "00:00:00";
  timers[clockId] = null;
}

function pauseClock(clockId) {
  clearInterval(timers[clockId]);
  timers[clockId] = null;
}

function stopAllClocks() {
  Object.keys(timers).forEach((clockId) => {
    stopClock(clockId);
  });
}

function startAllClocks() {
  Object.keys(timers).forEach((clockId) => {
    startClock(clockId);
  });
}

function updateClock(clockId, elapsedTime) {
  let milliseconds = elapsedTime % 1000;
  elapsedTime = Math.floor(elapsedTime / 1000);
  let seconds = elapsedTime % 60;
  elapsedTime = Math.floor(elapsedTime / 60);
  let minutes = elapsedTime % 60;
  let hours = Math.floor(elapsedTime / 60);

  document.getElementById(clockId).textContent = `${pad(hours)}:${pad(
    minutes
  )}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(num, size = 2) {
  let s = String(num);
  while (s.length < size) s = "0" + s;
  return s;
}
function startClock(clockId) {
  if (timers[clockId]) {
    // Nếu đồng hồ đang chạy, dừng nó trước khi bắt đầu lại
    clearInterval(timers[clockId]);
    timers[clockId] = null;
  }

  let startTime = Date.now();
  timers[clockId] = setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    updateClock(clockId, elapsedTime);
  }, 100);
}
