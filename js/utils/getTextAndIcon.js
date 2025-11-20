import fetchDataFrom from './fetchDataFrom.js';


/**
 * Fetches the descriptive text and icon name corresponding to a weather code.
 * @param {number|string} weatherCode - The weather code provided by the API.
 * @returns {Promise<{text: string, icon: string}>} A promise that resolves with an object containing the text and icon name.
 */
export default async function getTextAndIcon(weatherCode) {
    try{
        const map = await fetchDataFrom('/weatherCode.config.json');        
        return map[weatherCode];
    }catch(err){
        console.log(err)
        throw err
    }

}