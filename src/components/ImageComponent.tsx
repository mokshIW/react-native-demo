import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's Explore Images!</Text>

      {/* Internal Image */}
      <Image
        source={require("../assets/buildingIcon.png")}
        style={{ width: 250, height: 250 }}
      />

      {/* External Image */}
      <Image
        source={{
          uri: "https://labelsds.com/images/logo-color.png",
        }}
        style={{ width: "auto", height: 50 }}
      />
    </View>
  );
};

export default ImageComponent;
