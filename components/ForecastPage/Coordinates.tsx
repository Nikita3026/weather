import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { View, Text} from '../Themed';
import convertCoordinates from '../../utils/convertCoordinates';
import {StringCoordinates} from '../../interfaces/Coordinates';

interface Props {
  currentLatitude:number,
  currentLongitude:number
}

export default class Coordinates extends React.Component<Props, {}> {
    render() {
      const convertedCoordinates:StringCoordinates = convertCoordinates(this.props.currentLatitude, this.props.currentLongitude);
      return (
        <View style={styles.coordinates}>
            <Text>Latitude: {convertedCoordinates.latitude}</Text>
            <Text>Longitude: {convertedCoordinates.longitude}</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  coordinates:{
      marginTop:50,
      marginLeft:20
  }
});
