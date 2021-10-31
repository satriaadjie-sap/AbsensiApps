import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import React, {useState, createRef, useEffect} from 'react'
import { StyleSheet,Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconLogin, IconLogoPolman } from '../../assets/icons'
import {ButtonLogin} from '../../components'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler'


const Login = ({navigation}) => {    
    const [userNIM, setUserNIM] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userNIM) {
            alert('NIM/NPK masih kosong');
        return;
        }
        if (!userPassword) {
            alert('Password masih kosong');
        return;
        }
        setLoading(true);
    
        // try{
            axios.get(`http://10.0.2.2/PoliteknikManufakturAstra_API/efcc359990d14328fda74beb65088ef9660ca17e/Login/CobaLogin?username=${userNIM}`)
            // axios.get(`${LINK_API}Login/CobaLogin?username=${username}`)
            .then(res => {
                if(res.data.result === "TRUE") {
                    navigation.replace('MainApp');
                }
                else
                {
                    // alert('Nama Pengguna atau Kata Sandi salah!');
                }
            })
        // }
        // catch(error){
        //     // alert('Nama Pengguna atau Kata Sandi salah!');
        //     console.log(error)
        // }
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
                        onChangeText={(userNIM) =>
                            setUserNIM(userNIM)
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
