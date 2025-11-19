import buildDiv from "./buildDiv.js"


function getLoading(){
    const loading = (parent, className) => {
        const classNameLoading = className ? `loading ${className}` : "loading";
        buildDiv({ parentElement: parent, className: classNameLoading });
    } 

    return loading;
}

const loading = getLoading();
export { loading};
