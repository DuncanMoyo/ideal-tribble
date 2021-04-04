import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const generateRandonBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandonBetween(min, max, exclude);
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandonBetween(1, 100, props.userChoice)
  );

  return <View></View>;
};

const styles = StyleSheet.create({});

export default GameScreen;
