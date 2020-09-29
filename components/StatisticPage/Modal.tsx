import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Colors from '../../constants/Colors';

interface Props{
    isModalVisible:boolean,
    changeModalVisibility:Function,
    modalData:string[]
}

export default class ModalWindow extends React.Component<Props, {}> {
    render(){
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isModalVisible}
                style = {styles.modal}
             >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{...styles.modalText, fontWeight:'bold'}}>Place:</Text>
                        <Text style={styles.modalText}>{this.props.modalData[0]}</Text>
                        <Text style={{...styles.modalText, fontWeight:'bold'}}>Coordinates:</Text>
                        <Text style={styles.modalText}>{this.props.modalData[1]}</Text>
                        <Text style={{...styles.modalText, fontWeight:'bold'}}>Date:</Text>
                        <Text style={styles.modalText}>{this.props.modalData[2]}</Text>
                        <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.props.changeModalVisibility();
                        }}
                        >
                        <Text style={styles.textStyle}>Close Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width:250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#D0523E",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
