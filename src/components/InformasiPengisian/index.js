import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_BIRU } from '../../utils/constants'

const InformasiPengisian = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Formulir absensi dan pendataan kesehatan mahasiswa tersedia mulai pukul 04.30 - 09.00 WIPA untuk hari ini.
            </Text>
        </View>
    )
}

export default InformasiPengisian

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(00, 05, 86, 0.21)',
        marginTop:21,
        borderRadius:5,
        paddingHorizontal:17,
        paddingVertical:7,
    },
    text:{
        color:WARNA_BIRU,
        fontFamily:'Poppins-Bold',
        fontSize:12
    }
})
