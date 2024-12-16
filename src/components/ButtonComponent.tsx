import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore buttons!</Text>
      <Button
        title="Learn More"
        color="green"
        accessibilityLabel="Learn more about this green button!"
        onPress={() => alert("Learn More button pressed!")}
      />

      {/* Events */}
      <Button
        title="Click & Check Console"
        onPress={() => console.log("Pressed")}
      />

      {/* Disabled */}
      <Button
        title="Disabled Button"
        disabled={true}
        onPress={() => alert("Disabled button pressed!")}
      />

      {/* 
            1. onPress: Function that is called when the component is pressed. Required.
            2. onPressIn: Function that is called when the press gesture starts.
            3. onPressOut: Function that is called when the press gesture ends or is cancelled.
            4. onLongPress: Function that is called when the component is pressed for a long time.
        */}

      <Pressable onPress={() => console.log("Press Me: onPress")}>
        <Text style={{ color: "teal" }}>Press Me: onPress</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("Press Me: onPressIn")}>
        <Text style={{ color: "orange" }}>Press Me: onPressIn</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("Press Me: onPressOut")}>
        <Text style={{ color: "blue" }}>Press Me: onPressOut</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("Press Me: onLongPress")}>
        <Text>Press Me: onLongPress</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
