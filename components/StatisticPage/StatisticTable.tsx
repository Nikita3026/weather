import  React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {FlatList} from 'react-native';

import { Text } from '../Themed';
import StatisticInfoItem from './StatisticInfoItem';
import {StringCoordinates} from '../../interfaces/Coordinates';

interface statisticInfoStructure {
  id:string,
  place:string,
  coordinates: {
    latitude:string,
    longtitude:string
  },
  date:string
}


const testData = [
  {
    id:'1',
    place:"Minsk, Belarus",
    coordinates: {
      latitude:  `41°24'12.2"`,
      longitude: `41°24'12.2"`
    },
    date: '12.12.2000 19:40'
  },
  {
    id:'2',
    place:"Berlin, Germany",
    coordinates: {
      latitude:  `41°24'12.2"`,
      longitude: `41°24'12.2"`
    },
    date: '21.03.2000 22:20'
  },
  {
    id:'3',
    place:"London, England",
    coordinates: {
      latitude:  `41°24'12.2"`,
      longitude: `41°24'12.2"`
    },
    date: '5.07.2000 13:15'
  },
  {
    id:'4',
    place:"New-York, USA",
    coordinates: {
      latitude:  `41°24'12.2"`,
      longitude: `41°24'12.2"`
    },
    date: '03.01.2200 12:00'
  }
]

export default class StatisticTable extends React.Component {
  renderColumnHeader = (title:string) => {
      return <Text style={styles.tableTitle}>{title}</Text>;
  }

  renderListItem = (data: string | StringCoordinates):React.ReactElement => {
    return <StatisticInfoItem data = {data}/>;
  }

  /* renderCol = (type:string):React.ReactElement => {
    const tableColumnStyle = type === 'date' ? [styles.tableColumn, styles.lastColContainer] : styles.tableColumn;
    return (
    <Col style = {tableColumnStyle}>
      <View>
        {this.renderColumnHeader(type)}
        <View style = {styles.infoList}>
          <FlatList
            data={testData}
            renderItem={({item}: {item:statisticInfoStructure}) => this.renderListItem(item[type])}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </Col>)
  }
 */

  render() {
    return (
      <Text>Hi</Text>
    );
  }
}

const styles = StyleSheet.create({
  statisticTableContainer: {
    flex: 1
  },
  tableColumn:{
    alignItems:'center',
    borderRightWidth:2,
    borderRightColor:'grey',
    backgroundColor:'#121E2C'
  },
  tableTitle: {
      fontWeight:'bold',
      fontSize:17,
      marginTop:15,
      marginBottom:15,
      alignSelf:'center',
      textTransform:'capitalize'
  },
  lastColContainer: {
    borderRightWidth:0
  },
  infoList:{
    borderTopColor:'grey',
    borderTopWidth:2,
    backgroundColor:'#121E2C',
  }
});
