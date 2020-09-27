import React from 'react';
import { StyleSheet, FlatList,  View } from 'react-native';

import ForecastInfoItem from './ForecastInfoItem';
import createAdditionalData from '../../utils/createAdditionalData';
import AdditonalData from '../../interfaces/AdditionalData';

interface Props {
  condition:string,
  feelsLike:number
  humidity:number,
  wind:number
}

export default class AdditionalForecastInfo extends React.Component<Props, {}> {
    renderListItem = ({item}: {item:AdditonalData}):React.ReactElement => {
        return <ForecastInfoItem
        title = {item.title}
        extra = {item.extra}
        data = {item.data}
        />;
    }


    render() {
      const flatlistData:Array<AdditonalData> = createAdditionalData(this.props.condition, this.props.feelsLike, this.props.humidity, this.props.wind);
      return (
        <View style={styles.additionalForecastInfo}>
          <FlatList
            data={flatlistData}
            renderItem={this.renderListItem}
            keyExtractor={item => item.id}
          />
          </View>
      );
    }
  }

const styles = StyleSheet.create({
  additionalForecastInfo:{
  }
});
