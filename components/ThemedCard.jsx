import { View, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors"

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <View style={[{
        backgroundColor: theme.card}, styles.card, style]} {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
        fontFamily: 'Outfit_400Regular',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    }
})