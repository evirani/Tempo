import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const ThemedButton = ({ style, goto = "/", ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <Link href={goto} style={[{
        backgroundColor: theme.card}, styles.card, { color: theme.text }, style]} {...props}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  card: {
        fontFamily: 'Outfit_400Regular',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    }
})