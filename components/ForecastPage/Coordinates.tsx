import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { View, Text} from '../Themed';


export default class AdditionalForecastInfo extends React.Component<{}, {}> {
    render() {
      return (
        <View style={styles.coordinates}>
            <Text>Latitude: 41°24'12.2"</Text>
            <Text>Longitude: 41°24'12.2"</Text>
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
