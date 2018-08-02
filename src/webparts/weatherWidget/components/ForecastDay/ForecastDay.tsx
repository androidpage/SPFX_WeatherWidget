import * as React from 'react';
import styles from './ForecastDay.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export interface IForecastDayProps{
    day: any;
    key: number;
}
export interface IForecastDayState{
}

export default class ForecastDay extends React.Component<IForecastDayProps, IForecastDayState>{
    constructor(props){
        super(props)
    }

    public render(): React.ReactElement<IForecastDayProps>{
        return(
            <div className={ styles.dayContainer } style={{ gridColumn: this.props.key }}>
                <h5 className={ styles.forecastDay }>{ this.props.day.day }</h5>
                <div className={ styles.forecastIconContainer }>
                    <Icon iconName={ this._getWeatherIcon(this.props.day.code) } className={ styles.weatherIcon }/>
                    <div className={ styles.forecastTempIcons }>
                        <Icon iconName="CaretSolidUp" className={ styles.forecastHighIcon } />
                        <Icon iconName="CaretSolidDown" className={ styles.forecastLowIcon } />
                    </div>
                    <div className={ styles.forecastTempText }>
                        <span className={ styles.forecastTempTextHigh }>{ this.props.day.high }&deg;</span>
                        <span className={ styles.forecastTempTextLow }>{ this.props.day.low }&deg;</span>
                    </div>
                </div>
                <span className={ styles.forecastText }>{ this.props.day.text }</span>
                <h5 className={ styles.forecastDate }>{ this.props.day.date }</h5>
            </div>
        )
    }

    private _getWeatherIcon(weatherCode: number){
        console.log(weatherCode)
        switch(weatherCode.toString()){
            case "9":
            case "39":
            case "40": {
                return "RainShowersDay"
            }
            case "12": {
                return "Rain"
            }
            case "24":
            case "23":{
                return "Duststorm"
            }
            case "32":
            case "33":
            case "34":{
                return "Sunny"
            }
            case "26":
            case "27": 
            case "28":{
                return "Cloudy"
            }
            case "3":
            case "4":
            case "37":
            case "38":{
                return "Thunderstorms"
            }
            case "29":
            case "30":
            default: {
                return "PartlyCloudyDay"
            }
        }
      }
}