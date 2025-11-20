import buildDiv from "./buildDiv.js";
import buildParagraph from "./buildParagraph.js";
import buildImg from "./buildImg.js";


/**
 * Builds the basic HTML structure of the weather application.
 * @returns {Object.<string, HTMLElement>} An object containing references to the created DOM elements.
 */
export default function buildElements() {

        try{

        const appElement = document.getElementById("app");

        /*****      HEADER      ******/
        const bannerCity = buildDiv({ parentElement: appElement, className: "city" });
        const city = buildParagraph({ parentElement: bannerCity, className: "city_text" });
    

        /*****   MAIN CONTAINER      ******/
        const mainContainer = buildDiv({ parentElement: appElement, className: "main_container" });        
        const iconWeather = buildImg({ parentElement: mainContainer, className: "main_container_icon", alt: "weather icon" });    
        const temperature = buildParagraph({ parentElement: mainContainer, className: "main_container_temp" });    
        const details = buildParagraph({ parentElement: mainContainer, className: "main_container_details" });
    

        /*****      FOOTER      ******/
        const footer = buildDiv({ parentElement: appElement, className: "footer" });
    
        /*****      HUMIDITY     ******/
        const footerContainerHumidity = buildDiv({ parentElement: footer, className: "footer_container" });
        const humidityIcon = buildImg({ parentElement: footerContainerHumidity, className: "icon", src: "/assets/img/humidity.png", alt: "humidity icon"});
        const humidity = buildParagraph({ parentElement: footerContainerHumidity, className: "humidity" });
    

        /*****      WIND      ******/
        const footerContainerWind = buildDiv({ parentElement: footer, className: "footer_container withBorder" });
        const windIcon = buildImg({ parentElement: footerContainerWind, className: "icon", src: "/assets/img/wind.png", alt: "wind icon"});
        const wind = buildParagraph({ parentElement: footerContainerWind, className: "wind" });
    
    
        /*****      RAIN      ******/
        const footerContainerRain = buildDiv({ parentElement: footer, className: "footer_container" });
        const rainProbabilityIcon = buildImg({ parentElement: footerContainerRain, className: "icon", src: "/assets/img/rain.png", alt: "rain icon"});
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

        }catch(err){
        console.log(err)
        throw err
        }
}