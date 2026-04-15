import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isWeb = width > 768;

export default function Banner({ imagem }) {
  return (
    <View style={styles.container}>
      <Image
        source={imagem}
        style={styles.image}
        resizeMode='cover'
      />
      <LinearGradient
        colors={['transparent', '#0F0F1A']}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Text style={styles.title}>John Wick 4</Text>
        <Text style={styles.subtitle}>
          Ação • Crime • Suspense
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>▶ Assistir</Text>
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  height: isWeb ? 800 : 220, // 🔥 maior na web
  overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%', 
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
  },

  content: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },

  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CCC',
    marginTop: 5,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#6C2BD9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  
});