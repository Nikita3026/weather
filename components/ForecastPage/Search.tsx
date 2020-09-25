import React from 'react';
import { StyleSheet, ListRenderItem } from 'react-native';
import { View } from '../Themed';
import { TextInput, Button} from 'react-native';

interface State {
    searchInputValue:string
}

export default class Search extends React.Component<{}, State> {
    state = {
        searchInputValue: ''
      }

    handleInputChange = (newValue: string): void => {
    this.setState({
        searchInputValue: newValue
    });
    }

    handleButtonPress = ():void => {
    alert('hi');
    }

    render(){
        return(
          <View style = {styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              onChangeText={(text: string) => this.handleInputChange(text)}
              value={this.state.searchInputValue}
            />
            <Button
            onPress={this.handleButtonPress}
            title="Search"
            color="white"
            />
          </View>
        )
    }
}


const styles = StyleSheet.create({
    searchContainer: {
        marginVertical: 30,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:5
      },
      searchInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor:'#2F2F2F',
        width:'70%',
        borderRadius:10,
        color:'white',
        marginRight:10,
        paddingHorizontal:10
      },
      searchSubmitButton: {
        borderRadius:10,
        borderColor: 'white',
        height: 40,
      }
});
