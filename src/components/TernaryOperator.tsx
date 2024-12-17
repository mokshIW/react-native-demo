import { View, Text } from "react-native";
import React from "react";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }: { isValid: boolean }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const TernaryOperator = () => {
  return (
    <View>
      <Text>TernaryOperator</Text>
      <Password isValid={false} />
      <Password isValid={true} />
    </View>
  );
};

export default TernaryOperator;
