import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';

import { Text, View } from '../components/Themed';

import Search from '../components/ForecastPage/Search';
import ForecastInfo from '../components/ForecastPage/ForecastInfo';
import Coordinates from '../components/ForecastPage/Coordinates';
import { AntDesign } from '@expo/vector-icons';
import Requests from '../utils/requests/requests';
import Geolocation from '../interfaces/Geolocation';

interface State {
  currentLatitude:number,
  currentLongitude:number,
  cityName:string,
  countryName:string
}


export default class TabOneScreen extends React.Component<{}, State> {
  requests = new Requests();

  state = {
    currentLatitude:0,
    currentLongitude:0,
    cityName:'',
    countryName:''
  }

  componentDidMount = async():Promise<any> => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
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

  getInfoAboutUsersPlace = async(latitude:number, longitude:number):Promise<any> => {
    const geolocationInfo:Geolocation = await this.requests.getPlaceFromCoordinates(latitude.toString(),longitude.toString());
    this.setCity(geolocationInfo.city, geolocationInfo.countryName);
  }

  getCoordinates = async(position:Position):Promise<any> => {
    this.setCoordinates(position.coords.latitude, position.coords.longitude);
    await this.getInfoAboutUsersPlace(position.coords.latitude, position.coords.longitude);
  }

  handleSearchButtonPress = async(event:MouseEvent, inputValue:string):Promise<any> => {
    const data = await this.requests.getCoordinatesFromCityName(inputValue);
    this.setCoordinates(data.position.lat, data.position.lng);
    this.setCity(data.address.city, data.address.countryName);
  }


  render() {
    return (
      <View style={styles.container}>
        <Search handleButtonPress = {this.handleSearchButtonPress}/>
        <Text style={styles.placeName}>
          <AntDesign name="enviromento" size={28} color="#D0523E" /> {this.state.cityName}, {this.state.countryName}</Text>
        <ForecastInfo cityName = {this.state.cityName}/>
        <Coordinates
        currentLatitude = {this.state.currentLatitude}
        currentLongitude = {this.state.currentLongitude}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  placeName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:30,
    marginBottom:30
  }
});
