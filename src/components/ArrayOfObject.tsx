import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
  const locations = [
    {
      id: 1,
      name: "Jakarta",
    },
    {
      id: 2,
      name: "Bandung",
    },
    {
      id: 3,
      name: "Surabaya",
    },
    {
      id: 4,
      name: "Bali",
    },
    {
      id: 5,
      name: "Lombok",
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfObject;
