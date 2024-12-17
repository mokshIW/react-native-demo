import { FlatList, View } from "react-native";
import ConditionalStatement from "../components/ConditionalStatement";
import AndOperator from "../components/AndOperator";
import TernaryOperator from "../components/TernaryOperator";

const Index = () => {
  return (
    <View>
      <ConditionalStatement />
      <AndOperator />
      <TernaryOperator />
    </View>
  );
};

export default Index;
