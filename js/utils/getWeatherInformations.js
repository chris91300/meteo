


/**
 * Extracts relevant weather information from the raw API data.
 * @param {object} data - The raw data from the weather API.
 * @returns {object} An object containing key weather information (temperature, humidity, etc.).
 */
export default function getWeatherInformations(data) {
    try{
        if(!data || data.length === 0){
            throw new Error("No data provided to getWeatherInformations");
        }

        const informations = data.forecast;
        if(!informations || informations.length === 0){
            throw new Error("No data provided to getWeatherInformations");
        }

        const currentInformation = informations[0];
        
        const weatherInfo = {
            temperature: currentInformation.temp2m || "N/A",
            humidity: currentInformation.rh2m || "N/A",
            windSpeed: currentInformation.wind10m || "N/A",
            rainProbability: currentInformation.probarain || "N/A",
            weatherCode: currentInformation.weather || "N/A",
        };

        return weatherInfo;

    }catch(err){
        console.log(err)
        throw err
    }
}