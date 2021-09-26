import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useAuth } from "../lib/auth";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#494E76", height: "13%" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "15%",
            width: "100%",
            justifyContent: "center",
          }}>
          <Text
            style={{
              color: "#FFF",
              textAlignVertical: "center",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "2%",
            }}>
            Profile
          </Text>
        </View>
      </View>
      <View style={tw`mt-8 mx-4`}>
        <View
          style={[
            tw`mx-auto text-center w-24 h-24 rounded-full`,
            { backgroundColor: "#FCC281" },
          ]}>
          <View style={tw`flex flex-row h-full items-center justify-center`}>
            <Text style={[tw`text-4xl font-black`, { color: "#494E76" }]}>
              {auth?.user?.name?.slice(0, 1)}
            </Text>
          </View>
        </View>
        <Text
          style={[tw`text-white font-bold text-center mt-4`, { fontSize: 18 }]}>
          {auth?.user?.name}
        </Text>
        <View style={tw`mt-12 mx-4`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-white font-semibold`}>Balance Details</Text>
            <View
              style={[
                tw`border px-2 py-1 border-green-300 border-2`,
                { borderRadius: 12 },
              ]}>
              <Text
                style={[tw`text-green-300 font-semibold`, { fontSize: 12 }]}>
                Connect Wallet
              </Text>
            </View>
          </View>
          <View style={tw`mt-8 flex flex-row justify-between items-center`}>
            <Text style={tw`text-white font-semibold`}>Vehicle Details</Text>
            <View
              style={[
                tw`border px-2 py-1 border-green-300 border-2`,
                { borderRadius: 12 },
              ]}>
              <Text
                style={[tw`text-green-300 font-semibold`, { fontSize: 12 }]}>
                Add Vehicle
              </Text>
            </View>
          </View>
          <View style={tw`mt-8 flex flex-row justify-between items-center`}>
            <Text style={tw`text-white font-semibold`}>Coupons</Text>
          </View>
          <View style={tw`mt-8 flex flex-row justify-between items-center`}>
            <Text
              onPress={() => {
                auth.signOut();
              }}
              style={tw`text-white font-semibold`}>
              Log out
            </Text>
          </View>
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
