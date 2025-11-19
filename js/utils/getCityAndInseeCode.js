//import config from '../../config.json' assert { type: "json" };
import getCityConfig from './getCityConfig.js';




export default async function getCityAndInseeCode() {
    try{
        const config = await getCityConfig();

        console.log(config);
        const city = config.city;
        
        const url = 'https://geo.api.gouv.fr/communes?nom=';
        const field = '&fields=code';
        const globalUrl = url + city + field;

        console.log("Récupération du code insee pour la ville de ",city);
        const data = await fetch(globalUrl);
        const response = await data.json();
        const inseeCode = response[0].code;
        console.log("Code insee récupéré : ",inseeCode);
        return {
            city,
            inseeCode
        };
    }catch(err){
        console.log(err)
    }
    
}