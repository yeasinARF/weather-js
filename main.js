const API_Key=`a2c1e868037e677c2fcb5189e8430d17`;

const searchByCity=(city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))


}
const displayTemperature=(weather)=>{
    
    const getTempId=document.getElementById('temper-ature');
    getTempId.innerText=Math.round(weather.main.temp);
    const getWeatherDescription=document.getElementById('weatheDescription');
    getWeatherDescription.innerText=weather.weather[0].description;
    const getWeatherDescriptionIcon=document.getElementById('weather-description-icon');
    getWeatherDescriptionIcon.src=` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const getWindId=document.getElementById('windValue');
    getWindId.innerText=weather.wind.speed + (' m/s');
    const getHumodityValueId=document.getElementById('humidityValue');
    getHumodityValueId.innerText=weather.main.humidity + (' %');



}

document.getElementById('search-addon').addEventListener('click',function(){
    const inputField=document.getElementById('input-text');
    const cityName=inputField.value;
    const getCityId=document.getElementById('city-name');
    getCityId.innerText=cityName;
    searchByCity(cityName);
    inputField.value='';

})