


/**
 * Extrait les informations météorologiques pertinentes des données brutes de l'API.
 * @param {object} data - Les données brutes de l'API météo.
 * @returns {object} Un objet contenant les informations météorologiques clés (température, humidité, etc.).
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
    }
}