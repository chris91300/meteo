

/**
 * Supprime tous les éléments avec la classe 'loading' du DOM.
 */
export default function removeLoadingElements() {
    const elements = document.querySelectorAll('.loading');

    for(const element of elements){
        element.remove();
    }
}