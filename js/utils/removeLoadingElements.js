

/**
 * Removes all elements with the 'loading' class from the DOM.
 */
export default function removeLoadingElements() {
    const elements = document.querySelectorAll('.loading');

    for(const element of elements){
        element.remove();
    }
}