import { PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export function DraggableBox() {
  const x = useSharedValue(0), y = useSharedValue(0);
  const gesture = useAnimatedGestureHandler({
    onActive: e => { x.value = e.translationX; y.value = e.translationY; },
    onEnd: () => { x.value = withSpring(0); y.value = withSpring(0); },
  });
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={gesture}>
      <Animated.View style={[styles.box, style]} />
    </PanGestureHandler>
  );
}