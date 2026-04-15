import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import logo from '../img/logo.png'
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={[
         ' rgba(20,10,46,1)',
  'rgba(20,10,46,0.7)',
  'rgba(20,10,46,0)'
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient} // 👈 ESSENCIAL
      />

      <Image
        source={logo}
        style={styles.logo}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 110,
    zIndex: 10,
    elevation: 10,
    justifyContent: 'center',
  
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%', // 👈 cobre tudo
  },

  logo: {
    width: 160,
    height: 60,
    
  },
});