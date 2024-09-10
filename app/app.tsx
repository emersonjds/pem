import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider>
      <View>
        <Text>Welcome to Gluestack UI in Expo using Bun!</Text>
      </View>
    </GluestackUIProvider>
  );
}
