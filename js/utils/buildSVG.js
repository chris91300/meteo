


/**
 * Crée un élément image, lui assigne une classe, une source et l'ajoute à un élément parent.
 * @param {object} options - Les options pour la création de l'image.
 * @param {HTMLElement} options.parentElement - L'élément parent auquel l'image sera ajoutée.
 * @param {string} [options.className] - La classe CSS à assigner à l'image.
 * @param {string} [options.src] - La source (URL) de l'image.
 * @returns {HTMLImageElement} L'élément image créé.
 */
export default function buildImg({ parentElement, className, src }) {
    const img = document.createElement("img");
    let mainSrc = src ? src : "/assets/svg/static/weather.svg"
    if(className){
        img.className = className;
    }
    
    img.src = mainSrc;
    parentElement.appendChild(img);
    return img;

}