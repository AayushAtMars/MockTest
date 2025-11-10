import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/globals/Header";
import Hero from "../components/HomeComponents/Hero";
import Container from "../components/HomeComponents/Container";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <Header />
      <ScrollView style={styles.container}>
      
      <Hero />
      <Container />
    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddf3fe",
    paddingHorizontal: 20,
  },
});
