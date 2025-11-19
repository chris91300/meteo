


export default async function getCityConfig(){
    const response = await fetch("/config.json");
    const cityConfig = await response.json();
    return cityConfig;
}