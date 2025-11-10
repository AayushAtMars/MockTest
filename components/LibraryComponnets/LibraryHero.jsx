import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";


export const Items = [
  {
    id: "categories",
    name: "Categories",
    icon: <MaterialIcons name="category" size={18} color="#2563EB" />,
  },
  {
    id: "symptoms",
    name: "Symptoms",
    icon: <MaterialCommunityIcons name="stethoscope" size={18} color="#2563EB" />,
  },
  {
    id: "duration",
    name: "Duration",
    icon: <Ionicons name="time-outline" size={18} color="#2563EB" />,
  },
];


const Library = () => {
  return (
   <View>
     <View>
      <Text style={styles.heading}>Library</Text>
      <Text style={styles.para}>Doctor's approved audio episoded</Text>
    </View>

    <View style={styles.inputRow}>
        <Ionicons name="search" size={18} color="#9AA0A6" style={styles.icon} />
        <TextInput
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#626568ff"
          style={styles.input}
        />
      </View>





      <View style={styles.container}>
      {Items.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          style={styles.chip}
          onPress={() => onPress?.(item)}
        >
          {item.icon}
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
   </View>
    
  )
}

export default Library

const styles = StyleSheet.create({
  heading:{
    fontSize:32,
    fontWeight:'500',
    color:'#0B1220',
    marginBottom:4,
  },
  para:{
    fontSize:18,
    color:'#4A4A4A',
    fontWeight:'400',
  },

    inputRow: {
    marginTop:10,
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


container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#DDE7FF",
  },
  label: {
    fontSize: 13,
    color: "#0B1220",
    fontWeight: "500",
    marginLeft: 6,
  },




})