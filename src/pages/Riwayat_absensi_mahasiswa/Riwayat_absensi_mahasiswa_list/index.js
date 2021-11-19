import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TablePengisianMahasiswa } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Riwayat_absensi_mahasiswa_list = ({navigation}) => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <TablePengisianMahasiswa navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

// export default Riwayat_absensi_mahasiswa_list
export default Riwayat_absensi_mahasiswa_list

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    containerScroll:{
        height:300,
        marginHorizontal:13
    },
    container:{        
    },
})
