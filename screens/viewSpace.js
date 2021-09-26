import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import QRCode from 'react-native-qrcode-svg';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MapView,{Marker} from 'react-native-maps';






export default function ViewSpace() {
    const navigation = useNavigation();
  
    const [checkinType, setCheckinType] = useState('Unspecified');
    const [qrType, setQrType] = useState('checkin');
    const [qrString, setQrString] = useState('SHELLHACKS2021TEAMZERO');

    const [pickUp, setPickUp] = useState('Set bus stop');
    const [dropOff, setDropOff] = useState('Set bus stop');

    const [miamiBus, setMiamiBus] = useState({"RecordSet":{"Record":
    [{"StopID":"2","StopName":"SW 211 ST \u0026 SOUTHLAND MALL","Sequence":"1","Latitude":"25.571929","Longitude":"-80.366647"},
    {"StopID":"3671","StopName":"SW 211 ST \u0026 OP # 10890","Sequence":"2","Latitude":"25.571376","Longitude":"-80.368857"},
    {"StopID":"3672","StopName":"SW 211 ST \u0026 SW 112 AV","Sequence":"3","Latitude":"25.571304","Longitude":"-80.373736"},
    {"StopID":"3813","StopName":"BUSWAY \u0026 SW 112 AV","Sequence":"4","Latitude":"25.575762","Longitude":"-80.372924"},
    {"StopID":"227","StopName":"BUSWAY \u0026 SW 200 ST","Sequence":"5","Latitude":"25.580496","Longitude":"-80.368244"},
    {"StopID":"3814","StopName":"BUSWAY \u0026 MARLIN DR","Sequence":"6","Latitude":"25.5903","Longitude":"-80.36012"},
    {"StopID":"228","StopName":"BUSWAY \u0026 SW 184 ST","Sequence":"7","Latitude":"25.597981","Longitude":"-80.35573"},
    {"StopID":"3815","StopName":"BUSWAY \u0026 W INDIGO ST","Sequence":"8","Latitude":"25.603412","Longitude":"-80.353159"},
    {"StopID":"3816","StopName":"BUSWAY \u0026 SW 173 ST","Sequence":"9","Latitude":"25.609625","Longitude":"-80.350281"},
    {"StopID":"3817","StopName":"BUSWAY \u0026 SW 168 ST","Sequence":"10","Latitude":"25.614439","Longitude":"-80.34805"},
    {"StopID":"3818","StopName":"BUSWAY \u0026 SW 160 ST","Sequence":"11","Latitude":"25.619854","Longitude":"-80.345535"},
    {"StopID":"4","StopName":"BUSWAY \u0026 SW 152 ST","Sequence":"12","Latitude":"25.628291","Longitude":"-80.341621"},
    {"StopID":"3819","StopName":"BUSWAY \u0026 SW 144 ST","Sequence":"13","Latitude":"25.635664","Longitude":"-80.338205"},
    {"StopID":"5","StopName":"BUSWAY \u0026 SW 136 ST","Sequence":"14","Latitude":"25.644519","Longitude":"-80.334092"},
    {"StopID":"3820","StopName":"BUSWAY \u0026 SW 128 ST","Sequence":"15","Latitude":"25.651929","Longitude":"-80.330627"},
    {"StopID":"3821","StopName":"BUSWAY \u0026 SW 124 ST","Sequence":"16","Latitude":"25.655727","Longitude":"-80.328884"},
    {"StopID":"3822","StopName":"BUSWAY \u0026 SW 120 ST","Sequence":"17","Latitude":"25.6607","Longitude":"-80.326642"},
    {"StopID":"3823","StopName":"BUSWAY \u0026 SW 112 ST","Sequence":"18","Latitude":"25.66701","Longitude":"-80.32364"},
    {"StopID":"3824","StopName":"BUSWAY \u0026 SW 104 ST","Sequence":"19","Latitude":"25.673233","Longitude":"-80.320745"},
    {"StopID":"6","StopName":"DADELAND SOUTH METRORAIL STATION","Sequence":"20","Latitude":"25.685035","Longitude":"-80.313665"}]}});
      
    
   
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#494E76", height:'15%'}}>
                <View style={{flexDirection:'row', marginTop:'15%', marginHorizontal:'5%', width:'100%'}}>
                    <Icon name="chevron-with-circle-left" type="entypo" color="#FFF" size={30}></Icon>
                    <Text style={{color:"#FFF", textAlignVertical:'center', fontWeight:'bold', textAlign:'center', marginLeft:'30%'}}>Public Spaces</Text>
                </View>
            </View>
            <Image source={require('../assets/zoo.png')} style={{alignSelf:'center', marginTop:'5%'}}></Image>
            <View style={{marginLeft:'12%'}}>
                    <Text style={{color:'#FCC281', fontWeight:'bold', fontSize:20}}>David T. Kennedy Park</Text>
                    <Text style={{color: '#77798E', width:'70%'}}>2200 S. Bayshore Drive Coconut Grove, FL 33133</Text>
                    <View style={{flexDirection:'row'}}><Text style={{color: '#77798E', textAlignVertical:'center'}}>5</Text>
                    <Icon name="star" color='#EFBA7F'></Icon><Icon name="star" color='#EFBA7F'></Icon><Icon name="star" color='#EFBA7F'></Icon><Icon name="star" color='#EFBA7F'></Icon><Icon name="star" color='#EFBA7F'></Icon></View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around', marginHorizontal:'5%'}}>
                        <View style={{flexDirection:'row',}}><Icon name="attach-money" color="#EFBA7F"></Icon><Text style={{color:"#EFBA7F", textAlignVertical:'center'}}>12/hr</Text></View>
                        <View style={{flexDirection:'row',}}><Icon name="user" type="ant-design" color="#EFBA7F" size={20}></Icon><Text style={{color:"#EFBA7F", textAlignVertical:'center'}}>100/120</Text></View>
                        <View style={{flexDirection:'row',}}><Icon name="time-outline" type="ionicon" color="#EFBA7F" size={20}></Icon><Text style={{color:"#EFBA7F", textAlignVertical:'center'}}>09:00 - 17.00</Text></View>

            </View>
            <Text style={{color: '#FFF', width:'77%', textAlign:'justify', marginHorizontal:'12%'}}>Located off S. Bayshore Drive and covering more than 20 acres of bayfront green space, David T. Kennedy Park is where the locals go for exercise and playtime. With majestic trees, waterfront vistas and open lawn areas, this park is a tranquil escape only minutes away from Coconut Grove.</Text>
            

            <View style={{backgroundColor:"#FCC281", width:'80%', alignSelf:'center', borderRadius:10, height:'5%', marginTop:'5%', padding:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ActiveSpace')}><Text style={{color:"#353958", fontWeight:'bold', textAlign:'center'}}>CHECK IN</Text></TouchableOpacity>
            </View>


            <View style={{backgroundColor:"#FFF", height:'10%', width:'100%', marginTop:'20%', flexDirection:'row', justifyContent:'space-around'}}>
                <View style={{alignSelf:'center', flexDirection:'column'}}>
                    <Icon name="compass" type="entypo" color="#353958" size={30}></Icon>
                    <Text style={{fontSize:10, fontWeight:'bold', color:"#353958"}}>Explore</Text>
                </View>
                <View style={{alignSelf:'center', flexDirection:'column'}}>
                    <Icon name="calendar-check-o" type="font-awesome" color="#9A9A9A" size={30}></Icon>
                    <Text style={{fontSize:10, fontWeight:'bold', color:"#9A9A9A"}}>Activity</Text>
                </View>
                <View style={{alignSelf:'center', flexDirection:'column'}}>
                    <Icon name="user" type="feather" color="#9A9A9A" size={30}></Icon>
                    <Text style={{fontSize:10, fontWeight:'bold', color:"#9A9A9A"}}>Profile</Text>
                </View>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#353958'
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});