import React from "react";
import { useNavigation } from "@react-navigation/core";
import Onboarding from "react-native-onboarding-swiper";
import EaseOfAccessSVG from "../assets/ease-of-access.svg";
import InclusiveServiceSVG from "../assets/inclusive-service.svg";
import ImpactSVG from "../assets/impact.svg";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <EaseOfAccessSVG width='100%' />,
          title: "Ease of Access",
          titleStyles: {
            color: "#353958",
            fontWeight: "bold",
            fontSize: 30,
          },
          subtitle:
            "Removing payment barriers to let people move freely across the city, improving payments transparency and having easier access to public services.",
          subTitleStyles: {
            fontSize: 14,
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
        {
          backgroundColor: "#fff",
          image: <InclusiveServiceSVG width='100%' />,
          title: "Inclusive Service",
          titleStyles: {
            color: "#353958",
            fontWeight: "bold",
            fontSize: 30,
          },
          subtitle:
            "Offering a simple to use service that is both fair and understandable, removing the complexity of fare calculation.",
          subTitleStyles: {
            fontSize: 14,
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
        {
          backgroundColor: "#fff",
          image: <ImpactSVG width='100%' />,
          title: "Impact",
          titleStyles: {
            color: "#353958",
            fontWeight: "bold",
            fontSize: 30,
          },
          subtitle:
            "Transforming the way of payments across the city, driving a cashless society and the adoption of digital payment services.",
          subTitleStyles: {
            fontSize: 14,
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
      ]}
      onSkip={() => {
        navigation.navigate("Login");
      }}
      onDone={() => {
        navigation.navigate("Login");
      }}
    />
  );
};

export default OnboardingScreen;
