import * as React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { Text, View } from '../Themed';

interface Coordinates {
    latitude:string,
    longitude:string
}

interface Props {
    data:string | Coordinates
}

export default class StatisticInfoItem extends React.Component<Props, {}> {
    isDataCoordinates(data: string | Coordinates): data is Coordinates {
        return data instanceof Object;
    }

    render() {
      let textInfo:string = 'hi';
      if(this.isDataCoordinates(this.props.data)) {
        textInfo = `Latitude: ${this.props.data.latitude}\nLongtitude: ${this.props.data.longtitude}`
      } else {
        textInfo = this.props.data;
      }

      return (
        <View style={styles.item}>
            <Text style={styles.title}>{textInfo}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    item: {
        backgroundColor:'#121E2C',
        paddingVertical:5,
        marginVertical: 6,
        paddingHorizontal: 16,
        borderBottomWidth:2,
        borderBottomColor:'gray'
    },
    title: {
        fontSize: 16,
        textTransform:'capitalize'
    },
  });
