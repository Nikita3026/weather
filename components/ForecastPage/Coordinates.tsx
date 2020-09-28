import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import convertCoordinates from '../../utils/convertCoordinates';
import {StringCoordinates} from '../../interfaces/Coordinates';
import Colors from '../../constants/Colors';

interface Props {
  currentLatitude:number,
  currentLongitude:number
}

export default class Coordinates extends React.Component<Props, {}> {
    render() {
      const convertedCoordinates:StringCoordinates = convertCoordinates(this.props.currentLatitude, this.props.currentLongitude);
      return (
        <View style={styles.coordinates}>
            <Text style = {styles.coordinateNumber}>Latitude: {convertedCoordinates.latitude}</Text>
            <Text style = {styles.coordinateNumber}>Longitude: {convertedCoordinates.longitude}</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  coordinates:{

  },
  coordinateNumber:{
    color:Colors.main.text
  }
});
