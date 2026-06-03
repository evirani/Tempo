import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />  
      <Text style={styles.title}>Tempo</Text>
      <Text style={styles.subtitle}>A simple music player app.</Text>
      <Link href="/library" style={styles.card}>
        View all songs
      </Link>
    </View>
  )
}

export default Home

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
    },
    subtitle: {
        fontFamily: 'Lucida Console, Courier New, monospace',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff9c',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        color: '#ffffff9c',
    }
})