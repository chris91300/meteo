import getIconSRC from "./getIconSRC.js";


/**
 * Updates the application's DOM elements with the fetched weather data.
 * @param {Object.<string, HTMLElement>} appElements - An object containing references to the DOM elements to be updated.
 * @param {object} weather - An object containing the weather data to display.
 */
export default function hydrateApp(appElements, weather) {
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