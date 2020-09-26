import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { Text } from '../Themed';
import { View } from 'react-native'

import AdditionalForecastInfo from './AdditionalForecastInfo';
import Request from '../../utils/requests/requests';

interface Props {
  cityName:string
}

interface State {
  numberOfDegrees:number,
  condition:string,
  feelsLike:number,
  humidity:number,
  wind:number
}

export default class ForecastInfo extends React.Component<Props, {}> {
    requests = new Request();

    state = {
      numberOfDegrees:0,
      condition:'',
      feelsLike:0,
      humidity:0,
      wind:0
    }

    componentWillReceiveProps = async(newProps:Props):Promise<any> =>{
      if(newProps.cityName !== this.props.cityName && newProps.cityName !== undefined) {
        const weatherForecastData = await this.requests.getWeatherForecast(newProps.cityName);
        this.setState({
          numberOfDegrees: Math.round(weatherForecastData.temp_c),
          condition: weatherForecastData.condition.text,
          feelsLike: Math.round(weatherForecastData.feelslike_c),
          humidity: Math.round(weatherForecastData.humidity),
          wind: Math.round(weatherForecastData.wind_kph)
        })
      }
    }


    render() {
      return (
        <View style={styles.separator}>
          <Text style={styles.currentNumberOfDegrees}>{this.state.numberOfDegrees}<Text style = {styles.degrees}>°</Text></Text>
          <AdditionalForecastInfo
            condition = {this.state.condition}
            feelsLike = {this.state.feelsLike}
            humidity = {this.state.humidity}
            wind = {this.state.wind}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    currentNumberOfDegrees: {
        fontSize: 140,
        fontWeight: 'bold',
    },
    degrees: {
      fontWeight: '400',
      fontSize: 120,
    }
});
