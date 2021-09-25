import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import { useAuth } from "../lib/auth";

const SignupScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`mx-4 h-full flex justify-center`}>
        <View>
          <Text style={[tw`text-3xl font-bold`, { color: "#353958" }]}>
            Create an account
          </Text>
          <Text style={tw`text-gray-500 mt-2`}>Join PicoPay account now</Text>
        </View>
        <View style={tw`flex mt-4`}>
          <Input
            value={name}
            onChangeText={setName}
            style={{ fontSize: 16 }}
            placeholder='John Doe'
            leftIcon={
              <Icon
                type='ionicon'
                name='person-circle-outline'
                size={16}
                color='black'
              />
            }
          />
          <Input
            style={{ marginTop: 2 }}
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
              if ((!name, !email || !password)) return;

              try {
                await auth.createAccountWithEmailAndPassword(
                  name,
                  email,
                  password
                );
              } catch (e) {
                console.error("Error", e);
              }
            }}
            title='Sign up'
            buttonStyle={{
              backgroundColor: "#353958",
            }}
            titleStyle={{
              fontWeight: "500",
              fontSize: 16,
            }}
          />
          <View style={tw`mt-4 flex flex-row justify-center items-center`}>
            <Text style={tw`text-gray-500 mr-1`}>Already have an account?</Text>
            <Text onPress={() => navigation.navigate("Login")}>Login.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
