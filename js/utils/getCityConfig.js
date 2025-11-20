import fetchDataFrom from "./fetchDataFrom.js";



/**
 * Fetches the city configuration from the `config.json` file.
 * @returns {Promise<object>} A promise that resolves with the city configuration object.
 */
export default async function getCityConfig() {
    const cityConfig = await fetchDataFrom("/config.json");
    return cityConfig;
}