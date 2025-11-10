import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
  Dimensions,
FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "../../assets/datasets/homedata";

const CATEGORIES = [
    { id: "asthma", label: "Astma", color: "#f0b038ff" },
    { id: "chest", label: "Chest pain", color: "#22C55E" },
    { id: "heart", label: "Heart diseases", color: "#F97316" },
  ];

  const CARDS = [
  {
    id: "body",
    label: "Body",
    bg: "#E6FBF5",      
    iconName: "lungs",   
    iconColor: "#0BB67A",
  },
  {
    id: "symptoms",
    label: "Symptoms",
    bg: "#FFF3F3",      
    iconName: "heart-pulse",
    iconColor: "#FF6B6B",
  },
  {
    id: "treatment",
    label: "Treatment",
    bg: "#F3F2FF",     
    iconName: "pill",
    iconColor: "#9B7CFF",
  },
];


const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.Doctorcard}
        onPress={() => onPressItem?.(item)}
      >

        <View style={[styles.iconBox, { backgroundColor: item.bgColor }]}>
          {item.icon}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.subtitle}>{item.episodes} episodes</Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#C6CDD3" />
      </TouchableOpacity>
    );
  };

const Container = () => {
  
  return (
    <View style={styles.container}>


      <View style={styles.inputRow}>
        <Ionicons name="search" size={18} color="#9AA0A6" style={styles.icon} />
        <TextInput
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#626568ff"
          style={styles.input}
        />
      </View>



      <View style={styles.category}>
      {CATEGORIES.map((i) => (
        <TouchableOpacity style={styles.categoryCard} key={i.id}>
          <View style={[styles.dot, { backgroundColor: i.color }]} />
          <Text numberOfLines={1} style={styles.label}>
            {i.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>



    <Heading text={"Browse by category"} />




    <View style={styles.cardContainer}>
      {CARDS.map((c) => (
        <TouchableOpacity
          activeOpacity={0.85}
          key={c.id}
          style={[styles.card, { backgroundColor: c.bg}]}
          onPress={() => onPressCard?.(c)}
        >
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name={c.iconName}
              size={40}
              color={c.iconColor}
            />
          </View>

          <Text style={styles.label}>{c.label}</Text>
        </TouchableOpacity>
      ))}
    </View>

       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
        <Heading text={"Doctor-curated playlists"} />
        <Text style={{color:'#686565ff', fontWeight:'500', fontSize:14, marginTop:10}}>See all</Text>
       </View>





       <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />

    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#ffff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#EEF0F2",
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#0B1220",
    paddingVertical: 0,
  },




   category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingTop:10
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    color: "#0B1220",
    fontWeight: "500",
  },
  categoryCard:{
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 12,
    borderWidth:0.2,
    borderColor:'#b1b3b4ff'
  },



  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:10
  },
  card:{
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
  },





  listContainer: {
    // paddingHorizontal: 16,
    paddingVertical: 12,
  },

  Doctorcard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#F1F3F5",
    elevation: 2,
  },

  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B1220",
  },

  subtitle: {
    fontSize: 14,
    fontWeight:"500",
    color: "#6B7280",
    marginTop: 2,
  },

  separator: {
    height: 10,
  },


});
