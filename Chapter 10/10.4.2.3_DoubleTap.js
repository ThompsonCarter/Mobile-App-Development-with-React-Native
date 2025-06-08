import { TapGestureHandler } from 'react-native-gesture-handler';

const lastTap = useRef(0);
function handleTap() {
  const now = Date.now();
  if (now - lastTap.current < 300) {
    scale.value = withTiming(2, { duration: 200 });
  }
  lastTap.current = now;
}

<TapGestureHandler numberOfTaps={2} onActivated={handleTap}>
  <Animated.View>{/* child */}</Animated.View>
</TapGestureHandler>