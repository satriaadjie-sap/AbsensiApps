import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import React, {useState, createRef, useEffect} from 'react'
import { StyleSheet,Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconLogin, IconLogoPolman } from '../../assets/icons'
import {ButtonLogin} from '../../components'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA, LINK_API } from '../../utils/constants'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler'


const Login = ({navigation}) => {    
    const [username, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!username) {
            alert('Username wajib diisi');
        return;
        }
        if (!userPassword) {
            alert('Password wajib diisi');
        return;
        }

        setLoading(true);
    
        axios
            .get(`${LINK_API}Login/LoginUser?username=${username}`)
            .then(res => {
                if(res.data.result === "TRUE") {
                    navigation.replace('MainApp');
                }
                else
                {
                    alert('Username atau Kata Sandi salah!');
                    return;
                }
                
            })
            .catch(error => alert('Username atau Kata Sandi salah!', error))
            .finally(() => setLoading(false));
            };

    return (
        <View style={ styles.page }>            
            <View style={styles.container}>
                <View style={styles.logo}>
                    <IconLogoPolman/>
                </View>

                <View style={styles.viewInput}>
                    <TextInput
                        placeholder="Nama Akun SIA"
                        style={styles.textInput}
                        onChangeText={(username) =>
                            setUsername(username)
                          }
                          keyboardType="number-pad"
                          returnKeyType="next"
                          onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                          }
                          blurOnSubmit={false}
                        />
                    <TextInput
                        placeholder="Kata Sandi"
                        style={styles.textInput}
                        onChangeText={(userPassword) =>
                            setUserPassword(userPassword)
                          }
                        ref={passwordInputRef}
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                        />
                    <View style={styles.buttonContainer}>                    
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.touch}>
                                <Text style={styles.text}
                                    // onPress={() => navigation.replace("MainApp")}
                                    onPress={handleSubmitPress}
                                >
                                    LOGIN
                                </Text>
                                <IconLogin/>
                            </TouchableOpacity>            
                        </View>
                    </View>
                </View>                
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        borderWidth:1,
        borderRadius:5,
        borderColor:WARNA_SEKUNDER,
        paddingHorizontal:9,        
        width:250
    },
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
    
    button:{
        backgroundColor:WARNA_UTAMA,        
        width:115,
        height:36,
        borderRadius:20,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text:{
        color:WARNA_PUTIH,
        paddingRight:10
    },
    touch:{
        flexDirection:'row',        
        alignItems:'center'        
    }
})
