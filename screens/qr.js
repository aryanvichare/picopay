import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import QRCode from 'react-native-qrcode-svg';





export default function ViewQR() {
    const navigation = useNavigation();
  
    const [checkinType, setCheckinType] = useState('Unspecified');
    const [qrType, setQrType] = useState('checkin');
      
    
   
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#494E76", height:'15%'}}>
                <View style={{flexDirection:'row', marginTop:'15%', marginHorizontal:'5%', width:'100%'}}>
                    <Icon name="chevron-with-circle-left" type="entypo" color="#FFF" size={30}></Icon>
                    <Text style={{color:"#FFF", textAlignVertical:'center', fontWeight:'bold', textAlign:'center', marginLeft:'30%'}}>{checkinType}</Text>
                </View>
            </View>
            <Text style={{color:"#FCC281", fontWeight:'bold', fontSize:16, textAlign:'center', marginTop:'10%'}}>{qrType=='checkin' ? 'Scan QR Code below at the Entrance':'Scan QR Code below at the Exit'}</Text>
            <View style={{backgroundColor:"#FFF", width:250, alignContent:'center', alignSelf:'center', padding:'5%', borderColor:"#FCC281", borderWidth:5, marginTop:'15%'}}><QRCode
            value="Just some string value"
            backgroundColor="#FFF"
            size={200}
            /></View>
            <Text style={{fontWeight:'bold', color:"#FFF", textAlign:'center', marginTop:'5%'}}>{qrType=='checkin' ? '(check in)' : '(check out)'}</Text>
            
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