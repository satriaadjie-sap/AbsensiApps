import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Beranda, Form_absensi, Riwayat_pengumuman, Testing, Ubah_sandi, Login} from '../pages';
import { BottomTabNavigator, HeaderApps, HeaderInformation } from '../components';
import { IconLogoPolman } from '../assets';
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../utils/constants';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {    
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Form Absensi" component={Form_absensi} />
            <Tab.Screen name="Pengumuman" component={Riwayat_pengumuman} />
            <Tab.Screen name="Ubah Sandi" component={Ubah_sandi} />
            {/* <Tab.Screen name="LogOut" component={Logout} /> */}
            {/* <Tab.Screen name="Login" component={Login} /> */}
        </Tab.Navigator>        
    )
}

function Header() {
    return (        
        <View style={styles.containerHeader}>            
            <HeaderApps/>
            <HeaderInformation 
                    user="SATRIA ADJIE PRAYOGA"
                    role="MAHASISWA"
                    lastLogin="Login terakhir: 7 Mei 2021, 14:06 WIB"
                    notification="Anda sudah mengisi formulir absensi dan pendataan kesehatan mahasiswa. Terima kasih. "
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
                // options={{                                
                //     headerShown:false
                //     }}
                options={
                    { headerTitle: props => <Header {... props}/>,headerStyle:{height:160}}
                }
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    containerHeader:{       
        
    },
    
})