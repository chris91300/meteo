import getCityAndInseeCode from "./getCityAndInseeCode.js"
//import apiConfig from '../../apiWeather.conf.json' assert { type: "json" };
import getApiWeatheryConfig from "./getApiWeatherConfig.js";
import getWeatherInformations from "./getWeatherInformations.js";
import getTextAndIcon from "./getTextAndIcon.js";



//https://api.meteo-concept.com/api/forecast/hours?token=MON_TOKEN&insee=35238



/**
 * Récupère les données météorologiques complètes pour la ville configurée.
 * @returns {Promise<object>} Une promesse qui se résout avec un objet contenant toutes les informations météorologiques.
 */
export default async function getWeather() {
    try{
        const { city, inseeCode } = await getCityAndInseeCode();
        const apiConfig = await getApiWeatheryConfig();
        const apiUrl = apiConfig.url;
        const apiToken = apiConfig.token;
        
        console.log("insee code : ",inseeCode);
        const url = apiUrl + 'token=' + apiToken + '&insee=' + inseeCode;

        const response = await fetch(url);
        const data =  await response.json();

        console.log(data)
        const weatherInformations = getWeatherInformations(data);

        const { text, icon } = await getTextAndIcon(weatherInformations.weatherCode);
        const weatherData = {
            ...weatherInformations,
            city,
            text,
            icon
        }
        return weatherData;
    }catch(err){
        console.log(err)
    }
}