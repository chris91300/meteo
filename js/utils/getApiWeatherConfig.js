import fetchDataFrom from "./fetchDataFrom.js";

/**
 * Fetches the weather API configuration from the `apiWeather.conf.json` file.
 * @returns {Promise<object>} A promise that resolves with the API configuration object.
 */
export default async function getApiWeatheryConfig() {
    
    const cityConfig = await fetchDataFrom('/apiWeather.conf.json');
    return cityConfig;
}
