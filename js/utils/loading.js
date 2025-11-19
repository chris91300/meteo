import buildDiv from "./buildDiv.js"


function getLoading(){
    /**
     * Crée et ajoute un élément de chargement à un parent.
     * @param {HTMLElement} parent - L'élément parent auquel ajouter l'indicateur de chargement.
     * @param {string} [className] - Une classe CSS supplémentaire à ajouter à l'indicateur de chargement.
     */
    const loading = (parent, className) => {
        const classNameLoading = className ? `loading ${className}` : "loading";
        buildDiv({ parentElement: parent, className: classNameLoading });
    } 

    return loading;
}

const loading = getLoading();
export { loading};
