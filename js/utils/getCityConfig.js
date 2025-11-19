


/**
 * Récupère la configuration de la ville depuis le fichier `config.json`.
 * @returns {Promise<object>} Une promesse qui se résout avec l'objet de configuration de la ville.
 */
export default async function getCityConfig() {
    const response = await fetch("/config.json");
    const cityConfig = await response.json();
    return cityConfig;
}