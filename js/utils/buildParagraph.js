import { loading } from "./loading.js";



export default function buildParagraph({ parentElement, className, textContent }){
    const paragraph = document.createElement("p");

    if(className){
        paragraph.className = className;
    }
    parentElement.appendChild(paragraph);
    
    if(textContent){
        paragraph.textContent = textContent;
    }else{
        loading(paragraph);
    }
    
    
    return paragraph;
}