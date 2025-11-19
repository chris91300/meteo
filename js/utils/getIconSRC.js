

/**
 * Construit le chemin d'accès à l'icône SVG animée en fonction de son nom.
 * @param {string} name - Le nom de l'icône (sans extension).
 * @returns {string} Le chemin d'accès complet vers le fichier SVG de l'icône.
 */
export default function getIconSRC(name) {
    const src = `/assets/svg/animated/${name}.svg`;
    return src;
}