import { PinchGestureHandler } from 'react-native-gesture-handler';

const scale = useSharedValue(1);
const pinch = useAnimatedGestureHandler({
  onActive: e => { scale.value = e.scale; },
  onEnd: () => { scale.value = withTiming(1); },
});
const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

return (
  <PinchGestureHandler onGestureEvent={pinch}>
    <Animated.Image source={{ uri }} style={[styles.image, style]} />
  </PinchGestureHandler>
);