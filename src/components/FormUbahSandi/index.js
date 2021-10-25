import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonSimpanSandi } from '..'
import { WARNA_HITAM, WARNA_MERAH, WARNA_SEKUNDER } from '../../utils/constants'

const FormUbahSandi = () => {
    const [password, setPassword] = React.useState("")
    return (
        <View style={styles.container}>
            <View style={styles.penting}>
                <Text style={styles.textPenting}>
                PENTING! {"\n"}
                Perubahan kata sandi akan berpengaruh pada seluruh aplikasi, akses hotspot, dan login PC/laptop Anda!
                </Text>
            </View> 
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Kata Sandi Lama <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="*******"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Kata Sandi Baru <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput
                    onChangeText={password => setPassword(password)}
                    style={styles.textInput}                    
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Konfirmasi Kata Sandi <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput 
                    style={styles.textInput}                    
                />
            </View>
            <View>
                <ButtonSimpanSandi baru={password}/>
            </View>
        </View>
    )
}

// class FormUbahSandi extends Component {        
//     render(){
//         const [password, setPassword] = useState("")
//         return (
//             <View style={styles.container}>
//                 <View style={styles.penting}>
//                     <Text style={styles.textPenting}>
//                     PENTING! {"\n"}
//                     Perubahan kata sandi akan berpengaruh pada seluruh aplikasi, akses hotspot, dan login PC/laptop Anda!
//                     </Text>
//                 </View> 
//                 <View style={styles.formInput}>
//                     <Text style={styles.formInfo}>
//                         Kata Sandi Lama <Text style={{color:WARNA_MERAH}}>*</Text>
//                     </Text>
//                     <TextInput 
//                         value={password}
//                         style={styles.textInput}
//                         placeholder="*******"
//                     />
//                 </View>
//                 <View style={styles.formInput}>
//                     <Text style={styles.formInfo}>
//                         Kata Sandi Baru <Text style={{color:WARNA_MERAH}}>*</Text>
//                     </Text>
//                     <TextInput                        
//                         style={styles.textInput}                    
//                     />
//                 </View>
//                 <View style={styles.formInput}>
//                     <Text style={styles.formInfo}>
//                         Konfirmasi Kata Sandi <Text style={{color:WARNA_MERAH}}>*</Text>
//                     </Text>
//                     <TextInput 
//                         style={styles.textInput}                    
//                     />
//                 </View>
//                 <View>
//                     <ButtonSimpanSandi baru={password}/>
//                 </View>
//             </View>
//         )
//     }    
// }

export default FormUbahSandi

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:5,
        width:254,
        padding:9,
    },
    penting:{
        backgroundColor: 'rgba(86, 00, 00, 0.20)',        
        borderRadius:5
    },
    textPenting:{
        color:WARNA_MERAH,
        marginHorizontal:12,
        marginVertical:7,
        fontFamily:"Poppins-Light",
        fontSize:9
    },
    formInput:{
        marginVertical:7
    },
    formInfo:{
        color:WARNA_HITAM,
        fontFamily:"Poppins-Bold",
        fontSize:9
    },
    textInput:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        backgroundColor:'rgba(00, 00, 00, 0.20)',        
        height:27,
        paddingVertical:-15,
        fontFamily:"Poppins-Light",
        fontSize:9,
    
        textAlignVertical:'center'
    },
})
