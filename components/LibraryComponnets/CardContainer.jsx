import { View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet, Platform} from 'react-native'
import React from 'react'

import { data } from "../../assets/datasets/libraryData";


const CardContainer = () => {


    const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: item.bgColor }]}>
          {item.icon}
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>
              {item.episodes} Episodes{"  "}•{"  "}Updated {item.updated}
            </Text>
          </View>

          <View>
            {item.highlights.slice(0, 2).map((h) => (
              <View key={h.id} style={styles.highlightRow}>
                <Text style={styles.emoji}>{h.emoji}</Text>
                <Text style={styles.hText} numberOfLines={1}>
                  {h.text}
                </Text>
              </View>
            ))}
            <Text style={styles.more}>+ {item.moreCount} more</Text>
          </View>
        </View>

      </View>
    );
  };



  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CardContainer

const styles = StyleSheet.create({
  list: {
    paddingVertical: 12,
  },
  sep: {
    height: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#EEF5FB",
  },

  iconBox: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    color: "#0B1220",
    fontWeight: "700",
  },

  meta: {
    marginTop: 6,
    fontSize: 12,
    color: "#6B7280",
    fontWeight:"600"
  },


  highlightRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    marginRight: 8,
    fontSize: 14,
  },

  hText: {
    fontSize: 15,
    color: "#000000ff",
    flex: 1,
    fontWeight:'500'
  },

  more: {
    marginTop: 2,
    color: "#6B7280",
    fontSize: 1,
    fontWeight:"600"
  },
})