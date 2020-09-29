import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';
import Colors from '../../constants/Colors';

interface State {
    searchInputValue:string
}

interface Props {
  handleButtonPress:Function
}

export default class Search extends React.Component<Props, State> {
    state = {
        searchInputValue: ''
      }

    handleInputChange = (newValue: string): void => {
      this.setState({
          searchInputValue: newValue
      });
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
            onPress={(e) => this.props.handleButtonPress(e, this.state.searchInputValue)}
            title="Search"
            color= {Colors.main.text}
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
        borderColor: Colors.main.text,
        borderWidth: 1,
        backgroundColor:Colors.main.secondBackground,
        width:'70%',
        borderRadius:10,
        color:Colors.main.text,
        marginRight:10,
        paddingHorizontal:10
      },
      searchSubmitButton: {
        borderRadius:10,
        borderColor: Colors.main.text,
        height: 40,
      }
});
