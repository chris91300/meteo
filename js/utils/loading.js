import buildDiv from "./buildDiv.js"


function getLoading(){
    /**
     * Creates and appends a loading element to a parent.
     * @param {HTMLElement} parent - The parent element to which the loading indicator will be added.
     * @param {string} [className] - An additional CSS class to add to the loading indicator.
     */
    const loading = (parent, className) => {
        const classNameLoading = className ? `loading ${className}` : "loading";
        buildDiv({ parentElement: parent, className: classNameLoading });
    } 

    return loading;
}

const loading = getLoading();
export { loading};
