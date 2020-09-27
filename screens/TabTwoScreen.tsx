import  React from 'react';
import { StyleSheet, View } from 'react-native';
import StatisticTable from '../components/StatisticPage/StatisticTable';
import Colors from '../constants/Colors';


export default class TabTwoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       {/*  <StatisticTable/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.main.background,
    color: Colors.main.text
  }
});
