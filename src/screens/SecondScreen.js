import React from "react";
import { View, Text } from "react-native";
const SecondScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lavender",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderColor: "red",
          backgroundColor: "skyblue",
          borderWidth: 2,
          borderStyle: "dashed",
          borderRadius: 5,
          padding: 5,
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Mobile Legends
        </Text>
        <Text>
          Mobile Legends is a multiplayer online battle arena (MOBA) game. The
          two opposing teams fight to reach and destroy the enemy’s base while
          defending their own base for control of a path.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "cornflowerblue",
          borderStyle: "dotted",
          borderColor: "red",
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          PUBG
        </Text>
        <Text>
          PlayerUnknown’s Battlegrounds, better known as PUBG, is a multiplayer
          battle royale game in which players drop onto an island and fight to
          be the last one left standing.
        </Text>
      </View>
    </View>
  );
};
export default SecondScreen;
