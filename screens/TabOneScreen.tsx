import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Search from '../components/ForecastPage/Search';
import ForecastInfo from '../components/ForecastPage/ForecastInfo';
import Coordinates from '../components/ForecastPage/Coordinates';
import { AntDesign } from '@expo/vector-icons';
import Requests from '../utils/requests/requests';
import Geolocation from '../interfaces/Geolocation';
import Colors from '../constants/Colors';
import checkIsDayAtUsersPlace from '../utils/checkIsDayAtUsersPlace';
import createStatisticObject from '../utils/createStatisticObject';
import convertCoordinates from '../utils/convertCoordinates';
import {StringCoordinates} from '../interfaces/Coordinates';

interface State {
  currentLatitude:number,
  currentLongitude:number,
  cityName:string,
  countryName:string,
  isDayAtUsersPlace:boolean
}


export default class TabOneScreen extends React.Component<{}, State> {
  requests = new Requests();

  state = {
    currentLatitude:0,
    currentLongitude:0,
    cityName:'',
    countryName:'',
    isDayAtUsersPlace:true
  }

  componentDidMount = async():Promise<any> => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    this.changeUsersTimeOfDay(checkIsDayAtUsersPlace());
  }

  setCoordinates = (latitude:number, longitude:number):void => {
    this.setState({
      currentLatitude:latitude,
      currentLongitude:longitude
    });
  }

  setCity = (cityName:string, countryName:string):void => {
    this.setState({
      cityName: cityName,
      countryName: countryName
    });
  }

  changeUsersTimeOfDay = (newValue:boolean):void => {
    this.setState({
      isDayAtUsersPlace: newValue
    });
  }

  sendStatisticAboutRequest = () => {
    const convertedCoordinates:StringCoordinates = convertCoordinates(this.state.currentLatitude, this.state.currentLongitude);
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    this.requests.sendStatistic(
      createStatisticObject(
        `${this.state.cityName}, ${this.state.countryName}`,
        convertedCoordinates.latitude,
        convertedCoordinates.longitude,
        currentDate.toLocaleDateString(),
        currentTime
        )
    );
  }

  getInfoAboutUsersPlace = async(latitude:number, longitude:number):Promise<any> => {
    const geolocationInfo:Geolocation = await this.requests.getPlaceFromCoordinates(latitude.toString(),longitude.toString());
    this.setCity(geolocationInfo.city, geolocationInfo.countryName);
    this.sendStatisticAboutRequest();
  }

  getCoordinates = async(position:Position):Promise<any> => {
    this.setCoordinates(position.coords.latitude, position.coords.longitude);
    await this.getInfoAboutUsersPlace(position.coords.latitude, position.coords.longitude);
  }

  handleSearchButtonPress = async(event:MouseEvent, inputValue:string):Promise<any> => {
    const data = await this.requests.getCoordinatesFromCityName(inputValue);
    this.setCoordinates(data.position.lat, data.position.lng);
    this.setCity(data.address.city, data.address.countryName);
    this.sendStatisticAboutRequest();
  }


  render() {
    return (
      <View style={styles.container}>
          <Search handleButtonPress = {this.handleSearchButtonPress}/>
          <Text style={styles.placeName}>
            <AntDesign name="enviromento" size={28} color="#D0523E" /> {this.state.cityName}, {this.state.countryName}</Text>
          <ForecastInfo cityName = {this.state.cityName}/>
          <View style = {styles.footer}>
            <Coordinates
            currentLatitude = {this.state.currentLatitude}
            currentLongitude = {this.state.currentLongitude}
            />
            <Image
            source={this.state.isDayAtUsersPlace ? require('../assets/images/day.png'):require('../assets/images/night.png')}
            style={styles.imageIndicator}
            ></Image>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.main.background,
    color:Colors.main.text,
    alignItems:'center'
  },
  imageIndicator: {

  },
  placeName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:30,
    marginBottom:30,
    color:Colors.main.text
  },
  footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:50,
    marginLeft:20,
    alignItems:'center',
  }
});
