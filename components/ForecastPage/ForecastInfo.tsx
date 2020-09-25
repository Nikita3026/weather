import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { Text } from '../Themed';
import { View } from 'react-native'

import AdditionalForecastInfo from './AdditionalForecastInfo';


export default class ForecastInfo extends React.Component<{}, {}> {
    render() {
      return (
        <View style={styles.separator}>
          <Text style={styles.currentNumberOfDegrees}>25</Text>
          <AdditionalForecastInfo/>
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
    }
});
