import fetchDataFrom from './fetchDataFrom.js';
import getCityConfig from './getCityConfig.js';




/**
 * Fetches the city name from the configuration and uses the government's geo API to find its INSEE code.
 * @returns {Promise<{city: string, inseeCode: string}>} A promise that resolves with an object containing the city name and its INSEE code.
 */
export default async function getCityAndInseeCode() {
    try{
        const config = await getCityConfig();

        console.log(config);
        const city = config.city;
        
        const url = 'https://geo.api.gouv.fr/communes?nom=';
        const field = '&fields=code';
        const globalUrl = url + city + field;

        console.log("Retrieving the INSEE code for the city of ",city);
        const data = await fetchDataFrom(globalUrl);
        const inseeCode = data[0].code;
        console.log("Insee code retrieved : ",inseeCode);
        return {
            city,
            inseeCode
        };
    }catch(err){
        console.log(err)
        throw err
    }
    
}