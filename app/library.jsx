import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'

const Library = () => {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>Library</ThemedText>
      <ThemedText style={styles.subtitle}>Your music collection.</ThemedText>
      <ThemedButton style={styles.card}>Home</ThemedButton>
    </ThemedView>
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