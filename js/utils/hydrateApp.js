import getIconSRC from "./getIconSRC.js";


/**
 * Met à jour les éléments du DOM de l'application avec les données météorologiques récupérées.
 * @param {Object.<string, HTMLElement>} appElements - Un objet contenant les références aux éléments du DOM à mettre à jour.
 * @param {object} weather - Un objet contenant les données météorologiques à afficher.
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