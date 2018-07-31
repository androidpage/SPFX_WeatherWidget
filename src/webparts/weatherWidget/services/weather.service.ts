export class Weather {
    private query: string;
    constructor(locationName){
        this.query = `select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${locationName}") and u='c' limit 7`;
    }


    async getWeather(){
        let weather = await fetch(`https://query.yahooapis.com/v1/public/yql?q=${this.query}&format=json`).then((data) => data.json())
        return weather.query.results.channel;
    }

}