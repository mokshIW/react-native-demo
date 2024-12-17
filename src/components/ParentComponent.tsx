import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>

      <ChildComponent
        name="John Doe"
        age={24}
        hobbies={["Reading", "Gaming", "Coding"]}
      />
    </View>
  );
};

export default ParentComponent;
