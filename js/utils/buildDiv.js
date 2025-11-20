
/**
 * Creates a div element, assigns it a class, and appends it to a parent element.
 * @param {object} options - The options for creating the div.
 * @param {HTMLElement} options.parentElement - The parent element to which the div will be appended.
 * @param {string} options.className - The CSS class to assign to the div.
 * @returns {HTMLDivElement} The created div element.
 */
export default function buildDiv({ parentElement, className }) {
    const div = document.createElement("div");
    if( className ){
        div.className = className;
    }
    
    parentElement.appendChild(div);
    return div;
}