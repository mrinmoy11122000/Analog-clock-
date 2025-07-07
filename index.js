setInterval(() => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes/2;

  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  
}, 1000);

