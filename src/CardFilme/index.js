import React, { useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isWeb = width > 768;

export default function CardFilme({ item }) {

  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Image source={item.imagem} style={styles.image} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
      marginLeft: isWeb ? 100 : 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 8,
  },

  image: {
      width: isWeb ? 150 : 110,
      height: isWeb ? 250 : 160,
      borderRadius: 10,
  },
});