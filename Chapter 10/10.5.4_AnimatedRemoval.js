function MailItem({ mail, onDelete }) {
  const height = useSharedValue(80);
  const animatedStyle = useAnimatedStyle(() => ({ height: height.value }));

  const renderRightActions = () => (
    <RectButton onPress={async () => {
      height.value = withTiming(0, { duration: 300 });
      await sleep(300);
      onDelete(mail.id);
    }} style={styles.deleteButton}>
      <Text style={styles.deleteText}>Delete</Text>
    </RectButton>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Animated.View style={[styles.item, animatedStyle]}>
        {/* content */}
      </Animated.View>
    </Swipeable>
  );
}