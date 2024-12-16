import { Text } from "react-native";
import React from "react";

const NameComponent = ({ name }: { name: string }) => {
  return <Text>My name is {name}</Text>;
};

export default NameComponent;
