import  React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {FlatList} from 'react-native';

import { Text } from '../Themed';
import StatisticInfoItem from './StatisticInfoItem';
import {StringCoordinates} from '../../interfaces/Coordinates';
import Requests from '../../utils/requests/requests';
import StatisticData from '../../interfaces/StatisticData';

interface State{
  statisticData:Array<StatisticData>
}

export default class StatisticTable extends React.Component<{}, State> {
  request = new Requests();

  state = {
    statisticData:[]
  }

  componentDidMount = async(): Promise<any> => {
    const statisticData:Array<StatisticData> = await this.request.getStatistic();
    this.setState({
      statisticData:statisticData
    });
  }

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
