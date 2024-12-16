import { View, Text } from "react-native";
import React from "react";

const DynamicContent = () => {
  const username = "John Doe";

  const multiple = (a: number, b: number) => {
    return a * b;
  };

  let me = {
    name: "John",
    age: 20,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };

  return (
    <View>
      <Text>Username is {username}!</Text>
      <Text>2 * 3 = {multiple(2, 3)}</Text>

      <Text>Name: {me.name}</Text>
      <Text>Age: {me.age}</Text>
      <Text>
        Address: {me.address.street}, {me.address.city}
      </Text>
    </View>
  );
};

export default DynamicContent;
