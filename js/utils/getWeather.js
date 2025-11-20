import getCityAndInseeCode from "./getCityAndInseeCode.js"
//import apiConfig from '../../apiWeather.conf.json' assert { type: "json" };
import getApiWeatheryConfig from "./getApiWeatherConfig.js";
import getWeatherInformations from "./getWeatherInformations.js";
import getTextAndIcon from "./getTextAndIcon.js";
import fetchDataFrom from "./fetchDataFrom.js";


/**
 * Retrieves complete weather data for the configured city.
 * @returns {Promise<object>} A promise that is fulfilled with an object containing all the weather information.
 */
export default async function getWeather() {
    try{
        const { city, inseeCode } = await getCityAndInseeCode();
        const apiConfig = await getApiWeatheryConfig();
        const apiUrl = apiConfig.url;
        const apiToken = apiConfig.token;
        
        console.log("insee code : ",inseeCode);
        const url = apiUrl + 'token=' + apiToken + '&insee=' + inseeCode;

        const data = await fetchDataFrom(url);

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
        throw err
    }
}