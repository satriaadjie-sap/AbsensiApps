import React, { Component, useState, createRef, useEffect } from 'react'
import { StyleSheet, Text,  AsyncStorage,View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Beranda, Beranda_karyawan, Beranda_satgas, Form_absensi, Riwayat_absensi, Form_absensi_Kry, 
    Riwayat_absensi_mahasiswa, Riwayat_pengumuman, Riwayat_pengumuman_karyawan, 
    Riwayat_pengumuman_satgas, Pengumuman, Laporan_satgas, Testing, Ubah_sandi, Login} from '../pages';
import { BottomTabNavigator, HeaderApps, HeaderInformation } from '../components';
import { IconLogoPolman } from '../assets';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../utils/constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {    
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda} />
            {/* <Tab.Screen name="Form Absensi" component={Riwayat_absensi_mahasiswa} /> */}
            <Tab.Screen name="Form Absensi" component={Form_absensi} />
            <Tab.Screen name="Pengumuman" component={Riwayat_pengumuman} />
            <Tab.Screen name="Ubah Sandi" component={Ubah_sandi} />
            {/* <Tab.Screen name="LogOut" component={Logout} /> */}
            {/* <Tab.Screen name="Login" component={Login} /> */}
        </Tab.Navigator>        
    )
}

const MainAppKry = () => {    
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda_karyawan} />
            {/* <Tab.Screen name="Form Absensi" component={Riwayat_absensi} /> */}
            <Tab.Screen name="Form Absensi" component={Form_absensi_Kry} />
            <Tab.Screen name="Pengumuman" component={Riwayat_pengumuman_karyawan} />
            <Tab.Screen name="Ubah Sandi" component={Ubah_sandi} />
        </Tab.Navigator>        
    )
}

const MainAppSatgas = () => {    
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda_satgas} />
            <Tab.Screen name="Laporan" component={Laporan_satgas} />
            <Tab.Screen name="Pengumuman" component={Riwayat_pengumuman_satgas} />
        </Tab.Navigator>
    )
}

function Header() {
    
    const [user, setUser] = useState('');
    const [role, setRole] = useState('');

        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                // user.push(resultParsed.name);
                // role.push(resultParsed.role);
                setUser(resultParsed.name);

                if (resultParsed.role === "ROL23"){
                    setRole("MAHASISWA");
                } else if (resultParsed.role !== "ROL23" && resultParsed.isSatgas === "1"){
                    setRole("SATGAS-COVID19");
                } else {
                    setRole("KARYAWAN");
                }
            
            }
        });

    // if (role == "ROL23"){
    //     setRole("MAHASISWA")
    // }
    // else if (role == "ROL01"){
    //     setRole("KARYAWAN")
    // }

            // return (   
            // const Absensi4 = () => {    
            //     return (
            //         <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            //             <Tab.Screen name="Beranda" component={Beranda} />
            //             <Tab.Screen name="Form Absensi" component={Form_absensi_4} />
            //             <Tab.Screen name="Pengumuman" component={Riwayat_pengumuman} />
            //             <Tab.Screen name="Ubah Sandi" component={Ubah_sandi} />
            //             {/* <Tab.Screen name="LogOut" component={Logout} /> */}
            //             {/* <Tab.Screen name="Login" component={Login} /> */}
            //         </Tab.Navigator>        
            //     )
            // }

            //   function Header() {
            //     return (
            //         <View style={styles.containerHeader}>            
            //             <HeaderApps/>
            //             <HeaderInformation 
            //                     user="SATRIA ADJIE PRAYOGA"
            //                     role="MAHASISWA"
            //                     lastLogin="Login terakhir: 7 Mei 2021, 14:06 WIB"
            //                     notification="Anda sudah mengisi formulir absensi dan pendataan kesehatan mahasiswa. Terima kasih. "
            //                     />            
            //         </View>   
            //     );
            //   }

    return (
        <View style={styles.containerHeader}>            
            <HeaderApps/>
            <HeaderInformation 
                    user={user}
                    role={role}
                    // user="{user}"
                    // role="{role}"
                    //lastLogin="Login terakhir: 7 Mei 2021, 14:06 WIB"
                    //notification="Anda sudah mengisi formulir absensi dan pendataan kesehatan mahasiswa. Terima kasih. "

                    />            
        </View>   
    );
  }

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login" 
                component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="MainApp" 
                component={MainApp}
                options={
                    { headerTitle: props => <Header {... props}/>,headerStyle:{height:160}}
                }
            />
            <Stack.Screen
                name="MainAppKry" 
                component={MainAppKry}
                options={
                    { headerTitle: props => <Header {... props}/>,headerStyle:{height:160}}
                }
            />
            <Stack.Screen
                name="MainAppSatgas" 
                component={MainAppSatgas}
                options={
                    { headerTitle: props => <Header {... props}/>,headerStyle:{height:160}}
                }
            />
            {/* <Stack.Screen 
                name="Absensi4" 
                component={Absensi4}
                options={
                    { headerTitle: props => <Header {... props}/>,headerStyle:{height:160}}
                }
            /> */}
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    containerHeader:{       

    },
    
})