import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity  } from 'react-native'
import { WARNA_HIJAU_MUDA, WARNA_PUTIH } from '../../utils/constants'

const ButtonIsiFormulirKry = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => props.navigation.navigate("Form Absensi Karyawan")}>
                <Text style={styles.text}>ISI FORMULIR</Text>                
            </TouchableOpacity>
        </View>
    )
}

export default ButtonIsiFormulirKry

const styles = StyleSheet.create({
    container:{
         
    },
    button:{
        backgroundColor:WARNA_HIJAU_MUDA,
        marginTop:10,
        width:121,
        height:36,
        borderRadius:3,        
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text:{
        color:WARNA_PUTIH
    }
})
