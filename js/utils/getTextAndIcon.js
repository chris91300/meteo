


export default async function getTextAndIcon(weatherCode){
    try{
        const mapConfig = await fetch('/weatherCode.config.json');
        const map = await mapConfig.json();
        return map[weatherCode];
    }catch(err){
        console.log(err)
    }

}