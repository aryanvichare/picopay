import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Line, Circle } from "react-native-svg";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import QRCode from "react-native-qrcode-svg";

export default function ViewQR() {
    const navigation = useNavigation();
  
    const [checkinType, setCheckinType] = useState('Public Transport');
    const [qrType, setQrType] = useState('checkin');
    const [qrString, setQrString] = useState('SHELLHACKS2021TEAMZERO');
      
    
   
    return (
       
    <View style={styles.container}>
      <View style={{ backgroundColor: "#494E76", height: "15%" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "15%",
            marginHorizontal: "5%",
            width: "100%",
          }}>
          <Icon
            name='chevron-with-circle-left'
            type='entypo'
            color='#FFF'
            size={30}></Icon>
          <Text
            style={{
              color: "#FFF",
              textAlignVertical: "center",
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: "30%",
            }}>
            {checkinType}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "#FCC281",
          fontWeight: "bold",
          fontSize: 16,
          textAlign: "center",
          marginTop: "10%",
        }}>
        {qrType == "checkin"
          ? "Scan QR Code below at the Entrance"
          : "Scan QR Code below at the Exit"}
      </Text>
      <View
        style={{
          backgroundColor: "#FFF",
          width: 250,
          alignContent: "center",
          alignSelf: "center",
          padding: "5%",
          borderColor: "#FCC281",
          borderWidth: 5,
          marginTop: "15%",
        }}>
        <QRCode value={qrString} backgroundColor='#FFF' size={200} />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          color: "#FFF",
          textAlign: "center",
          marginTop: "5%",
        }}>
        {qrType == "checkin" ? "(check in)" : "(check out)"}
      </Text>

      <View
        style={{
          backgroundColor: "#FFF",
          height: "10%",
          width: "100%",
          marginTop: "52%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <View style={{ alignSelf: "center", flexDirection: "column" }}>
          <Icon name='compass' type='entypo' color='#353958' size={30}></Icon>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#353958" }}>
            Explore
          </Text>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "column" }}>
          <Icon
            name='calendar-check-o'
            type='font-awesome'
            color='#9A9A9A'
            size={30}></Icon>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#9A9A9A" }}>
            Activity
          </Text>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "column" }}>
          <Icon name='user' type='feather' color='#9A9A9A' size={30}></Icon>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#9A9A9A" }}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    backgroundColor: "#353958",
  },
  header: {
    height: "55%",
    width: "100%",
    marginTop: "-5%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});
