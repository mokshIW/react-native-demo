import { ScrollView, View } from "react-native";
import TextComponent from "../components/TextComponent";
import ViewComponent from "../components/ViewComponent";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
import ChallengeComponent from "../components/ChallengeComponent";

const Index = () => {
  return (
    <ScrollView>
      {/* Challenge Stuff Below */}
      <ChallengeComponent />
    </ScrollView>
  );
};

export default Index;
