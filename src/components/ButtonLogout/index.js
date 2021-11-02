import React, {FC, ReactElement} from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { IconLogin } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'
import {useNavigation} from '@react-navigation/native';
import Parse from 'parse/react-native';
import {StackActions} from '@react-navigation/native';

export const ButtonLogout = () => {
    const navigation = useNavigation();

    const doUserLogout = async function(){
        return await Parse.User.logOut()
        .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
                const currentUser = await Parse.User.currentAsync();
                if (currentUser === null) {
                Alert.alert('Success!', 'No user is logged in anymore!');
                }
                // Navigation dispatch calls a navigation action, and popToTop will take
                // the user back to the very first screen of the stack
                navigation.dispatch(StackActions.popToTop());
                return true;
            })
            .catch((error) => {
                Alert.alert('Error!', error.message);
                return false;
            });
        };

    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={
                    () => doUserLogout()}
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
