import { loading } from "./loading.js";



/**
 * Crée un élément paragraphe, lui assigne une classe, un contenu textuel et l'ajoute à un élément parent.
 * Si aucun contenu textuel n'est fourni, un indicateur de chargement est affiché.
 * @param {object} options - Les options pour la création du paragraphe.
 * @param {HTMLElement} options.parentElement - L'élément parent auquel le paragraphe sera ajouté.
 * @param {string} [options.className] - La classe CSS à assigner au paragraphe.
 * @param {string} [options.textContent] - Le contenu textuel du paragraphe.
 * @returns {HTMLParagraphElement} L'élément paragraphe créé.
 */
export default function buildParagraph({ parentElement, className, textContent }) {
    const paragraph = document.createElement("p");

    if(className){
        paragraph.className = className;
    }
    parentElement.appendChild(paragraph);
    
    if(textContent){
        paragraph.textContent = textContent;
    }else{
        loading(paragraph);
    }
    
    
    return paragraph;
}