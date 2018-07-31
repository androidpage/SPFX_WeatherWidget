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
                <Icon iconName={ this._getWeatherIcon(this.props.day.code) } className={ styles.weatherIcon }/>
                <Icon iconName="CaretSolidUp" className={ styles.forecastHighIcon } />
                <span className={ [styles.forecastTempText, styles.forecastTempTextHigh].join(" ") }>{ this.props.day.high }&deg;</span>
                <Icon iconName="CaretSolidDown" className={ styles.forecastLowIcon } />
                <span className={ [styles.forecastTempText, styles.forecastTempTextLow].join(" ") }>{ this.props.day.low }&deg;</span>

                <span className={ styles.forecastText }>{ this.props.day.text }</span>
                <h5 className={ styles.forecastDate }>{ this.props.day.date }</h5>
            </div>
        )
    }

    private _getWeatherIcon(weatherCode: number){
        console.log(weatherCode)
        switch(weatherCode.toString()){
            case "12": {
                return "Rain"
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
            case "29":
            case "30":
            default: {
                return "PartlyCloudyDay"
            }
        }
      }
}