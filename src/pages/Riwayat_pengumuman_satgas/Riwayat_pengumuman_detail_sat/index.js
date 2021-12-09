import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { ButtonTutupPengumuman } from '../../../components'
import { WARNA_HITAM } from '../../../utils/constants'


export default class Riwayat_pengumuman_detail_sat extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
          } 
    }
    GetDetailPengumumanSat = async () => {
        try{
            const pen_id = await AsyncStorage.getItem('pen_id');
                axios
                .get(`${LINK_API}Pengumuman/detailPengumuman?id=${pen_id}`)
                .then( res => {
                        this.setState({
                        data:res.data
                        })
                    })
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
      this.GetDetailPengumumanSat();
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
                                        uri: "https://satgas-covid19.polman.astra.ac.id/Files/IMGTINYMCE/PENGUMUMAN_LLNb2zjkpIoFw31zZLNdWziHcIBJ7wBhYMTXmjV1FEBNzgvJZNbQSzGQMo1=01h=.jpg",
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
