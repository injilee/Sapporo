navigator.geolocation.getCurrentPosition(async (position) => {
  const { latitude, longitude } = position.coords;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
  );

  const data = await response.json();

  document.querySelector('.temp').textContent =
    `${data.current.temperature_2m}°C`;
});