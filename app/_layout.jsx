import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: '#1e1e1e' },
        headerTintColor: '#ffffff9c',
        headerTitleStyle: { fontFamily: 'Lucida Console, Courier New, monospace', fontSize: 18, fontWeight: 'bold' },
    }}> 
        <Stack.Screen name="index" options={{ headerShown: false }, {title: "Home" }} />
        <Stack.Screen name="library" options={{ headerShown: true }, {title: "Library" }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})