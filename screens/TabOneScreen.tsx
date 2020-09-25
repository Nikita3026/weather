import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';

import { Text, View } from '../components/Themed';
import {ScrollView} from 'react-native';

import Search from '../components/ForecastPage/Search';
import ForecastInfo from '../components/ForecastPage/ForecastInfo';
import Coordinates from '../components/ForecastPage/Coordinates';
import { AntDesign } from '@expo/vector-icons';

export default class TabOneScreen extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Text style={styles.placeName}>
          <AntDesign name="enviromento" size={28} color="#D0523E" /> Minsk, Belarus</Text>
        <ForecastInfo/>
        <Coordinates/>
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
