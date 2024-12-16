import { View, Text } from "react-native";
import React from "react";

const AgeComponent = ({ age }: { age: number }) => {
  return <Text>I'm {age} years old.</Text>;
};

export default AgeComponent;
