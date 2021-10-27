import React, {useState, createRef} from 'react'
import { StyleSheet,Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconLogin, IconLogoPolman } from '../../assets/icons'
import {ButtonLogin} from '../../components'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'


const Login = ({navigation}) => {    
    const [userNIM, setUserNIM] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userNIM) {
        alert('Masukkan NIM dengan benar');
        return;
        }
        if (!userPassword) {
        alert('Masukkan Password dengan benar');
        return;
        }
        setLoading(true);
        let dataToSend = {nim: userNIM, password: userPassword};
        //let dataToSend = {idEmployee: userNIM, namaEmployee: userPassword};
        let formBody = [];
        for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://10.0.2.2:8080/login', {
        method: 'POST',
        body: formBody,
        headers: {
            //Header Defination
            'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status === 'success') {
            AsyncStorage.setItem('user_nim', responseJson.nim);
            console.log(responseJson);
            navigation.replace('MainApp');
            } else {
            setErrortext(responseJson.msg);
            console.log('Please check your email id or password');
            }
        })
        .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        });
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
                                    onPress={() => navigation.replace("MainApp")}
                                    // onPress={handleSubmitPress}
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
