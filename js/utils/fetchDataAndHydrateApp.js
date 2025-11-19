import getWeather from "./getWeather.js";
import hydrateApp from "./hydrateApp.js";



export default async function fetchDataAndhydrateApp(appElements){
    const weather = await getWeather();
    console.log("weather data received")
    console.log(weather);
    hydrateApp(appElements, weather);
}