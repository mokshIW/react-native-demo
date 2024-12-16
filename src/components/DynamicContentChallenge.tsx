import { View, Text, Button, Image } from "react-native";
import React from "react";

const DynamicContentChallenge = () => {
  const price = "$200,000";
  const imageURL =
    "https://labelsds.com/images/user_uploads/ecologic-entomology-logo.png";

  const carName = "Tesla Model S";
  const Rating = 4.5;
  const carFeatures = ["Electric", "Fast", "Luxury"];
  const carSpecs = {
    topSpeed: "200mph",
    acceleration: "2.4s",
    range: "390 miles",
  };
  const carDescription = `The ${carName} is a fully electric car that is known for its speed and luxury. It has a top speed of ${carSpecs.topSpeed} and can go from 0-60mph in just ${carSpecs.acceleration}. The car has a range of ${carSpecs.range} on a single charge.`;
  const buttonText = "Buy Now";

  return (
    <View>
      <Text>DynamicContentChallenge</Text>
      <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />
      <Text>Price: {price}</Text>
      <Text>Car Name: {carName}</Text>
      <Text>Rating: {Rating} Stars</Text>
      <Text>Features: {carFeatures.join(", ")}</Text>
      <Text>Description: {carDescription}</Text>
      <Button title={buttonText} onPress={() => alert("Button Pressed!")} />
    </View>
  );
};

export default DynamicContentChallenge;
