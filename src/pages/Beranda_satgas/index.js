import React, { Component, useState, createRef, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { Beranda_satgas, HeaderApps } from '../../components'
import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
import { WARNA_PUTIH, WARNA_UTAMA, WARNA_SEKUNDER } from '../../utils/constants'

const Beranda_satgas = ({hasAbsen=false, navigation}) => {

   // const navigation = useNavigation();

    AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            usern = resultParsed.uname;
        }
    });

    // const loginToKaryawan = () => {
    //     navigation.replace('MainAppKry');
    //     return;
    // };

    // const loginToSatgas = () => {
    //     navigation.replace('MainAppSatgas');
    //     return;
    // };

    return (
        <View style={ styles.page }>
            <View style={styles.container}>
                {/* <View style={styles.containerbut}>
                    <TouchableOpacity style={styles.button} onPress={loginToKaryawan}>
                        <Text style={styles.text}>Login sebagai Karyawan</Text>
                    </TouchableOpacity>            
                </View>
                <View style={styles.containerbut}>
                    <TouchableOpacity style={styles.button} onPress={loginToSatgas}>
                        <Text style={styles.text}>Login sebagai Satgas</Text>
                    </TouchableOpacity>            
                </View> */}
                <View style={styles.buttonContainer}>                    
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.touch}>
                                <Text style={styles.text}
                                    onPress={() => navigation.replace("MainAppKry")}>
                                    Login Sebagai Karyawan
                                </Text>
                            </TouchableOpacity>            
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>                    
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.touch}>
                                <Text style={styles.text}
                                    onPress={() => navigation.replace("MainAppSatgas")}>
                                    Login Sebagai Satgas
                                </Text>
                            </TouchableOpacity>            
                        </View>
                    </View>
            </View>
        </View>
    )
}

export default Beranda_satgas

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    button:{
        backgroundColor:WARNA_UTAMA,
        width:79,
        alignItems:'center',
        paddingVertical:2
    },
    containerbut:{        
        alignItems:'flex-end'       
    },
    container:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:5,
        width:254,
        padding:9,
    },
    text:{
        color:WARNA_PUTIH,
        fontSize:12,
        fontFamily:"Poppins-Light"
    },
    // page:{ 
    //     flex: 1, 
    //     backgroundColor:WARNA_PUTIH,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    // container:{
    //     borderWidth:1,
    //     borderRadius:5,
    //     borderColor:WARNA_SEKUNDER,
    //     paddingHorizontal:9,        
    //     width:250
    // },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:14
    },
    viewInput:{
        marginVertical:20
    },
    textInput:{                
        backgroundColor:WARNA_SEKUNDER,        
        paddingLeft:10,
        textAlignVertical:'center',
        marginVertical:5,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    buttonContainer:{        
        marginTop:14,
        alignItems:'center'
    },
    
    // button:{
    //     backgroundColor:WARNA_UTAMA,        
    //     width:115,
    //     height:36,
    //     borderRadius:20,
    //     justifyContent: 'center', 
    //     alignItems: 'center'
    // },
    // text:{
    //     color:WARNA_PUTIH,
    //     paddingRight:10
    // },
    touch:{
        flexDirection:'row',        
        alignItems:'center'        
    }
})
