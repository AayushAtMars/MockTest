import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export const data = [
  {
    id: "chronic-pain",
    title: "Chronic Pain",
    episodes: 8,
    icon: <FontAwesome name="book" size={25} color="#3B82F6" />,
    bgColor: "#E8F0FF",
  },
  {
    id: "mindfulness-sleep",
    title: "Mindfulness for Sleep",
    episodes: 8,
    icon: <MaterialCommunityIcons name="meditation" size={25} color="#A855F7" />,
    bgColor: "#F6E9FF",
  },
  {
    id: "heart-basics",
    title: "Health Heart Basics",
    episodes: 12,
    icon: <Ionicons name="heart" size={25} color="#EF4444" />,
    bgColor: "#FFECEC",
  },
  {
    id: "breathing",
    title: "Breathing Exercises",
    episodes: 6,
    icon: <MaterialCommunityIcons name="leaf" size={25} color="#10B981" />,
    bgColor: "#E8FBF4",
  },
  {
    id: "anxiety",
    title: "Anxiety Relief",
    episodes: 10,
    icon: <Ionicons name="sunny" size={25} color="#F59E0B" />,
    bgColor: "#FFF9E6",
  },
];
