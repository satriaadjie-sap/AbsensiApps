// import React from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, createRef, useEffect} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'

const ButtonSelanjutnya1 = (props) => {

    const [step, setStep] = useState('Step 1')
    const [nim, setNim] = useState('0320190003')
    const [tinggal, setTinggal] = useState('Jakarta')
    const [posisi, setPosisi] = useState('Bandung')
    const [astra, setAstra] = useState('y')
    const [astraDesc, setAstraDesc] = useState('tes')
    const [noHP, setNohp] = useState('0821764723')
    const [profesi, setProfesi] = useState('tes')
    const [kendaraan, setKendaraan] = useState('tes')
    const [kendaraanDesc, setKendaraanDesc] = useState('tes')
    const [rs, setRS] = useState('tes')
    const [rsDesc, setRSDesc] = useState('tes')

    // const PindahForm = () => {
    //     props.navigation.navigate('Form_absensi_2')
    // }

    const handleSubmitPress = () => {
        axios
            .post(`${LINK_API}Absensi/CreateAbsensi?nim=${nim}&tempatTinggal=${tinggal}
            &posisi=${posisi}&astra=${astra}&astraDesc=${astraDesc}&noHp=${noHP}&profesi=${profesi}
            &kendaraan=${kendaraan}&kendaraanDesc=${kendaraanDesc}&RS=${rs}&RSDesc=${rsDesc}`)
            .then((res) => {
                
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }
                    // console.log(data);
                    // navigation.replace('Absensi4');
                    // navigation.navigate('Absensi4');
                    props.navigation.navigate('Form_absensi_2', {
                        paramKey: fma_id,
                      })

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
            .catch(error => alert(''))
            .finally(() => setLoading(false));
            };
            
    return (
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={handleSubmitPress}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya1

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
