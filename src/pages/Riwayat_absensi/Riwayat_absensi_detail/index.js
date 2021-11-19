import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { ButtonTutupPengumuman } from '../../../components'
import { WARNA_HITAM } from '../../../utils/constants'


export default class Riwayat_absensi_detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
          } 
    }
    GetDetailPengumuman = async () => {
        try{
            const pen_id = await AsyncStorage.getItem('pen_id');
            fetch('http://10.0.2.2:8080/get-pengumuman?id='+pen_id)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    data:json
                })
            })
        }catch(error){
            console.log(error);
        }
        
    }
    componentDidMount(){
      this.GetDetailAbsensi();
    }
    render(){
        const state = this.state;
        return (
            <View style={ styles.page }>            
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.container}>
                        <View styles={styles.containerInfo}>
                            <Text style={styles.textHeader}>
                                Subyek Pengumuman
                            </Text>
                            <Text style={styles.textBody}>
                                {state.data.pen_subyek}
                            </Text>
                        </View>
            
                        <View>
                            <Text style={styles.textHeader}>
                            Isi Pengumuman
                            </Text>
                            <View style={styles.containerImage}>
                                <Image
                                    source={{
                                        uri : state.data.pen_isi,
                                        // uri: "https://satgas-covid19.polman.astra.ac.id/Files/IMGTINYMCE/PENGUMUMAN_LLNb2zjkpIoFw31zZLNdWziHcIBJ7wBhYMTXmjV1FEBNzgvJZNbQSzGQMo1=01h=.jpg",
                                        cache: 'only-if-cached'
                                    }}
                                    style={styles.image}
                                    resizeMode="contain"
                                    />
                            </View>                
                        </View>
            
                        <View style={styles.button}>
                            <ButtonTutupPengumuman/>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16
    },
    containerInfo:{
        marginBottom:10,
    },
    containerImage:{        
        marginBottom:15,
    },
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    image:{        
        width: '100%',
        height : Dimensions.get('window').height
    },
    button:{
        marginBottom:10,
        alignItems:'flex-end'
    }
})
