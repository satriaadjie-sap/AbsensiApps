import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { CheckboxPenyakit, InformasiDataDiri } from '../..'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

class Form_1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        const state = this.state;
        const props = this.props;
        let equalizeData = this.props.data.map((myValue, index) => {
            //============== DATA 1
            var info1 = myValue.fam_alamat_tinggal.split(",,,");
            
            return(
                <View key={index}>
                    <View style={styles.info}>
                        <TemplateInfo
                            question="Tinggal bersama siapa dan dimana Anda saat ini?"
                            //answer="[Keluarga]  RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                            answer={"["+info1[0]+"]  "+info1[1].split("###").join(", ")}
                        />
                    </View>

                    <View style={styles.info}>
                        <TemplateInfo
                            question="Dimana posisi Anda saat ini?"
                            //answer="RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                            answer={myValue.fam_alamat_posisi.split("###").join(", ")}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah Anda tinggal di kos/kontrakan bersama rekan mahasiswa/karyawan Polman Astra lain?"
                            //answer="Tidak"
                            answer={myValue.fam_is_astra}
                        />
                        <TemplateInfo
                            question="Informasikan nama dan program studi/departemennya!"
                            //answer="---"
                            answer={myValue.fam_is_astra_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Nomor Kontak Lain yang Bisa Dihubungi"
                            //answer="Bapak, 087711643355"
                            answer={myValue.fam_no_hp_lain}
                        />
                        <TemplateInfo
                            question="Apakah keluarga Anda ada yang berprofesi sebagai berikut?"
                            //answer="---"
                            answer={myValue.fam_profesi_family == "" ? "---" : myValue.fam_profesi_family}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah Anda menggunakan kendaraan umum saat ke kampus?"
                            //answer="Tidak"
                            answer={!myValue.fam_is_kendaraan_umum ? "---" : myValue.fam_is_kendaraan_umum}
                        />
                        <TemplateInfo
                            question="Sebutkan jenis kendaraan umum yang Anda gunakan!"
                            //answer="---"
                            answer={!myValue.fam_is_kendaraan_umum_desc ? "---" : myValue.fam_is_kendaraan_umum_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah dalam 7 hari terakhir Anda mengunjugi rumah sakit?"
                            //answer="Tidak"
                            answer={!myValue.fam_rumah_sakit ? "---" : myValue.fam_rumah_sakit}
                        />
                        <TemplateInfo
                            question="Untuk keperluan apa anda ke rumah sakit/fasilitas kesehatan lainnya?"
                            //answer="---"
                            answer={!myValue.fam_rumah_sakit_desc ? "---" : myValue.fam_rumah_sakit_desc}
                        />
                    </View>  
                </View>
            )
        });
        return (
            <View>
                <HeaderFormAbsesni text={"1. Data Diri dan Keluarga"}/>
                <View style={styles.container}>
                    <InformasiDataDiri/>
                    {equalizeData}
                </View>            
            </View>
        )
    }
}

export default Form_1
const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },
    info:{
        marginVertical:5
    },
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})
