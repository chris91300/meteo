


export default function buildImg({ parentElement, className, src }){
    const img = document.createElement("img");
    let mainSrc = src ? src : "/assets/svg/static/weather.svg"
    if(className){
        img.className = className;
    }
    
    img.src = mainSrc;
    parentElement.appendChild(img);
    return img;

}