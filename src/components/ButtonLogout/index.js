import React, {FC, ReactElement} from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { IconLogin } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native'

    const handleSubmitPress = () => {
        // Mengahpus data dari local storage
        AsyncStorage.removeItem('user');
        navigation.replace("Login")    
    }

export const ButtonLogout = () => {
    // const navigation = useNavigation();

    // const doUserLogout=()=>{
    //     AsyncStorage.clear()
    //     this.this.props.navigation.navigate("Login")
    // }

    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={handleSubmitPress}
                style={styles.touch}>
                
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>            
        </View>
    )
}

// export default ButtonLogout

const styles = StyleSheet.create({
    button:{
        backgroundColor:WARNA_PUTIH,        
        width:115,
        height:36,
        borderRadius:20,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text:{
        color:WARNA_UTAMA,
        paddingRight:10
    },
    touch:{
        flexDirection:'row',        
        alignItems:'center'        
    }
})
