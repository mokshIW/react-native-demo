import { View, Text, FlatList } from "react-native";
import React from "react";

const AndOperator = () => {
  const groceries = ["milk", "bread", "eggs", "butter", "cheese"];

  return (
    <View>
      <Text>AndOperator</Text>

      <Text>Shopping Cart</Text>
      {groceries.length > 0 && (
        <Text>Total Items in Cart: {groceries.length}</Text>
      )}

      {groceries.length > 5 && (
        <Text>Not Eligible for self-checkout: {groceries.length} Items</Text>
      )}

      <FlatList
        data={groceries}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default AndOperator;
