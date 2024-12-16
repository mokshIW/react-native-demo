import { Text } from "react-native";
import React from "react";

const SubjectComponent = ({ subject }: { subject: string }) => {
  return <Text>I Love {subject}.</Text>;
};

export default SubjectComponent;
