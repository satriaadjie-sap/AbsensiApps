import React, { Component, useState, createRef, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar,  AsyncStorage  } from 'react-native'
import AutoScrolling from 'react-native-auto-scrolling'
import { IconNotifikasi } from '../../assets/icons'
import { WARNA_BG_NAVBAR, WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'

const HeaderInformation = () => {
    
    const [user, setUser] = useState('');
    const [role, setRole] = useState('');

        AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            // user.push(resultParsed.name);
            // role.push(resultParsed.role);
            setUser(resultParsed.name);
            setRole(resultParsed.role);
            
                // if (role == "ROL23"){
                //     setRole("MAHASISWA")
                // }
                // else
                // {
                //     setRole("KARYAWAN")
                // }
            }
        });

    return (
        <View style={styles.container}>
            {/* Nama last login */}
            <View style={styles.containerUser}>
                <Text numberOfLines={1} style={styles.textNama}>Nama</Text>
                <Text numberOfLines={1} style={styles.textNama}>{user} ({role})</Text>
                {/* <Text style={styles.lastLogin}>{lastLogin}</Text> */}
            </View>
        </View>
    )
}

export default HeaderInformation

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_UTAMA,
        marginHorizontal: -10,
        borderRadius:5,
        padding:8
    },
    containerUser:{
        paddingHorizontal:8,
    },
    textNama:{
        fontSize:14,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },
    lastLogin:{
        fontSize:8,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },
    notification:{
        marginTop:13,
        marginBottom:5,
        borderRadius:3,
        backgroundColor:WARNA_BG_NAVBAR,
        height:23,        
        flexDirection:'row',
        alignItems:'center'
    },
    notification_icon:{
        marginVertical:3,
        marginHorizontal:2
    },
    scroll:{
        marginLeft:4,
        marginRight:25,
        marginVertical:5
    },
    notification_text:{        
        fontSize:9,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },    
})
