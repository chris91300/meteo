
/**
 * Récupère la configuration de l'API météo depuis le fichier `apiWeather.conf.json`.
 * @returns {Promise<object>} Une promesse qui se résout avec l'objet de configuration de l'API.
 */
export default async function getApiWeatheryConfig() {
    const response = await fetch('/apiWeather.conf.json');
    const cityConfig = await response.json();
    return cityConfig;
}
