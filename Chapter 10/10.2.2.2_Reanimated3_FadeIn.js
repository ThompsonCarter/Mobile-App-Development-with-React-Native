import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function FadeInReanimated() {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
  }, []);

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Text style={styles.text}>Hello with Reanimated 3</Text>
    </Animated.View>
  );
}