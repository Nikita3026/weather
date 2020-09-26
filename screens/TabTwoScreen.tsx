import  React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import StatisticTable from '../components/StatisticPage/StatisticTable';


export default class TabTwoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
       {/*  <StatisticTable/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
});
