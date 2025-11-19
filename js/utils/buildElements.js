import buildDiv from "./buildDiv.js";
import buildParagraph from "./buildParagraph.js";
import buildImg from "./buildSVG.js";


export default function buildElements(){

        const appElement = document.getElementById("app");

        /*****      HEADER      ******/
        const bannerCity = buildDiv({ parentElement: appElement, className: "city" });
        const city = buildParagraph({ parentElement: bannerCity, className: "city" });
    

        /*****   MAIN CONTAINER      ******/
        const mainContainer = buildDiv({ parentElement: appElement, className: "main_container" });        
        const iconWeather = buildImg({ parentElement: mainContainer, className: "main_container_icon" });    
        const temperature = buildParagraph({ parentElement: mainContainer, className: "main_container_temp" });    
        const details = buildParagraph({ parentElement: mainContainer, className: "main_container_details" });
    

        /*****      FOOTER      ******/
        const footer = buildDiv({ parentElement: appElement, className: "footer" });
    
        /*****      HUMIDITY     ******/
        const footerContainerHumidity = buildDiv({ parentElement: footer, className: "footer_container" });
        const humidityIcon = buildImg({ parentElement: footerContainerHumidity, className: "icon", src: "/assets/img/humidity.png" });
        const humidity = buildParagraph({ parentElement: footerContainerHumidity, className: "humidity" });
    

        /*****      WIND      ******/
        const footerContainerWind = buildDiv({ parentElement: footer, className: "footer_container withBorder" });
        const windIcon = buildImg({ parentElement: footerContainerWind, className: "icon", src: "/assets/img/wind.png" });
        const wind = buildParagraph({ parentElement: footerContainerWind, className: "wind" });
    
    
        /*****      RAIN      ******/
        const footerContainerRain = buildDiv({ parentElement: footer, className: "footer_container" });
        const rainProbabilityIcon = buildImg({ parentElement: footerContainerRain, className: "icon", src: "/assets/img/rain.png" });
        const rainProbability = buildParagraph({ parentElement: footerContainerRain, className: "rain big" });


        return {
            city,
            iconWeather,
            temperature,
            details,
            humidity,
            wind,
            rainProbability
        }
}