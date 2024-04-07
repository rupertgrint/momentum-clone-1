function updateTime() {
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  document.getElementById('time').innerHTML = h + ':' + m;
}

export function tickTime() {
  updateTime();
  setInterval(updateTime, 1000);
}
