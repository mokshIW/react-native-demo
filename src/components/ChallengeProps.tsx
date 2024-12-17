import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

interface ChallengePropsProps {
  name: string;
  image: string;
  price: number;
  description: string;
  isFeatured: boolean;
}

const ChallengeProps = ({
  name,
  image,
  price,
  description,
  isFeatured,
}: ChallengePropsProps) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        {isFeatured && (
          <View style={styles.featuredTag}>
            <Text>Featured</Text>
          </View>
        )}
        <Text style={styles.productDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    marginRight: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  featuredTag: {
    backgroundColor: "#f0f0f0",
    padding: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
  },
});

export default ChallengeProps;