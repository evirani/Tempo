import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark  

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../assets/img/logo.png')} style={{ width: 100, height: 100, marginBottom: 30, marginLeft: 18 }} />  
      <Text style={[styles.title, { color: theme.title }]}>Tempo</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>A simple music player app.</Text>
      <Link href="/library" style={[styles.card, { backgroundColor: theme.card, color: theme.text }]}>
        View all songs
      </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Outfit_400Regular',
        fontSize: 32,
        marginBottom: 5,
    },
    subtitle: {
        fontFamily: 'Outfit_400Regular',
        fontSize: 18,
        marginBottom: 30,
    },
    card: {
        fontFamily: 'Outfit_400Regular',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    }
})