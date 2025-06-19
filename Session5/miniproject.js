const API_KEY = "YOUR_API_KEY";
 
 document.getElementById("getWeatherBtn").addEventListener("click", async () => {
   const city = document.getElementById("cityInput").value;
   const output = document.getElementById("weatherOutput");
 
   output.textContent = "Loading...";
 
   try {
     const res = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     );
 
     if (!res.ok) throw new Error("City not found");
 
     const data = await res.json();
     const { name, main, weather } = data;
 
     output.innerHTML = `
       <h3>${name}</h3>
       <p>Temperature: ${main.temp}°C</p>
       <p>${weather[0].description}</p>
       <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon">
     `;
   } catch (err) {
     output.textContent = err.message;
   }
});