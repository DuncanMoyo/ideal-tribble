import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        {/* <Image source={require("../assets/success.png")} style={styles.image} /> */}
        <Image
          fadeDuration={1000}
          source={{
            uri:
              "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg",
          }}
          style={styles.image}
        />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number Was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
