import * as React from 'react';
import styles from './WeatherWidget.module.scss';
import { IWeatherWidgetProps } from './IWeatherWidgetProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Weather } from '../services/weather.service';
import ForecastDay from './ForecastDay/ForecastDay';

export interface IWeatherWidgetState{
  forecast?: any;
  locality: string;
}

export default class WeatherWidget extends React.Component<IWeatherWidgetProps, IWeatherWidgetState> {
  private _forecast: any;

  constructor(props){
    super(props);

    this.state = {
      forecast: null,
      locality: this.props.locality || "Melbourne, Vic"
    }
  }

  public async componentDidMount(){
    let _weather = new Weather(this.state.locality);
    let _res = await _weather.getWeather();

    this.setState({
      forecast: _res
    })
  }

  public render(): React.ReactElement<IWeatherWidgetProps> {
    return (
      <div className={styles.widgetContainer }>
        <h3>Weather Forecast</h3>
        <p>{ this.state.locality }</p>
        <div className={ styles.forecastContainer }>
        { 
          this.state.forecast && this.state.forecast.map((val, i) => {
            return (
              <ForecastDay day={ val.item.forecast } key={ i } />
            )
          })
        }
        </div>
        <a className={ styles.yahooLink } href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>
      </div>
    );
  }
}
