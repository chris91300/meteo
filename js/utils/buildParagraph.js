import { loading } from "./loading.js";



/**
 * Creates a paragraph element, assigns it a class, text content, and appends it to a parent element.
 * If no text content is provided, a loading indicator is displayed.
 * @param {object} options - The options for creating the paragraph.
 * @param {HTMLElement} options.parentElement - The parent element to which the paragraph will be appended.
 * @param {string} [options.className] - The CSS class to assign to the paragraph.
 * @param {string} [options.textContent] - The text content of the paragraph.
 * @returns {HTMLParagraphElement} The created paragraph element.
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
        loading(parentElement);
    }
    
    
    return paragraph;
}