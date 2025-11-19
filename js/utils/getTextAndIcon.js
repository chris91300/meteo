


/**
 * Récupère le texte descriptif et le nom de l'icône correspondant à un code météo.
 * @param {number|string} weatherCode - Le code météo fourni par l'API.
 * @returns {Promise<{text: string, icon: string}>} Une promesse qui se résout avec un objet contenant le texte et le nom de l'icône.
 */
export default async function getTextAndIcon(weatherCode) {
    try{
        const mapConfig = await fetch('/weatherCode.config.json');
        const map = await mapConfig.json();
        return map[weatherCode];
    }catch(err){
        console.log(err)
    }

}