import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';

import { Text, View } from '../components/Themed';

import Search from '../components/ForecastPage/Search';
import ForecastInfo from '../components/ForecastPage/ForecastInfo';
import Coordinates from '../components/ForecastPage/Coordinates';
import { AntDesign } from '@expo/vector-icons';

interface State {
  currentLatitude:number,
  currentLongitude:number
}

export default class TabOneScreen extends React.Component<{}, State> {
  state = {
    currentLatitude:0,
    currentLongitude:0
  }

  setCoordinates = (latitude:number, longitude:number):void => {
    this.setState({
      currentLatitude:latitude,
      currentLongitude:longitude
    });
  }

  componentDidMount = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.setCoordinates(position.coords.latitude, position.coords.longitude));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Text style={styles.placeName}>
          <AntDesign name="enviromento" size={28} color="#D0523E" /> Minsk, Belarus</Text>
        <ForecastInfo/>
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
