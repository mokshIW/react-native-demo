import { View, Text } from "react-native";
import React from "react";

interface ChildComponentProps {
  name: string;
  age: number;
  hobbies: string[];
}

const ChildComponent = ({ name, age, hobbies }: ChildComponentProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Hobbies: {hobbies.join(", ")}</Text>
    </View>
  );
};

export default ChildComponent;
