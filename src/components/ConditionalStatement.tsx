import { View, Text } from "react-native";
import React from "react";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }: { isValid: boolean }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
};

const ConditionalStatement = () => {
  return (
    <View> 
      <Text>ConditionalStatement</Text>
      <Password isValid={true} />
      <Password isValid={false} />
    </View>
  );
};

export default ConditionalStatement;
