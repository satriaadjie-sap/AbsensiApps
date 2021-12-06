import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'
// import { Form_absensi_sudah, Form_absensi_1, Form_absensi_2, Form_absensi_3,
//     Form_absensi_4, Form_absensi_5, Form_absensi_detail } from './Form_routing'

const ButtonSelanjutnya3 = (props) => {
    
    const [nim, setNim] = useState('0320190003')
    const [idForm, setIdForm] = useState('2')

    const [ojt, setOjt] = useState('tes')
    const [ojtAlamat, setOjtAlamat] = useState('tes')
    const [ojtDesc, setOjtDesc] = useState('tes')

    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_4')
    }

    const handleSubmitPress = () => {
        axios
            .post(`${LINK_API}Absensi/CreateAbsensi3?nim=${nim}&idForm=${idForm}
            &ojt=${ojt}&ojtAlamat=${ojtAlamat}&ojtDesc=${ojtDesc}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }
                    // console.log(data);
                    props.navigation.navigate('Form_absensi_4')
                    // navigation.replace('MainAppKry');
                    // nav.navigate('Form_absensi_4');

                    //notif kalo berhasil diubah
                    // alert('Berhasil tambah data ' + fma_id);
                    return;
                }
                else
                {
                    //notif gagal diubah
                    console.log(error);
                    alert('Gagal menambah data!');
                    return;
                }   
            })
            .catch(error => alert(error))
            // .finally(() => setLoading(false));
        };
            
    return (
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={PindahForm}
                onPress={handleSubmitPress}
                // onPress={() => props.navigation.navigate("Form Absensi")}
                // onPress={() => navigation.replace('Absensi4')}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya3

const styles = StyleSheet.create({    
    button:{    
        backgroundColor:WARNA_BIRU_MUDA,
        width:100,
        height:25,
        justifyContent:'center',
        marginLeft:5
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
    keterangan:{
        justifyContent:'center',
        marginLeft:9
    },
    textKeterangan:{
        color:WARNA_HITAM,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
