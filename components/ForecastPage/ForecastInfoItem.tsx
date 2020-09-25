import * as React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { Text, View } from '../Themed';


interface Props {
    title:string
}

export default class ForecastInfoItem extends React.Component<Props, {}> {
    render() {
      return (
        <View style={styles.item}>
            <Text style={styles.title}>{this.props.title}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    item: {
        backgroundColor: '#121E2C',
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical: 6,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
        textTransform:'capitalize'
    },
  });
