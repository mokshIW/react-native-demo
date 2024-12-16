import { View } from "react-native";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import SubjectComponent from "../components/SubjectComponent";
import HandleComponent from "../components/HandleComponent";

const Index = () => {
  return (
    <View>
      <NameComponent name="John Doe" />
      <AgeComponent age={25} />
      <SubjectComponent subject="React Native" />
      <HandleComponent handle="@johndoe" />
    </View>
  );
};

export default Index;
