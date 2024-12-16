import { View, Text, Button, Image } from "react-native";
import React from "react";

const ChallengeComponent = () => {
  return (
    <View>
      <Image
        source={require("../assets/buildingIcon.png")}
        style={{ width: 250, height: 250 }}
      />
      <Text style={{ fontWeight: 700 }}>John Doe</Text>
      <Text style={{ fontWeight: 300 }}>My name is John Doe. I code.</Text>
      <Button
        title="Press Me"
        color="crimson"
        onPress={() => alert("Challenge Accepted!")}
      />
    </View>
  );
};

export default ChallengeComponent;
