// no clean code here :]

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import MyButton from "./MyButton";
import _ from "lodash";

export default function App() {
  const aspectRatio = window.innerHeight / window.innerWidth;
  const rows = Number(4 * aspectRatio);
  const columns = 4;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightcoral",
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

  return (
    <View style={styles.container}>
      {_.times(rows, (i) => (
        <View style={styles.app}>
          <Row>
            {_.times(columns, (i) => (
              <MyButton />
            ))}
          </Row>
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}
