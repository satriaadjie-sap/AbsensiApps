import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { IconDetail,  IconUbah} from '../../../assets/icons'

const CellAksiUbahPengumumanSatgas = (props) => {
    const detailHandle = () => {
        AsyncStorage.setItem('pen_id',props.pen_id+"")
        props.navigation.navigate('Riwayat_pengumuman_detail_sat')
    }
    return (
        <View style={styles.container}>                        
            <TouchableOpacity 
                onPress={detailHandle}
            >
                <View style={styles.detail}>
                    <IconUbah/>                    
                </View>
            </TouchableOpacity>   
        </View>
    )
}

export default CellAksiUbahPengumumanSatgas

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        
    },
    row:{        
        alignSelf:'center',
        borderWidth:1
    },
    printer:{
        marginRight:2,        
    },
     detail:{
        marginLeft:2
    }
})
