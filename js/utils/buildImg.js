


/**
 * Creates an image element, assigns it a class, a source, and appends it to a parent element.
 * @param {object} options - The options for creating the image.
 * @param {HTMLElement} options.parentElement - The parent element to which the image will be appended.
 * @param {string} [options.className] - The CSS class to assign to the image.
 * @param {string} [options.src] - The source (URL) of the image.
 * @returns {HTMLImageElement} The created image element.
 */
export default function buildImg({ parentElement, className, alt, src }) {
    const img = document.createElement("img");
    let mainSrc = src ? src : "/assets/svg/static/weather.svg"
    if(className){
        img.className = className;
    }

    img.setAttribute("alt", alt);
    
    img.src = mainSrc;
    parentElement.appendChild(img);
    return img;

}