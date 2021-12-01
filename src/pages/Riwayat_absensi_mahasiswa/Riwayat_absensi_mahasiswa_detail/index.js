import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import axios, { Axios } from 'axios'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { ButtonKembali, Form_1, Form_2, Form_3, Form_4 } from '../../../components'
import { WARNA_HITAM, LINK_API, WARNA_PUTIH , WARNA_BG_FORM, WARNA_KUNING, WARNA_SEKUNDER} from '../../../utils/constants'
import RowPertanyaan from '../../../components/components_abs4/RowPertanyaan'


export default class Riwayat_absensi_mahasiswa_detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
          } 
    }

    GetDetailAbsensiMahasiswa = async () => {
        try{
            const fma_id = await AsyncStorage.getItem('fma_id');
                axios
                .get(`${LINK_API}Absensi/GetDetailAbsensiMahasiswa?fma_id=${fma_id}`)
                .then( res => {
                        this.setState({
                        data:res.data
                        })
                    })
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
      this.GetDetailAbsensiMahasiswa();
    }

    render(){
        const state = this.state;
        return (
            <View>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>  
                        <Form_1/>
                        <Form_2/>
                        <Form_3/>
                        <Form_4/>
                        <View style={styles.button}>
                            <ButtonKembali/>
                        </View>
                    </View>
                </ScrollView>
            </View>

            // {/* // <View style={styles.container}>
                // <View style={ styles.page }>            
                    // <ScrollView style={styles.container}>
                    //     <View style={styles.containerC}> */}
                            // {/* <View style={styles.containerQuestion}>
                                // <Text style={styles.textHeader}>
                                // Nomor Kontak Lain yang Bisa Dihubungi 
                                //     <Text style={styles.Mandatory}> *</Text>
                                // </Text>
                                // <TextInput 
                                //         style={styles.textInput}                    
                                //     />
                            // </View> */}
                            
                    //         {/* Alamat tinggal */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Tinggal bersama siapa dan dimana Anda saat ini?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_alamat_tinggal}
                    //             </Text>
                    //         </View>

                    //         {/* Posisi tinggal */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Dimana posisi Anda saat ini?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_alamat_posisi}
                    //             </Text>
                    //         </View>

                    //         {/* Fam Astra */}
                    //             <View styles={styles.containerInfo}>
                    //                 <Text style={styles.textHeader}>
                    //                     Apakah Anda tinggal di kos/kontrakan bersama rekan mahasiswa/karyawan Polman Astra lain?
                    //                 </Text>
                    //                 <Text style={styles.textBody}>
                    //                     {state.data.fam_is_astra}
                    //                 </Text>
                    //             </View>

                    //             <View styles={styles.containerInfo}>
                    //                 <Text style={styles.textHeader}>
                    //                     Informasikan nama dan program studi/departemennya!
                    //                 </Text>
                    //                 <Text style={styles.textBody}>
                    //                     {state.data.fam_is_astra_desc}
                    //                 </Text>
                    //             </View>
                            
                    //         {/* Kontak lain */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Nomor kontak lain yang bisa dihibungi
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_no_hp_lain}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah keluarga Anda ada yang berprofesi sebagai berikut?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_profesi_family}
                    //             </Text>
                    //         </View>

                    //         {/* Kendaraan */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah Anda menggunakan kendaraan umum saat ke kampus?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_kendaraan_umum}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Sebutkan jenis kendaraan umum yang Anda gunakan!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_kendaraan_umum_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Rumah sakit */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah dalam 7 hari terakhir Anda mengunjungi rumah sakit?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_rumah_sakit}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Untuk keperluan apa Anda ke rumah sakit/fasilitas kesehatan lainnya?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_rumah_sakit_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Kesehatan self */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Bagaimana kondisi kesehatan Anda saat ini?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_sehat_self}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Informasikan perihal penyakit atau gejala yang dialami!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_sehat_self_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Kesehatan family */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_sehat_family}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Jelaskan data diri keluarga dan gejala yang dialami dan informasikan sejak kapan menderitanya!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_sehat_family_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Covid self */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif)
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_covid_self}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_covid_self_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Covid arround */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah di lingkungan Anda (termasuk Anda), ada warga yang terpapar virus Corona/COVID-19?(ODP/PDP/Suspect/Positif, terbatas dalam RT/Blok dan ada data resmi dari pengurus RT/penanggung jawab setempat)
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_covid_arround}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_covid_arround_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Vaksin */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah Anda telah menerima vaksin COVID-19?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_vaksin_menerima}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Berapa kali Anda telah menerima suntikan vaksin COVID-19?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_vaksin_suntikan}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apa nama vaksin yang Anda terima?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_vaksin_nama}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah Anda telah menerima sertifikat vaksin?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_vaksin_sertifikat}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah Anda menderita penyakit di bawah ini?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_riwayat_penyakit}
                    //             </Text>
                    //         </View>

                    //         {/* OJT */}
                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Apakah saat ini Anda sedang OJT/Magang/Bekerja?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_ojt}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Dimanakah posisi Anda saat OJT/Magang/Bekerja?
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_ojt_alamat}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Tuliskan nama perusahaan dan cabang/site nya!
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_ojt_desc}
                    //             </Text>
                    //         </View>

                    //         <View styles={styles.containerInfo}>
                    //             <Text style={styles.textHeader}>
                    //                 Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA)
                    //             </Text>
                    //             <Text style={styles.textBody}>
                    //                 {state.data.fam_is_ojt_desc}
                    //             </Text>
                    //         </View>

                    //         {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
                    //         <RowPertanyaan no={1} pertanyaan={"Apakah pernah keluar rumah/tempat umum (pasar, fasyankes, kerumunan orang, dan lain-lain)?"}/>
                    //         <RowPertanyaan no={2} pertanyaan={"Apakah pernah menggunakan transportasi umum?"}/>
                    //         <RowPertanyaan no={3} pertanyaan={"Apakah pernah melakukan perjalanan ke luar kota/internasional? (wilayah yang terjangkit/zona merah)"}/>
                    //         <RowPertanyaan no={4} pertanyaan={"Apakah anda mengikuti kegiatan yang melibatkan orang banyak?"}/>
                    //         <RowPertanyaan no={5} pertanyaan={"Apakah memiliki riwayat kontak erat dengan orang yang dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah)?"}/>
                    //         <RowPertanyaan no={6} pertanyaan={"Apakah pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?"}/>
                    //         <RowPertanyaan no={7} pertanyaan={"Apakah terdapat riwayat berkunjung dan/atau dikunjungi tamu (kerabat/keluarga berbeda rumah) dalam jangka waktu 14 hari terakhir?"}/>

                    //         <View style={styles.button}>
                    //             <ButtonTutupPengumuman/>
                    //         </View>
                    //     </View>
                    // </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        color:WARNA_HITAM
        // paddingHorizontal:16
    },
    containerScrollView:{
        paddingHorizontal:13
    },
    containerInfo:{
        marginBottom:10,
    },
    containerImage:{        
        marginBottom:15,
    },
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    image:{        
        width: '100%',
        height : Dimensions.get('window').height
    },
    button:{
        marginBottom:10,
        alignItems:'flex-end'
    },
    containerForm:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:3,
        paddingHorizontal:8
    }
})
