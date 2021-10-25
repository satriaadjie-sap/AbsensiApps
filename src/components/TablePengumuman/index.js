import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Table, Row,TableWrapper, Cell } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import { CellAksiPengumuman } from '..';
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';

// const TablePengumuman = () => {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

export default class TablePengumuman extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['No', 'Subyek', 'Tanggal Dibuat', 'Aksi'],
        widthArr: [32, 175, 79, 51],
        tableData: []
      }      
    }
    GetPengumuman = () => {
        fetch('http://10.0.2.2:8080/listMspengumuman')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
              tableData:json
            })
        })
    }
    componentDidMount(){
      this.GetPengumuman();
    }
    render() {
      const state = this.state;
      const props = this.props;
      let myRow = this.state.tableData.map((myValue,myIndex)=>{
          return(
            <DataTable.Row key={myIndex} style={styles.row}>
                <DataTable.Cell  style={{flex: 0.3}}>
                  <Text style={styles.textData}>{myIndex+1}</Text>
                </DataTable.Cell>
                <DataTable.Cell  style={{flex: 1.5}}>
                  <Text style={styles.textData} numberOfLines={1}>{myValue.pen_subyek}</Text>
                </DataTable.Cell>
                <DataTable.Cell  style={{flex: 1.5}}>
                  <Text style={styles.textData}>{myValue.pen_created_date}</Text>
                </DataTable.Cell>
                <DataTable.Cell  style={{flex: 0.5}}>
                  <CellAksiPengumuman navigation={props.navigation} pen_id={myValue.pen_id}/>
                </DataTable.Cell>
            </DataTable.Row>
          )
      });
      return (
        <View style={styles.container}>
          <Table style={styles.table}>
            <DataTable.Row style={styles.head}>
                <DataTable.Cell style={{flex: 0.5}}>
                  <Text style={styles.textHead}>{this.state.tableHead[0]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 1.5}}>
                  <Text style={styles.textHead}>{this.state.tableHead[1]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 1.5}}>
                  <Text style={styles.textHead} numberOfLines={1}>{this.state.tableHead[2]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 0.5}}>
                  <Text style={styles.textHead}>{this.state.tableHead[3]}</Text>
                </DataTable.Cell>
            </DataTable.Row>
            {myRow}
          </Table>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    head: { 
        height: 40, 
        backgroundColor: WARNA_UTAMA,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    textHead: { 
        margin: 6,        
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_PUTIH
    },
    textData:{
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_HITAM,               
    },
    row: {         
        flexDirection: 'row',        
        borderBottomWidth:1,
        borderBottomColor:WARNA_SEKUNDER, 
    },
})
