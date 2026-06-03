import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const Library = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark  

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>Library</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>Your music collection.</Text>
      <Link href="/" style={[styles.card, { backgroundColor: theme.card, color: theme.text }]}>Home</Link>
    </View>
  )
}

export default Library

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Outfit_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        top: 20,
    },
    subtitle: {
        fontFamily: 'Outfit_400Regular',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        top: 15,
    },
    card: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        fontFamily: 'Outfit_400Regular',
    }
})