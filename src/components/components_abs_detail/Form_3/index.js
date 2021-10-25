import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

class Form_3 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let equalizeData = this.props.data.map((myValue, index) => {
            data1 = myValue.fam_is_ojt.split(",");
            return(
            <View key={index}>
                <HeaderFormAbsesni text={"3. Data OJT/Magang"}/>
                <View style={styles.container}>
    
                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah saat ini Anda sedang OJT/Magang/Bekerja?"
                            //answer="Tidak"
                            answer={data1[0]}
                        />
    
                        <TemplateInfo
                            question="Dimanakah posisi Anda saat OJT/Magang/Bekerja?"
                            //answer="---"
                            answer={data1[1]}
                        />
                        
                        <TemplateInfo
                            question="Tuliskan nama perusahaan dan cabang/site nya!"
                            //answer="---"
                            answer={myValue.fam_is_ojt_alamat}
                        />
    
                        <TemplateInfo
                            question="Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA)"
                            //answer="---"
                            answer={myValue.fam_is_ojt_desc}
                        />
                    </View>                
                </View>
            </View>
            )
            
        })
        return (
            <View>
                {equalizeData}
            </View>
        )
    }
    
}

export default Form_3

const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },    
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})
