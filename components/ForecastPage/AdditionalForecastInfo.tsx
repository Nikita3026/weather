import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { View, Text} from '../Themed';
import {FlatList} from 'react-native';

import ForecastInfoItem from './ForecastInfoItem';

interface additionalDataItemStructure {
    id:string,
    title:string
}

export default class AdditionalForecastInfo extends React.Component<{}, {}> {
    renderListItem = ({item}: {item:additionalDataItemStructure}):any => {
        return <ForecastInfoItem title = {item.title}/>;
    }

    render() {
      return (
        <View style={styles.additionalForecastInfo}>
          <FlatList
            data={[{id:'1', title:"firstItem"}, {id:'2', title:"secondItem"}, {id:'3', title:"thirdItem"}, {id:'4', title:"fourthItem"}]}
            renderItem={this.renderListItem}
            keyExtractor={item => item.id}
          />
          </View>
      );
    }
  }

const styles = StyleSheet.create({
  additionalForecastInfo:{
    marginLeft:20
  }
});
