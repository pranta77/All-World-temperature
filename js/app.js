const API_KEY =`f14fa3a1311ea90f73543159c8fb8c75`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(Response => Response.json())
    .then(data =>displayTemperature(data));
}

const setInnerText = (id , text) =>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city' , temperature.name);
    setInnerText('temp' , temperature.main.temp);
    setInnerText('condition' , temperature.weather[0].main);
    // console.log(temperature);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const ImgIcon = document.getElementById('weather-icon');
    ImgIcon.setAttribute('src' , url)
}