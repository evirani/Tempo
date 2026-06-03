import { StyleSheet, Image } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'

const Home = () => {

  return (
    <ThemedView style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={{ width: 100, height: 100, marginBottom: 30, marginLeft: 18 }} />  
      <ThemedText style={styles.title} title={true}>Tempo</ThemedText>
      <ThemedText style={styles.subtitle}>A simple music player app.</ThemedText>
      <ThemedButton style={styles.card} goto="/library">
        View all songs
      </ThemedButton>
    </ThemedView>
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