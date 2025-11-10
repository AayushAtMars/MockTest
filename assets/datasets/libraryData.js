// contentData.js
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const data = [
  {
    id: "body-systems",
    title: "Body Systems",
    episodes: 12,
    updated: "3 Jun",
    icon: <MaterialCommunityIcons name="lungs" size={60} color="#0BB67A" />,
    bgColor: "#E6FBF5",
    highlights: [
      { id: "h1", emoji: "💓", text: "How your heart works" },
      { id: "h2", emoji: "🫁", text: "Breathing and the lungs" },
    ],
    moreCount: 10,
  },
  {
    id: "medical-conditions",
    title: "Medical Conditions",
    episodes: 27,
    updated: "1 Jun",
    icon: <MaterialIcons name="local-hospital" size={60} color="#3B82F6" />,
    bgColor: "#E8F0FF", 
    highlights: [
      { id: "h1", emoji: "🔥", text: "Managing high blood pressure" },
      { id: "h2", emoji: "🧠", text: "Understanding depression" },
    ],
    moreCount: 25,
  },
  {
    id: "diagnostics",
    title: "Diagnostics",
    episodes: 12,
    updated: "29 May",
    icon: <FontAwesome name="search" size={60} color="#8B7CFF" />,
    bgColor: "#F3F2FF",
    highlights: [
      { id: "h1", emoji: "🫀", text: "Understanding your ECG report" },
      { id: "h2", emoji: "🧾", text: "What an MRI can tell you" },
    ],
    moreCount: 10,
  },
];
