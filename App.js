import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import _ from "lodash";

import emoji from "./emoji";

export default function App() {
  const aspectRatio = window.innerHeight / window.innerWidth;
  const rows = Number(5 * aspectRatio);
  const columns = 5;

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: (window.innerWidth / columns) * 0.99,
      height: window.innerHeight / rows,
      zIndex: -1000,
      borderRadius: 30,
    },
    row: {
      flexDirection: "row",
    },
    emoji: {
      fontSize: 25,
    },
  });

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;

  const MyButton = ({ b_color }) => (
    <TouchableOpacity>
      <View
        key={Math.random()}
        style={{
          ...styles.button,
          backgroundColor: randomColor(),
        }}
      >
        <Text style={styles.emoji}>
          {String.fromCodePoint(0x1f600 + Math.floor(Math.random() * 200))}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {_.times(rows, (i) => (
        <View style={styles.app}>
          <Row>
            {_.times(columns, (i) => (
              <MyButton key={i} b_color="#aaa" />
            ))}
          </Row>
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}
