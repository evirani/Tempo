import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>Your music collection.</Text>
      <Link href="/" style={styles.card}>Home</Link>
    </View>
  )
}

export default Library

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Lucida Console, Courier New, monospace',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
        top: 20,
    },
    subtitle: {
        fontFamily: 'Lucida Console, Courier New, monospace',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff9c',
        marginBottom: 20,
        top: 15,
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        color: '#ffffff9c',
    }
})