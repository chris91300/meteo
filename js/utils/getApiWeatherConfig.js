
export default async function getApiWeatheryConfig(){
    const response = await fetch('/apiWeather.conf.json');
    const cityConfig = await response.json();
    return cityConfig;
}
    
