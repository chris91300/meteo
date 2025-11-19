
export default function buildDiv({ parentElement, className }){
    const div = document.createElement("div");
    div.className = className;
    parentElement.appendChild(div);
    return div;
}