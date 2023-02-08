// no clean code here :]

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import randomEmoji from "./random-emoji";

export default function MyButton() {
  const aspectRatio = window.innerHeight / window.innerWidth;
  const rows = Number(4 * aspectRatio);
  const columns = 4;

  const randomColor = (() => {
    "use strict";

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return () => {
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
  })();

  var [isPress, setIsPress] = React.useState(false);

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: (window.innerWidth / columns) * 0.99,
      height: window.innerHeight / rows,
      zIndex: -1000,
      borderRadius: 30,
    },
    emoji: {
      fontSize: 35,
    },
  });

  const [x, setX] = useState(0);

  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: Math.random() * 700 + 200,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
    setX(x + 1);
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });

  return (
    <TouchableOpacity>
      <View
        key={Math.random() + x}
        style={{
          ...styles.button,
          backgroundColor: randomColor(),
        }}
        onClick={async () => handleAnimation()}
      >
        <Animated.View
          style={{
            transform: [
              {
                rotate: interpolateRotating,
              },
            ],
          }}
        >
          <Text style={styles.emoji}>{randomEmoji()}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
