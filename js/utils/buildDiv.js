
/**
 * Crée un élément div, lui assigne une classe et l'ajoute à un élément parent.
 * @param {object} options - Les options pour la création du div.
 * @param {HTMLElement} options.parentElement - L'élément parent auquel le div sera ajouté.
 * @param {string} options.className - La classe CSS à assigner au div.
 * @returns {HTMLDivElement} L'élément div créé.
 */
export default function buildDiv({ parentElement, className }) {
    const div = document.createElement("div");
    if( className ){
        div.className = className;
    }
    
    parentElement.appendChild(div);
    return div;
}