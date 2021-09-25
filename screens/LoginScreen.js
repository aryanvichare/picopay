import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import { useAuth } from "../lib/auth";

const LoginScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`mx-4 h-full flex justify-center`}>
        <View>
          <Text style={[tw`text-3xl font-bold`, { color: "#353958" }]}>
            Welcome!
          </Text>
          <Text style={tw`text-gray-500 mt-2`}>Sign in to continue</Text>
        </View>
        <View style={tw`flex mt-4`}>
          <Input
            value={email}
            onChangeText={setEmail}
            style={{ fontSize: 16 }}
            placeholder='johndoe@gmail.com'
            leftIcon={
              <Icon
                type='ionicon'
                name='mail-outline'
                size={16}
                color='black'
              />
            }
          />
          <Input
            style={{ marginTop: 2 }}
            value={password}
            onChangeText={setPassword}
            style={{ fontSize: 16 }}
            placeholder='**********'
            secureTextEntry={true}
            leftIcon={
              <Icon
                type='ionicon'
                name='lock-closed-outline'
                size={16}
                color='black'
              />
            }
          />
        </View>
        <View>
          <Button
            onPress={async () => {
              if (!email || !password) return;

              try {
                await auth.signInWithEmailAndPassword(email, password);

                // navigation.navigate("Home");
              } catch (e) {
                console.error("Error", e);
              }
            }}
            title='Login'
            buttonStyle={{
              backgroundColor: "#353958",
            }}
            titleStyle={{
              fontWeight: "500",
              fontSize: 16,
            }}
          />
          <Text style={tw`uppercase text-gray-500 text-center my-4`}>or</Text>
          <Button
            onPress={() => navigation.navigate("Signup")}
            title='Sign up'
            buttonStyle={{
              backgroundColor: "#D1D1D1",
            }}
            titleStyle={{
              color: "#353958",
              fontWeight: "500",
              fontSize: 16,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
