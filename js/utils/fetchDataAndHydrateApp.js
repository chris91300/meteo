import getWeather from "./getWeather.js";
import hydrateApp from "./hydrateApp.js";



/**
 * Fetches weather data and hydrates the application's user interface with this data.
 * @param {Object.<string, HTMLElement>} appElements - An object containing references to the application's DOM elements.
 */
export default async function fetchDataAndhydrateApp(appElements) {
    const weather = await getWeather();
    console.log("weather data received")
    console.log(weather);
    hydrateApp(appElements, weather);
}