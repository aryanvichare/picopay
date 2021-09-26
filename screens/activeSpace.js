import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import QRCode from 'react-native-qrcode-svg';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MapView,{Marker} from 'react-native-maps';






export default function ActiveSpace() {
    const navigation = useNavigation();
  
    const [checkinType, setCheckinType] = useState('Unspecified');
    const [qrType, setQrType] = useState('checkin');
    const [qrString, setQrString] = useState('SHELLHACKS2021TEAMZERO');

      
    
   
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#494E76", height:'15%'}}>
                <View style={{flexDirection:'row', marginTop:'15%', marginHorizontal:'5%', width:'100%'}}>
                    <Icon name="chevron-with-circle-left" type="entypo" color="#FFF" size={30}></Icon>
                    <Text style={{color:"#FFF", textAlignVertical:'center', fontWeight:'bold', textAlign:'center', marginLeft:'30%'}}>Public Spaces</Text>
                </View>
            </View>
            <Text style={{color:"#FCC281", fontWeight:'bold', fontSize:16, textAlign:'left', marginTop:'10%', marginHorizontal:'10%', marginBottom:'2.5%'}}>Active Permits</Text>
            <Image source={require('../assets/zoo.png')} style={{alignSelf:'center'}}></Image>
            <View style={{backgroundColor:"#494E76",paddingHorizontal:'2.5%', borderRadius:10, paddingVertical:'1%', width:'65%', justifyContent:'space-evenly', alignSelf:'center', marginTop:'5%'}}>
                    <Text style={{ color:"#FFF", fontWeight:'bold', textAlign:'center', fontSize:40}}>00:00:03</Text>
                </View>


            <Text style={{color:"#FCC281", fontWeight:'bold', fontSize:16, textAlign:'left', marginTop:'10%', marginHorizontal:'10%', marginBottom:'2.5%'}}>Check in time: <Text style={{color:"#FFF"}}>14:00</Text></Text>
            <Text style={{color:"#FCC281", fontWeight:'bold', fontSize:16, textAlign:'left', marginHorizontal:'10%', marginBottom:'2.5%'}}>Location: <Text style={{color:"#FFF"}}>Miami, FL</Text></Text>
            <Text style={{color:"#FCC281", fontWeight:'bold', fontSize:16, textAlign:'left', marginHorizontal:'10%', marginBottom:'2.5%'}}>Total Price: <Text style={{color:"#FFF"}}>25 MIA</Text></Text>

            <View style={{backgroundColor:"#FCC281", width:'80%', alignSelf:'center', borderRadius:10, height:'5%', marginTop:'.5%', padding:10}}>
            <TouchableOpacity><Text style={{color:"#353958", fontWeight:'bold', textAlign:'center'}}>CHECK OUT</Text></TouchableOpacity>
            </View>
            


            <View style={{backgroundColor:"#FFF", height:'10%', width:'100%', marginTop:'10%', flexDirection:'row', justifyContent:'space-around'}}>
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