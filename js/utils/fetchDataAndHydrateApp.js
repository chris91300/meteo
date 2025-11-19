import getWeather from "./getWeather.js";
import hydrateApp from "./hydrateApp.js";



/**
 * Récupère les données météorologiques et hydrate l'interface utilisateur de l'application avec ces données.
 * @param {Object.<string, HTMLElement>} appElements - Un objet contenant des références aux éléments du DOM de l'application.
 */
export default async function fetchDataAndhydrateApp(appElements) {
    const weather = await getWeather();
    console.log("weather data received")
    console.log(weather);
    hydrateApp(appElements, weather);
}