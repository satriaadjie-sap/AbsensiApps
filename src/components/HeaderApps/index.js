import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { IconLogoPolman } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const HeaderApps = ({navigation}) => {
    return (
        <View style={styles.container}>
            <IconLogoPolman/>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Login')}
            />
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => navigation.replace("Login")}
                //  onPress={() => Alert.alert('lgout')}
                >
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderApps

const styles = StyleSheet.create({
    container:{
        height:55,
        borderBottomColor:WARNA_SEKUNDER,
        borderBottomWidth:1,        
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:-15,
        marginTop:-15,        
        marginBottom:4,
        justifyContent:'space-between'
    },
    touchable:{                
    },
    text:{
        fontFamily:"Poppins-Regular",
        fontSize:12,
        color:WARNA_UTAMA,
        textAlign:'right',
        paddingRight:13,
    }
})
