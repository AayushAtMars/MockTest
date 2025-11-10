import { StyleSheet, Text, View, TouchableOpacity, onPress } from 'react-native'
import React from 'react'

export default function Hero () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Understand medical conditions with{"\n"}
        <Text style={styles.highlight}>doctor-approved audio</Text>
      </Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Browse Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    // paddingHorizontal: 24,
    // paddingTop: 1,
  },

  title: {
    fontSize: 32,          
    lineHeight: 28,
    color: "#0B1220",      
    marginBottom: 16,
    fontWeight: "500",
    lineHeight:35
  },

  highlight: {
    color: "#198FE3",        
    fontWeight: "500",
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical:10,
    backgroundColor: "#198FE3",
    borderRadius: 999,         
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,           
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
