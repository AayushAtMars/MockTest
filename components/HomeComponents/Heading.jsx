import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({text}) => {
  return (
    <View>
      <Text style={styles.main}>{text}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    main:{
    fontSize: 15,
    fontWeight:"600",
    paddingTop:10
    }
})