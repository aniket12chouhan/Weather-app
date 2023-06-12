const form = document.querySelector("form")
const input = document.querySelector("input")
const div = document.querySelector(".weather-data")

const container = document.querySelector(".container")

console.log(container);

const getweather = async (e) =>{
  e.preventDefault();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=584f9f3138d746b2a62154806231106 &q=${input.value}&aqi=yes`)
    
    const data = await response.json();
    container.style.backgroundImage = `url("https://source.unsplash.com/random/?${data.current.condition.text}")`
 
    
     

    div.innerHTML = `  <span class="icon ">
    <div class="celsius">${data.current.temp_c}°C </div>
    
    <img src=${data.current.condition.icon} class="weather-icon" alt="">
    </span>
    
    <h1>${data.location.name}</h1> <span class="state">${data.location.region} <p> , ${data.location.country}</p></span>
    
    <div class="extra-icon">
    <span class="humidity-wind">
    <div class="humidity"><img src="./icons8-humidity-80.png" alt="">Humidity :- ${data.current.humidity}%</div>
    <div class="wind"><img src="./icons8-wind-96.png" alt="">Wind :-${data.current.wind_kph} </div>
    </span>
    <span class="uv-pressure">
    <div class="uv"><img src="./icons8-uv-index-64.png" alt="">UV :-${data.current.uv}</div>
    <div class="pressure"><img src="./icons8-pressure-96.png" alt=""> Pressure :-${data.current.pressure_mb}mb </div>
    </span>
    </div> `

    
    
    
    console.log(data.current.condition.icon);
    console.log(data.current.condition.text);
    
    form.reset()
  }
  
  
  
  // getweather()

form.addEventListener("submit" , getweather)