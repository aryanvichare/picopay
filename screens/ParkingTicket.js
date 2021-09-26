import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";
import { Stopwatch } from "react-native-stopwatch-timer";
import Car from "../assets/yellow-car.svg";
import tw from "tailwind-react-native-classnames";

export default function ParkingTicket() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#494E76", height: "13%" }}>
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
              marginLeft: "25%",
              marginTop: "2%",
            }}>
            Parking Ticket
          </Text>
        </View>
      </View>
      <View style={tw`mt-8 mx-4`}>
        <Text style={[tw`text-2xl font-bold mb-4`, { color: "#FCC281" }]}>
          Active Parking
        </Text>
        <Car width='100%' />
        <View style={tw`mt-4`}>
          <Text
            style={[
              tw`text-center text-2xl font-bold mb-3`,
              { color: "#FCC281" },
            ]}>
            Parking Time
          </Text>
          <View
            style={[
              tw`mx-auto px-4 py-2`,
              { backgroundColor: "#24273C", borderRadius: 3 },
            ]}>
            <Stopwatch
              style={[tw`text-2xl text-white font-semibold tracking-wider`]}
              msecs={false}
              start={true}
              options={{
                container: {
                  width: 140,
                },
                text: {
                  textAlign: "center",
                  color: "white",
                  fontSize: 25,
                  fontWeight: "800",
                  letterSpacing: 2,
                },
              }}
            />
          </View>
        </View>
        <View style={tw`mt-6`}>
          <View style={tw`flex flex-col`}>
            <View style={tw`flex flex-row items-center justify-start`}>
              <Text style={[tw`font-semibold mr-1`, { color: "#FCC281" }]}>
                Check-in time:{" "}
              </Text>
              <Text style={tw`text-white font-medium`}>14:00</Text>
            </View>
            <View style={tw`mt-4 flex flex-row items-center justify-start`}>
              <Text style={[tw`font-semibold mr-1`, { color: "#FCC281" }]}>
                Location:{" "}
              </Text>
              <Text style={tw`text-white font-medium`}>
                David T. Kennedy Park
              </Text>
            </View>
            <View style={tw`mt-4 flex flex-row items-center justify-start`}>
              <Text style={[tw`font-semibold mr-1`, { color: "#FCC281" }]}>
                License Plate:{" "}
              </Text>
              <Text style={tw`text-white font-medium`}>6TRJ244</Text>
            </View>
            <View style={tw`mt-4 flex flex-row items-center justify-start`}>
              <Text style={[tw`font-semibold mr-1`, { color: "#FCC281" }]}>
                Total Price:{" "}
              </Text>
              <Text style={tw`text-white font-medium`}>20 $MIA</Text>
            </View>
          </View>
        </View>
      </View>
      <Button
        style={tw`uppercase`}
        onPress={async () => {
          navigation.navigate("ViewQR");
        }}
        title='End Parking'
        buttonStyle={{
          marginTop: 50,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FCC281",
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
          paddingBottom: 12,
          borderRadius: 4,
        }}
        titleStyle={{
          textTransform: "uppercase",
          color: "#353958",
          fontWeight: "500",
          fontSize: 12,
          fontWeight: "600",
        }}
      />
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
