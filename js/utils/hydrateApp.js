import getIconSRC from "./getIconSRC.js";


export default function hydrateApp(appElements, weather){
    const {
        city,
        iconWeather,
        temperature,
        details,
        humidity,
        wind,
        rainProbability
    } = appElements;
    
    city.textContent = weather.city;
    const iconSRC = getIconSRC(weather.icon);
    iconWeather.src = iconSRC;
    temperature.textContent = `${weather.temperature}°C`;
    details.textContent = weather.text;
    humidity.textContent = `${weather.humidity}%`;
    wind.textContent = `${weather.windSpeed} km/h`;
    rainProbability.textContent = `${weather.rainProbability}%`;
}