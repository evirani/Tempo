import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import {useEffect} from 'react';
import { Stack } from 'expo-router'
import { useFonts, Outfit_400Regular } from '@expo-google-fonts/outfit'
import * as SplashScreen from 'expo-splash-screen'
import { Colors } from "../constants/Colors"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.dark
  const [loaded, error] = useFonts({
    Outfit_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.stackHeader },
        headerTintColor: theme.text,
        headerTitleStyle: { fontFamily: 'Outfit_400Regular', fontSize: 18, fontWeight: 'bold' },
    }}> 
        <Stack.Screen name="index" options={{ headerShown: false }, {title: "Home" }} />
        <Stack.Screen name="library" options={{ headerShown: true }, {title: "Library" }} />
    </Stack>
  )
}

const styles = StyleSheet.create({})