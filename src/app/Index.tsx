import { ScrollView, View } from "react-native";
import ListData from "../components/ListData";
import ArrayOfObject from "../components/ArrayOfObject";
import ChallengeList from "../components/ChallengeList";

const Index = () => {
  return (
    <ScrollView>
      <ListData />
      <ArrayOfObject />
      <ChallengeList />
    </ScrollView>
  );
};

export default Index;
