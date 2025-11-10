import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require('../../assets/images/logo.png')} />
        <Text style={styles.name}>HealthCast</Text>
      </View>

      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#ddf3fe",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 15,
  },
  image:{
    width:40,
    height:40
  },
  logo:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    gap:15
  },
  name:{
    fontSize:22,
    fontWeight:"500"
  }
});
