import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '../components/globals/Header'
import Libraryhero from '../components/LibraryComponnets/LibraryHero'
import CardContainer from '../components/LibraryComponnets/CardContainer'

const Library = () => {
  return (
    <SafeAreaProvider>
      <Header />
      <ScrollView style={styles.container}>
      <Libraryhero />
      <CardContainer/>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Library

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddf3fe",
    paddingHorizontal: 20,
  },
})