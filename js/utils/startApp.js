import buildElements from "./buildElements.js";
import buildParagraph from "./buildParagraph.js";
import fetchDataAndhydrateApp from "./fetchDataAndHydrateApp.js";
import removeLoadingElements from "./removeLoadingElements.js";


const TIME = 60000; // 1 minute in milliseconds or 1000 for one second

/**
 * Initialise l'application météo.
 * Construit l'interface, récupère les données initiales et met en place un intervalle pour rafraîchir les données toutes les heures.
 */
export default async function startApp() {
    try{
        
        const currentDate = new Date();
        let currentHour = currentDate.getHours();
        console.log("Start weather application");
        const appElements = buildElements();

        await fetchDataAndhydrateApp(appElements);
        removeLoadingElements();
    

        this.setInterval(async () => {
          
            const newDate = new Date();
            let newHour = newDate.getHours();
            console.log("currentHour :", currentHour, " - newHour :", newHour);
            if( newHour != currentHour ){
                console.log("Time changed, weather data updated");
                await fetchDataAndhydrateApp(appElements);
                currentHour = newHour;
            }else{
                console.log("No time change");
            }
            
        }, TIME);
        

    }catch(error){
        console.error(error);
        const appElement = document.getElementById("app");
        const parent = appElement || document.body;
        buildParagraph({ parentElement: parent, className: "error", textContent: "Une erreur est survenue."});
    }
    
}