import  React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableOpacity,Text } from 'react-native';
import { Table, Row, Rows,TableWrapper, Cell } from 'react-native-table-component';

import {StringCoordinates} from '../../interfaces/Coordinates';
import Requests from '../../utils/requests/requests';
import StatisticData from '../../interfaces/StatisticData';
import convertStatisticToTable from '../../utils/convertStatisticToTable';
import Colors from '../../constants/Colors';
import ModalWindow from './Modal';


interface State{
  statisticData:[string[]],
  isModalVisible:boolean,
  modalData:string[]
}

interface Props {
  isTableUpToDate:boolean,
  changeTableUpToDateStatus:any
}

export default class StatisticTable extends React.Component<Props, State> {
  request = new Requests();
  widthArray = new Array(3).fill(Dimensions.get('window').width/3 - 1);
  tableHead = ['Place', 'Coordinates', 'Date'];

  state = {
    statisticData:[],
    isModalVisible:false,
    modalData:[]
  }

  setStatisticData = async():Promise<any> => {
    const statisticData:Array<StatisticData> = await this.request.getStatistic();
    this.setState({
      statisticData: convertStatisticToTable(statisticData)
    });
  }

  setModalData = (index:number):void => {
    const data:[] = this.state.statisticData[index];
    this.setState({
      modalData:data
    });
  }

  updateData = async(): Promise<any> => {
    try{
      if(!this.props.isTableUpToDate) {
        await this.setStatisticData();
        this.props.changeTableUpToDateStatus(true);
      }
      return null;
    }catch {
      return null;
    }
  }

  changeModalVisibility = ():void => {
    this.setState((prevState:State) => {
      return {
        isModalVisible:!prevState.isModalVisible
      }
    });
  }

  componentDidMount = async(): Promise<any> => {
    this.updateInterval = setInterval(async():Promise<any> => await this.updateData(),1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.updateInterval);
  }

  render() {
    const element = (data:string, index:number) => {

        <View style={styles.item}>
          <Text style={styles.text}>{data}</Text>
        </View>

    }

    return (
      <View style = {styles.container}>
        <ScrollView horizontal={true} >
         <ModalWindow
            isModalVisible = {this.state.isModalVisible}
            changeModalVisibility = {this.changeModalVisibility}
            modalData = {this.state.modalData}
          />
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: Colors.main.borderColor}}>
                <Row data={this.tableHead} style={styles.header} textStyle={styles.text} widthArr={this.widthArray}/>
              </Table>
             <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: Colors.main.borderColor}}>
                  {
                    this.state.statisticData.map((rowData:string[], index:number) => (
                      <TableWrapper key = {index} style = {styles.row}>
                        {
                          rowData.map((cellData:string, cellIndex:number) => (
                          <TouchableOpacity onPress={() => {
                            this.setModalData(index);
                            this.changeModalVisibility();
                          }}>
                            <View style={styles.item}>
                              <Text style={styles.text}>{cellData}</Text>
                            </View>
                          </TouchableOpacity>
                          )
                          )
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  },
  header: {
    height: 40,
    backgroundColor: '#D0523E',
    borderBottomWidth:1,
    borderBottomColor:Colors.main.secondBackground
  },
  text: {
    margin: 6,
    fontSize:12,
    color:Colors.main.text
  },
  dataWrapper: {
    marginTop: -1
  },
  row: {
    height: 50,
    backgroundColor: Colors.main.background,
    flexDirection:'row'
  },
  secondRowStyle: {
    backgroundColor: Colors.main.secondBackground
  },
  item:{
    height: 50,
    width:Dimensions.get('window').width/3-1,
    borderRightWidth:1,
    borderRightColor:Colors.main.secondBackground,
    borderBottomWidth:1,
    borderBottomColor:Colors.main.secondBackground
  }
});
