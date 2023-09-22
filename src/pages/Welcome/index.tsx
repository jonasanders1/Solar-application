import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "../HomePage";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import Assets from "../../Assets";
import Button from "../../components/Button";
import { Colors, Fonts } from "../../Styles/StyleGuide";

const Welcome : React.FC = () => {

  const { navigate } = useOwnNavigation()

  const handleContinueClick = () => {
    navigate("HomeRoutes")
  }

  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <Text style={[styles.welcome, Fonts.paragraph()]}>Welcome!</Text>
      <Text style={[styles.title, Fonts.homeTitle()]}>
        Let's journey through our solar system
      </Text>

      <Text style={[styles.title, Fonts.paragraph(), styles.buttonMargin]}>
        Press the button below to embark
      </Text>
      <Button
        title="Continue"
        Icon={Assets.icons.Forward}
        onPress={handleContinueClick}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: { position: "absolute", zIndex: 0 },
  welcome: {
    color: "white",
    opacity: 0.65,
  },
  title: { color: "white", maxWidth: "85%", textAlign: "center" },
  buttonMargin: {
    marginTop: "50%",
  },
});


export default Welcome



/*
const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Start">
      <Tab.Screen name="Start" component={HomePage} />
      <Tab.Screen name="Search" component={HomePage} />
      <Tab.Screen name="Favorites" component={HomePage} />
      <Tab.Screen name="DetailPage" component={HomePage} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;*/