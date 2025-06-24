let valueSearch = document.getElementById('valueSearch');
let city= document.getElementById('city');
let temperature= document.getElementById('temp');
let cloud= document.getElementById('cloud');
let description= document.getElementById('desc');
let humidity= document.getElementById('humidity');
let windspeed= document.getElementById('windspeed');
let feelsLike = document.getElementById('feelsLike');
let pressure = document.getElementById('pressure');
let tempHigh  = document.getElementById('tempHigh');
let gust = document.getElementById('gust');

let main= document.querySelector('main');

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();
    }
})
let id='213fbb1e4f5630f00b1d4b5511470786';
let url= 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=213fbb1e4f5630f00b1d4b5511470786';
const searchWeather =() =>{
fetch(url +'&q=' + valueSearch.value)
 .then(response => response.json())
 .then(data => {
    console.log(data);
    if(data.cod==200){
        city.querySelector('figcaption').innerText= data.name;
        city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';


        temperature.querySelector('img').src ='https://openweathermap.com/img/wn/'+data.weather[0].icon+'@4x.png';
        temperature.querySelector('figcaption span').innerText =data.main.temp +' °C';
        
        feelsLike.querySelector('span').innerText='Feels like : '+ data.main.feels_like +' °C';
        
        desc.innerText=data.weather[0].description;
        cloud.innerText=data.clouds.all+'%';
        humidity.innerText= data.main.humidity+"%";
        windspeed.innerText=data.wind.speed+" km/hr";
        pressure.innerText= data.main.pressure+" hPa";
        tempHigh .innerText= data.main.temp_max +" °C";
        gust.innerText=data.wind.gust+" km/hr";

    }else{
        main.classList.add('error');
        setTimeout(()=> {
            main.classList.remove('error');
        },1000);

    }

    valueSearch.value='';
}) 
}
function initApp() {
    valueSearch.value = "chennai";
    searchWeather();

}
initApp();





