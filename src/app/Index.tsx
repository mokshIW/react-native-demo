import { View } from "react-native";
import InlineStyle from "../components/InlineStyle";
import InternalStyle from "../components/InternalStyle";
import ExternalStyle from "../components/ExternalStyle";

const Index = () => {
  return (
    <View>
      <InternalStyle />
      <ExternalStyle />
      <InlineStyle />
    </View>
  );
};

export default Index;
